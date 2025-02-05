// Home.jsx
    //This Link import was flagged an error for not being used
import { Link } from 'react-router-dom';
// import Construction from '../components/Construction'; 
import Header from '../components/Header';

import logo from '../images/logo.png';
import groupHero from '../images/group-1.jpg';
import random1 from '../images/random-1.png';
import random2 from '../images/random-2.png';

export default function Home() {
  return (
    <>
      {/* Site Header / Nav */}
      <Header />

      {/* HERO SECTION */}
      <section className="hero">
        <img 
          src={groupHero} 
          alt="Group of BMF members" 
          className="hero-image" 
        />
        <div className="hero-content">

          <h1 className="hero-title">Occidental’s Black <br /> Men’s Forum</h1>


          <div className="hero-buttons">
            <button><Link to="/history" style={{color: "white"}}> Learn More </Link></button>
            <button><Link to="/events" style={{color: "white"}}>Events &amp; Programs</Link></button>
            
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <h2>About the Black Men’s Forum</h2>

        <div className="about-images">
          <img src={random1} alt="Group event 1" />
          <img src={random2} alt="Group event 2" />
        </div>

        <p className="about-text">
          Since The Harvard Black Men’s Forum (BMF) was founded in the 1970s, it 
          has developed into one of the most recognized and celebrated organizations 
          on Harvard’s campus. Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>

        <button className="about-button"> <Link to="/about" style={{color: "white"}}> Learn More About Us</Link></button>
        
      </section>

      {/* PILLARS SECTION */}
      <section className="pillars">
        <h2>The Pillars of the Black Men’s Forum</h2>

        <div className="pillar-grid">
          {/* Pillar Card 1 */}
          <div className="pillar-card">
            <img src={random1} alt="Brotherhood" />
            <h3>Brotherhood</h3>
            <p>
              “[I will] prove myself a good brother by making a conscious effort
              to know my fellow brethren...”
            </p>
          </div>

          {/* Pillar Card 2 */}
          <div className="pillar-card">
            <img src={random1} alt="Innovation" />
            <h3>Innovation</h3>
            <p>
              “Foster a culture of creativity and continuous improvement, 
              encouraging novel ideas...”
            </p>
          </div>

          {/* Pillar Card 3 */}
          <div className="pillar-card">
            <img src={random1} alt="Sustainability" />
            <h3>Sustainability</h3>
            <p>
              “Prioritize environmentally friendly practices to ensure
              long-term ecological balance...”
            </p>
          </div>

          {/* You can add more pillar cards for Collaboration, Community, Empowerment, etc. */}
        </div>

        <button className="pillars-button"><Link to ="/pillars" style = {{color: "white"}}>Learn More About Our Pillars</Link></button>
      </section>

      {/* PARTNERS SECTION */}
      <section className="partners">
        <h2>OUR PARTNERS</h2>
        <p className="partners-text">
          Our partners are vital to our organization since they fund the numerous 
          events we have during the year. We would like to thank all of our partners. 
          Click here to learn more about becoming a partner.
        </p>

        <div className="partners-logos">
          {/* If you just have one partner or you want to show your own logo: */}
          <img src={logo} alt="Example Partner Logo" />
          {/* If you have more partner or social icons, list them here. */}
        </div>
      </section>
    </>
  );
}
