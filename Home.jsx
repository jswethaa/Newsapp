import React from 'react';
import './Home.css'; 
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>WELCOME TO HOTCHIPS!!!</h1>
        <h1>Stay Informed with the Latest News</h1>
        <p>Your go-to source for real-time updates on various topics.</p>
        <button className="hero-button">Explore Now</button>
      </header>

      <section className="featured-articles">
        <h2>Featured Articles</h2>
        <div className="article-list">
          <div className="article-card">
            <img src={'/assets/article1.png'} alt="Article 1" />
            <h3>THE NEW EUROPEAN</h3>
            <p>In-depth articles and news focused on European politics, culture, and current events.</p>
          </div>
          <div className="article-card">
            <img src={'/assets/article2.png'} alt="Article 2" />
            <h3>BBC NEWS</h3>
            <p>Reliable, in-depth global coverage on various topics like politics and culture.</p>
          </div>
          <div className="article-card">
            <img src={'/assets/article3.png'} alt="Article 3" />
            <h3>GOOGLE UPDATES</h3>
            <p>Up-to-date curated content from various sources on trending topics.</p>
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <h2>Join Us for Daily Updates!</h2>
        <button className="cta-button">Subscribe Now</button>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column1">
            <h3>About Us</h3>
            <p>We are your trusted source for the latest news, delivering timely updates across multiple sectors.</p>
          </div>
          <div className="footer-column2">
            <h3>Contact Us</h3>
            <p>Email: info@hotchipsnews.com</p>
            <p>Phone: +123-456-7890</p>
          </div>
          <div className="footer-column3">
            <h3>Follow Us</h3>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="social-icon" /> Facebook
            </a> <br />
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="social-icon" /> Twitter
            </a> <br />
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="social-icon" /> Instagram
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 HOTCHIPS News. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
