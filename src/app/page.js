import Header from '../../components/Header';
import Home from '../../components/Home';
import About from '../../components/About';
import Experience from '../../components/Experience';
import Tools from '../../components/Tools';
import Portfolio from '../../components/Portfolio';
import Certifications from '../../components/Certifications';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Experience />
        <Tools />
        <Portfolio />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}