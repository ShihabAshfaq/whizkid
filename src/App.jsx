import React, { useState } from 'react';
import Banner from './components/Stickybanner';
import HeroSection from './components/HeroSection';
import DownloadSection from './components/DownloadSection';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Evidence from './components/Evidence';
import Experts from './components/Experts';
import './App.css';

import backgroundVideo from './Back.mp4';
import image1 from './ipad.png';
import image2 from './iphone.png';
import Image5 from './Dinosaur test 1.png';
import Swinlogo from './Swinburne_logo.png';
import autismlogo from './logo.svg';

import evidenceImage1 from './Reddot.png';
import evidenceImage2 from './Reddot.png';
import evidenceImage3 from './Reddot.png';

const App = () => {
  const [showBanner, setShowBanner] = useState(true);
  const evidenceImages = [evidenceImage1]; // Only include one instance of the Red Dot image.

  return (
    <div>
      <Banner 
        showBanner={showBanner} 
        onClose={() => setShowBanner(false)}
        message="Ready to start your learning journey?"
        actionButton={{
          text: "Download Now",
          onClick: () => {
            console.log("Download clicked"); 
            // Work on it later
          }
        }}
      />
      <HeroSection backgroundVideo={backgroundVideo} />
      <DownloadSection image1={image1} image2={image2} />
      <Evidence />
      <Testimonials />
      <Experts images={evidenceImages} />
      <Features />
      <CallToAction Image5={Image5} />
      <Footer autismlogo={autismlogo} Swinlogo={Swinlogo} />
    </div>
  );
};

export default App;