import { useEffect, useRef } from 'react';

const CallToAction = ({ Image5 }) => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <div className="fifth-page">
      <div className="left-section" ref={contentRef}>
        <h2 className="fifth-page-heading">Start your child's journey for free today!</h2>
        <p className="fifth-page-content">
          Unleash the power of learning through play by downloading our app today and starting your free trial. 
          Dive into a world where education meets entertainment, offering a rich tapestry of interactive games 
          designed to captivate young minds. Don't miss out on this opportunity to spark curiosity and foster 
          essential skills in your child.
        </p>
        <button className="download-btn">Download the App</button>
      </div>
      <div className="right-section">
        <div className="fifth-page-background-square animate-square"></div>
        <img 
          src={Image5} 
          alt="Learning through play" 
          className="fifth-page-image image-hidden"
          ref={imageRef}
        />
      </div>
    </div>
  );
};

export default CallToAction;