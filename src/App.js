import { Routes, Route, HashRouter } from "react-router-dom";
import About from "./components/About";
import DashBoard from "./components/DashBoard";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import NavBar from "./components/NavBar";
import OBList from "./components/OBList";
import MapofSNH from "./components/MapOfSNH";
import Events from "./components/Events";
import Poster from "./components/Poster";
import Particle from "./components/Particle";
import './App.css';

function App() {
  return (
    <div className="overflow-hidden relative text-pink-100" >
    
      <HashRouter>
        <Routes>
        <Route path="/" element={
            <div>
              <NavBar />
              <DashBoard />
              <About />
              <MapofSNH />
              <Footer />
            </div>
          } />
        <Route path="/events" element={
            <div>
              <NavBar />
              <Poster />
              <Events />
              <Footer />
            </div>
          } />
        <Route path="/about" element={
            <div>
              <NavBar />
              <About />
              <OBList />
              <Gallery />
              <Footer />
            </div>
          } />
        </Routes>
      </HashRouter>
      <Particle />
    </div>
  );
}

export default App;
