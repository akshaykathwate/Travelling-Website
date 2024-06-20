import  About from "./pages/About";
import  Blog  from "./pages/Blog";
import  Home  from "./pages/Home";
import  Tours  from "./pages/Tours";
import Footer from './pages/Footer';
import  Navbar  from './components/Navbar';

import {Routes,Route} from 'react-router-dom';
const App = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
  
      </Routes>
      <Footer />
    </main>
  );
}; 

export default App;
