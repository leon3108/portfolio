import Banner from './banner';
import Experiences from './experiences';
import Header from './header';
import Internships from './internships';
import Line from './line';
import Projects from './projects';
import Stack from './stack';

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Stack />
      <Line />
      <Projects />
      <Internships />
      <Experiences />
    </main>
  );
}
