import React from "react";
import "./project.css";
import IMG1 from "../../assets/BWModern.png";
import IMG2 from "../../assets/KivaTeam.png";
import IMG3 from "../../assets/wikiControl.png";
import IMG4 from "../../assets/communiQuest.png";
import IMG5 from "../../assets/BrickWork.png";
import IMG6 from "../../assets/Meld.png";

const projects = [
  {
    id: 1,
    image: IMG1,
    title: "Lap Logic",
    // github: "",
    demo: "https://parsam123.github.io/parsas-portfolio/BWModern.pdf",
  },
  {
    id: 2,
    image: IMG2,
    title: "Kiva Teams Portfolio",
    demo: "https://sites.google.com/colorado.edu/kivateamsportfolios/home",
  },
  {
    id: 3,
    image: IMG3,
    title: "Wikipedia Info Crisis Control",
    demo: "https://medium.com/spring-2024-information-expositions/wikipedia-a-barometer-of-global-curiosity-and-information-control-during-crises-3c82d3b1cd1a",
  },
  {
    id: 4,
    image: IMG4,
    title: "CommuniQuest",
    demo: "https://parsam123.github.io/parsas-portfolio/communiQuest.pdf",
  },
  {
    id: 5,
    image: IMG5,
    title: "BrickWork",
    demo: "https://www.figma.com/proto/angMfK9qxyDS7hcSOBxQCp/Untitled?node-id=68-1407&starting-point-node-id=2%3A72&t=FU5Fl5JPoMhkdot6-1",
  },
  {
    id: 5,
    image: IMG6,
    title: "Meld",
    demo: "https://www.figma.com/proto/HZ6QEiwblRWm4LjKp0xJtg/MELD-Prototype?node-id=43-99&p=f&t=4v0fg3sqHppcTU0y-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=43%3A99",},
];
const Projects = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container project_container">
        {projects.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="project_item">
              <div className="project_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="project-item-cta">
                {/* <a href={github} className="btn">
                  Github
                </a> */}
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
