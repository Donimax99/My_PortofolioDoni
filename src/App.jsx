import './App.css';

import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Education from './components/education';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Certificate from './components/certificate';
import Experience from './components/experience';
import Footer from './components/footer';
import ProjectDetail from './components/ProjectDetail';
import ScrollToTop from './components/scrolltoTop';
import SeeProjects from "./components/SeeProjects";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        {/* =========================
            MAIN PORTFOLIO
        ========================== */}
        <Route
          path="/"
          element={
            <div className="portfolio-layout">

              {/* Navbar */}
              <Navbar />

              {/* Main Content */}
              <main className="main-content">

                <Hero />
                <About />
                <Education />
                <Skills />
                <Projects />
                <Experience />
                <Certificate />
                <Contact />

                <Footer />

              </main>

            </div>
          }
        />

        {/* =========================
            PROJECT DETAIL
        ========================== */}
        <Route
          path="/project/simega"
          element={<ProjectDetail />}
        />

        <Route
          path="/see-project/:id"
          element={<SeeProjects />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;