import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Certification from "./components/Certification/Certification";
import BlurBlob from './components/BlurBlob';
import Loader from './components/Loader'; 
import GoToTopButton from './components/GoToTopButton'; 

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-[#050414]">
      <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Certification />
        <Contact />
        <Footer />
        <GoToTopButton/>
        
      </div>
    </div>
    
  );
};

export default App;
