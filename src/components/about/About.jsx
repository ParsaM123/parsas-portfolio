import React from "react";
import "./about.css";
import Me from "../../assets/me.png";
import { FaAward, FaCertificate, FaFolder } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Hey I'm</h5>
      <h2>Parsa Mahbobi</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="About me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about_card">
              <FaCertificate className="about_icon" />
              <h5>Certificates</h5>
              <small>3</small>
            </article>
            <article className="about_card">
              <FaFolder className="about_icon" />
              <h5>Projects</h5>
              <small>10+ projects completed</small>
            </article>
          </div>
          <p>
          Human-Centered Designer, UX Designer, and Information Science 
          Specialist with a focus on Human-Computer Interaction (HCI) and 
          user experience design. Passionate about creating intuitive, 
          impactful solutions that enhance user experiences and bridge the 
          gap between people and technology. Skilled in combining technical 
          expertise with communication strategies to deliver innovative and 
          meaningful projects. 
          </p>
          <a href="#project" className="btn btn-primary">
            {" "}
            See my projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
