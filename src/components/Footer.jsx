// src/components/Footer/Footer.jsx
const Footer = ({ autismlogo, Swinlogo }) => {
    const footerLinks = [
      "Download the app",
      "Copyright and Disclaimer",
      "Privacy Policy",
      "AutismGames.com"
    ];
  
    return (
      <div className="footer">
        <div className="footer-left">
          {footerLinks.map((link, index) => (
            <div key={index} className="footer-left-item">{link}</div>
          ))}
        </div>
        <div className="footer-right">
          <div className="footer-images">
            <img src={autismlogo} alt="Autism Logo" />
            <img src={Swinlogo} alt="Swinburne Logo" />
          </div>
          <div className="footer-copyright">
            © 2024 Whizkid Games. All Rights Reserved.
          </div>
        </div>
      </div>
    );
  };

  export default Footer