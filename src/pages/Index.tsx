import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <main>
      <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f0f0f0' }}>
        <h1>Xanh Asian - Công Ty Cổ phần Môi trường Năng lượng Xanh</h1>
      </div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
