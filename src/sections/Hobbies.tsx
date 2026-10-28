import { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Hobby, HobbyMedia } from '../types';

const getYoutubeId = (url: string) => {
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/);
  return match ? match[1] : null;
};

const VIDEO_HEIGHT_REM = 12;

const HobbyVideo = ({ video }: { video: HobbyMedia }) => {
  const youtubeId = getYoutubeId(video.src);
  const [aspectRatio, setAspectRatio] = useState(video.src.includes('/shorts/') ? 9 / 16 : 16 / 9);

  return (
    <div style={{ width: `min(100%, ${VIDEO_HEIGHT_REM * aspectRatio}rem)` }}>
      <div className="rounded-lg overflow-hidden glass-card bg-black" style={{ aspectRatio }}>
        {youtubeId ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={video.title}
            className="w-full h-full"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            src={video.src}
            controls
            preload="metadata"
            className="w-full h-full object-contain"
            onLoadedMetadata={(e) => {
              const { videoWidth, videoHeight } = e.currentTarget;
              if (videoWidth && videoHeight) setAspectRatio(videoWidth / videoHeight);
            }}
          />
        )}
      </div>
      <p className="mt-2 font-medium">{video.title}</p>
      {video.description && (
        <p className="text-sm text-gray-600 dark:text-gray-400">{video.description}</p>
      )}
      {video.date && <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{video.date}</p>}
    </div>
  );
};

export const Hobbies = () => {
  const [hobbies, setHobbies] = useState<Hobby[]>([]);
  const [slides, setSlides] = useState<{ src: string }[]>([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    fetch('/hobbies/hobbies.json')
      .then((res) => res.json())
      .then((data: Hobby[]) => setHobbies(data))
      .catch(() => setHobbies([]));
  }, []);

  if (hobbies.length === 0) return null;

  const openPhoto = (photos: HobbyMedia[], i: number) => {
    setSlides(photos.map((photo) => ({ src: photo.src })));
    setIndex(i);
  };

  return (
    <section id="hobbies" className="section-spacing">
      <div className="content-wrapper">
        <h2 className="text-2xl font-bold mb-6 section-indicator">
          Hobbies
        </h2>

        <div className="space-y-6">
          {hobbies.map((hobby) => (
            <article key={hobby.id} className="pb-6 border-b border-gray-200 dark:border-gray-800 last:border-0">
              <h3 className="text-lg font-semibold mb-1">{hobby.title}</h3>
              <p className="text-gray-700 dark:text-gray-400 mb-4">{hobby.description}</p>

              {hobby.videos && hobby.videos.length > 0 && (
                <div className="flex flex-wrap items-start gap-4 mb-4">
                  {hobby.videos.map((video) => (
                    <HobbyVideo key={video.src} video={video} />
                  ))}
                </div>
              )}

              {hobby.photos && hobby.photos.length > 0 && (
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {hobby.photos.map((photo, i) => (
                    <div
                      key={photo.src}
                      className="group aspect-square rounded-md overflow-hidden glass-card cursor-pointer"
                      onClick={() => openPhoto(hobby.photos!, i)}
                    >
                      <img src={photo.src} alt={photo.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      <Lightbox open={index >= 0} index={index} close={() => setIndex(-1)} slides={slides} />
    </section>
  );
};
