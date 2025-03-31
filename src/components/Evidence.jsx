import React from 'react';

export const evidenceData = {
  title: "Evidence-based",
  sections: [
    {
      heading: "Clinical Trial",
      content: "Whizkid Games was put to the test in a clinical trial to make sure it really works. The result? A fun, research-backed way to help kids build confidence in everyday life!"
    },
    {
      heading: "Built with real needs in mind",
      content: "Designed to support their development of key skills within the DSM-5 criteria for the Autism Spectrum Disorder."
    }
  ]
};

const ContentSection = ({ heading, content }) => (
  <div className="content-section">
    <h2 className="section-heading">{heading}</h2>
    <p className="section-content">{content}</p>
  </div>
);

const Evidence = ({ 
  title = evidenceData.title,
  sections = evidenceData.sections,
  className = "evidence-page" 
}) => {
  return (
    <div className={className}>
      <h1 className="main-heading">{title}</h1>
      <div className="content-container">
        {sections.map((section, index) => (
          <ContentSection
            key={index}
            heading={section.heading}
            content={section.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Evidence;