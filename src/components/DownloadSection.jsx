import { useEffect, useRef } from 'react';

const DownloadSection = ({ image1, image2 }) => {
  const backImageRef = useRef(null);
  const frontImageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (backImageRef.current) observer.observe(backImageRef.current);
    if (frontImageRef.current) observer.observe(frontImageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (backImageRef.current) observer.unobserve(backImageRef.current);
      if (frontImageRef.current) observer.unobserve(frontImageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <div className="second-page">
      <div className="left-section" ref={contentRef}>
        <h2 className="sub-heading">Empowering kids to build lifestyle skills</h2>
        <p className="sub-content">
          We believe that every child deserves the confidence to navigate daily life with ease.
          <br /><br />
          Our interactive, evidence-based games help kids to develop essential independent living 
          skills—like getting dressed, making eye contact, and coping with change—in a fun, 
          engaging way.
        </p>
        <div className="new-download-section">
          <button className="download-btn">Get the App</button>
        </div>
      </div>
      <div className="right-section">
        <div className="overlapping-images-container">
          <img 
            src={image1} 
            alt="Screenshot 1" 
            className="image-back slide-hidden"
            ref={backImageRef}
          />
          <img 
            src={image2} 
            alt="Screenshot 2" 
            className="image-front slide-hidden"
            ref={frontImageRef}
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;