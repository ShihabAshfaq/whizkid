export const featuresData = {
  title: "For parents, carers and teachers",
  description: "The Autism Games website is your support hub for parents who wish to maximise their subscription benefits. It provides in-depth descriptions of each game, ways to translate in-game teachings to the real world video demonstrations, and personalised strategies for children with autism. The platform fosters a sense of community, enabling parents to connect and share experiences. With its concise and accessible content, the Autism Games website empowers parents to create effective learning environments for their children, promoting growth and development.",
  buttonText: "Learn More",
  features: [
    "Manage your subscription",
    "Track your child's progress",
    "Get notified about new releases",
    "Support your child's learning"
  ]
};


const FeatureSquare = ({ feature }) => (
  <div className="square">
    {feature}
  </div>
);


const Features = ({ 
  title = featuresData.title,
  description = featuresData.description,
  buttonText = featuresData.buttonText,
  features = featuresData.features,
  onButtonClick = () => {},
  className = "fourth-page"
}) => {
  return (
    <div className={className}>
      <div className="left-section">
        <h2 className="fourth-page-heading">{title}</h2>
        <p className="fourth-page-content">{description}</p>
        <button 
          className="download-btn"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
      <div className="right-section">
        {features.map((feature, index) => (
          <FeatureSquare key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;