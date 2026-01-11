import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { LeetCode } from './sections/LeetCode';
import { GameProjects } from './sections/GameProjects';
import { WebProjects } from './sections/WebProjects';
import { OtherProjects } from './sections/OtherProjects';
import { Achievements } from './sections/Achievements';
import { Education } from './sections/Education';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <LeetCode />
        <div id="projects">
          <GameProjects />
          <WebProjects />
          <OtherProjects />
        </div>
        <Achievements />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
