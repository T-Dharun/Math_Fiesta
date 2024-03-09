import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Particle from "./components/Particle";
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/event/event";
import Gallery from "./components/gallery/gallery";
import Coordinators from "./components/Coordinators";
import "./App.css";

function App() {
  return (
    <div className="overflow-hidden relative text-pink-100">
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <Home />
                <About />
                <Gallery />
                <Footer />
              </div>
            }
          />
          <Route
            path="/events"
            element={
              <div>
                <Navbar />
                <Events />
                <Footer />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div>
                <Navbar />
                <About />
                <Coordinators />

                <Footer />
              </div>
            }
          />
        </Routes>
      </HashRouter>
      <Particle />
    </div>
  );
}

export default App;
