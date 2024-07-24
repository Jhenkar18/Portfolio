
import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Experience from './component/Experience';
import Footer from './component/Footer';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Portfolio from './component/Portfolio';
import Resume from './component/Resume';




function App() {
  return (
    <div>

      <Navbar /> 
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Resume />
      <Footer />
      
    </div>
  );
}

export default App;
