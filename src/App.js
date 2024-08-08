import React, { useEffect } from "react";
import "./index.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import GalaxyBackground from "./screens/HomePage/BackgroundThemes/GalaxyBackground";
import Navbar from "./screens/HomePage/NavBar";
import Home from "./screens/HomePage/Home";
import About from "./screens/About/About";
import Projects from "./screens/Projects/Projects";
import Resume from "./screens/Resume/Resume";
import Footer from "./screens/HomePage/Footer";
import CustomCursor from "./CustomCursor";
import BackToTopButton from "./BackToTopButton";
import Loading from "./screens/Loading";
import { LoadingProvider, useLoading } from "./contexts/LoadingContext";

const AppContent = () => {
  const location = useLocation();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timeout);
  }, [location, setIsLoading]);

  return (
    <div className="app-container">
      <GalaxyBackground />
      <Navbar />
      <CustomCursor />
      <Loading />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

function App() {
  return (
    <LoadingProvider>
      <Router>
        <AppContent />
      </Router>
    </LoadingProvider>
  );
}

export default App;
