import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stories from "./components/Stories";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import StoryPage from "./components/StoryPage";




function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stories />
      <CTA />
    </>
  );
}

function App() {
  return (
    <>
     
      <ScrollHandler />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story/:slug" element={<StoryPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
