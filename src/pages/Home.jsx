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
        <div className="about-card">

        <div className="about-label">
        ABOUT THE BLACK MEN’S FORUM
        </div>
          
          
          
        <div className="about-images">
          <div className="image-card">
            <img src={random1} alt="Group event 1" />
          </div>
          <div className="image-card">
            <img src={random2} alt="Group event 2" />
          </div>
          <div className="image-card">
            <img src={random2} alt="Group event 3" />
          </div>
        </div>

        <div className="about-text">
          <p>
            Since The Harvard Black Men’s Forum (BMF) was founded in the 1970s, 
            it has developed into one of the most recognized and celebrated 
            organizations on Harvard’s campus...<br /><br />
          </p>

          <p>
            Since The Harvard Black Men’s Forum (BMF) was founded in the 1970s, 
            it has developed into one of the most recognized and celebrated 
            organizations on Harvard’s campus...<br /><br />
          </p>

          <p>
            Since The Harvard Black Men’s Forum (BMF) was founded in the 1970s, 
            it has developed into one of the most recognized and celebrated 
            organizations on Harvard’s campus...
          </p>
        </div>
          
          <button className="about-button">
            <Link to="/about" style={{ color: "white" }}>
              Learn More About Us
            </Link>
          </button>

        </div>
      </section>

      {/* PILLARS SECTION */}
      <section className="pillars">
        <div className="pillars-card">

          {/* Optional “tab” label at the top of the card */}
          <div className="pillars-label">
            THE PILLARS OF THE BLACK MEN’S FORUM
          </div>

          {/* Pillar Cards */}
          <div className="pillar-grid">
            {/* Pillar Card 1 */}
            <div className="pillar-card">
              <img src={random1} alt="Brotherhood" />
              <h3>Brotherhood</h3>
              <p>
                “[I will] prove myself a good brother by making a 
                conscious effort to know my fellow brethren on a 
                personal level and by providing a means for advice”
              </p>
            </div>

            {/* Pillar Card 2 */}
            <div className="pillar-card">
              <img src={random1} alt="Innovation" />
              <h3>Innovation</h3>
              <p>
              “Foster a culture of creativity and continuous improvement, 
              encouraging novel ideas and technological advancements.”
              </p>
            </div>

            {/* Pillar Card 3 */}
            <div className="pillar-card">
              <img src={random1} alt="Sustainability" />
              <h3>Sustainability</h3>
              <p>
              “Prioritize environmentally friendly practices to 
              ensure long-term ecological balance and reduce the 
              environmental impact.”
              </p>
            </div>

            {/* Pillar Card 4 */}
            <div className="pillar-card">
              <img src={random2} alt="Sustainability" />
              <h3>Collaboration</h3>
              <p>
                “Cultivate a collaborative work environment where
                 diverse talents come together, promoting effective 
                 communication, cooperation, and mutual support.”
              </p>
            </div>

            {/* Pillar Card 5 */}
            <div className="pillar-card">
              <img src={random1} alt="Innovation" />
              <h3>Community</h3>
              <p>
              Demonstrate a commitment to community involvent 
              and social responsibility, aiming to positively 
              impact the community 
              </p>
            </div>

            {/* Pillar Card 6 */}
            <div className="pillar-card">
              <img src={random1} alt="Innovation" />
              <h3>Empowerment</h3>
              <p>
              Invest in the growth and well-being of members by 
              providing opportunities for professional development, 
              a supportive workplace culture, and a focus on 
              work-life balance.
              </p>
            </div>

            



            {/* Add more pillar cards here for Collaboration, Community, Empowerment, etc. */}
          </div>

          <button className="pillars-button">
            <Link to="/pillars" style={{ color: "white" }}>
              Learn More About Our Pillars
            </Link>
          </button>

        </div>
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
