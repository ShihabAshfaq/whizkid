
const HeroSection = ({ backgroundVideo }) => {
    return (
      <div className="first-page">
        <div className="video-container">
          <video autoPlay loop muted playsInline className="background-video">
            <source src={backgroundVideo} type="video/mp4" />
            <source src={backgroundVideo} type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>
        <div className="content-wrapper">
          <img src="./logo.png" alt="Company Logo" className="logo" />
          <header className="header">
            <h1 className="heading">Whizkid Games is Back!</h1>
            <p className="content">
              While we were out of action, we were working on making Whizkid Games even
              better than before. With the same games that our users know and love (plus plenty
              of new ones on the way!), we're excited for you to experience the Whizkid Games
              app.
            </p>
          </header>
          <div className="download-section">
            <button className="download-btn">Download the app</button>
          </div>
        </div>
      </div>
    );
  };

  export default HeroSection