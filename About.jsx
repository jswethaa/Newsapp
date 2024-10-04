import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About News App</h1>
      <p>
        Welcome to our news app! This application provides the latest news from various sources. 
        Our goal is to keep you informed with real-time updates and comprehensive articles 
        on a variety of topics.
      </p>
      <p>
        We utilize a third-party news API to aggregate articles from credible news sources. 
        The app features a user-friendly interface, allowing easy navigation through news categories.
      </p>
      <h2>Features</h2>
      <ul className={'features'}>
        <li>Access to the latest news articles</li>
        <li>Search functionality to find specific topics</li>
        <li>Responsive design for mobile and desktop</li>
        <li>User-friendly navigation</li>
        <li>Bookmark your favorite articles for later reading</li>
        <li>Customize your news feed based on your interests</li>
      </ul>
      <h2>Our Vision</h2>
      <p>
        At our core, we believe in the power of information. 
        Our mission is to provide users with accurate, timely, and reliable news. 
        We are dedicated to promoting transparency and integrity in journalism.
      </p>
      <h2>Get Involved</h2>
      <p>
        We appreciate feedback from our users! If you have suggestions, ideas, or if you would like to contribute, 
        feel free to reach out to us. Together, we can make this app even better!
      </p>
      <p>
        Thank you for using our app, and we hope you enjoy your experience!
      </p>
    </div>
  );
};

export default About;
