import { useRef } from 'react';
import './App.css';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/Navigation';
import Portfolio from './components/Portfolio/Portfolio';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Services from './components/Services/Services';

function App() {
  const about = useRef<null | HTMLDivElement>(null);
  const contact = useRef<null | HTMLDivElement>(null);
  const portfolio = useRef<null | HTMLDivElement>(null);
  const services = useRef<null | HTMLDivElement>(null);

  return (
    <div className="App">
      <Navigation options={[about, services, portfolio, contact]} />
      <About forwardRef={ about } />
      <Services forwardRef={ services } />
      <Portfolio forwardRef={ portfolio } />
      <Contact forwardRef={ contact } />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
