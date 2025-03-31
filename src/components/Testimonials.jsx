import { useEffect, useRef } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "Whizkid Games proved to be a great favorite with my grandson who has ASD (a computer nerd at 8 yrs who gets a huge chuckle from them), and also my 12 yr old granddaughter who has Down Syndrome and is not computer literate but managed to find them and is mesmerised. They help her tremendously and she has now mastered the art of dressing herself and recognizing the weather.",
      author: "Jan, grandparent"
    },
    {
      content: "I have a 4 year old son with ASD who has just started using Whizkid Games this week and he is really enjoying it. The difference between this site and others we use is that it is specifically designed for kids with ASD. We have found that mainstream sites can be somewhat challenging as they progress too quickly onto advanced/further levels. Whizkids is a slower pace, is very easy to navigate through and it really grabs his attention for a decent amount of time.",
      author: "Anastasia, mother"
    },
    {
      content: "I have a 4 year old son with ASD who has just started using Whizkid Games this week and he is really enjoying it. The difference between this site and others we use is that it is specifically designed for kids with ASD.",
      author: "Anastasia, mother"
    }
  ];

  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('card-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="third-page">
      <div className="background-trees"></div>
  
      <div className="testimonials-content">
        <h1 className="testimonials-heading">Real Stories, Real Impact</h1>
        <h2 className="testimonials-subheading">From the Whizkid Games community</h2>
  
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card card-hidden"
              ref={el => cardRefs.current[index] = el}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="testimonial-content">{testimonial.content}</div>
              <div className="testimonial-author">
                <div className="author-name">{testimonial.author.split(",")[0]}</div>
                <div className="author-role">{testimonial.author.split(",")[1]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;