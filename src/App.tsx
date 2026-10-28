import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { GameProjects } from './sections/GameProjects';
import { WebProjects } from './sections/WebProjects';
import { OtherProjects } from './sections/OtherProjects';
import { Achievements } from './sections/Achievements';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Hobbies } from './sections/Hobbies';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <GameProjects />
        <Experience />
        <Achievements />
        <OtherProjects />
        <WebProjects />
        <Education />
        <Hobbies />
      </main>
      <Footer />
    </div>
  );
}

export default App;
