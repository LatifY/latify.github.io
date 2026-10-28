import { useState, useEffect } from 'react';

export const TypewriterText = () => {
  const words = ['games'];
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullWord = words[wordIndex];

      if (!isDeleting) {
        setText(fullWord.substring(0, text.length + 1));
        
        if (text === fullWord) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(fullWord.substring(0, text.length - 1));
        
        if (text === '') {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <span>
      i make games
    </span>
  );
};
