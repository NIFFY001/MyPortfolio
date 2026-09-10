import React from "react";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

import NavBar from "./NavBar";
import "../pages/Projects.css";
import zealluck from "../assets/zealluck.png";
import spaceserve from "../assets/spaceserve.png";
import samtlgroup from "../assets/samtlgroup.png";
import axess from "../assets/axess.png";
import axessweb from "../assets/axessweb.png";
import cusla from "../assets/cusla.png";
import moth from "../assets/moth.png";
function Projects() {
  return (
    <>
      <NavBar />

      <main className="projects-page">
        {/* HERO */}
        <section className="projects-hero">
          <div className="projects-glow"></div>

          <div className="projects-hero-content">
            <div className="projects-label">
              <span>03</span>
              <p>Selected Work</p>
            </div>

            <h1 className="font-display">
              Projects that turn
              <span> ideas into experiences.</span>
            </h1>

            <p className="projects-intro">
              A collection of digital products and experiences built with
              thoughtful design, modern technologies and a focus on usability.
            </p>
          </div>

          <div className="projects-orbit orbit-one"></div>
          <div className="projects-orbit orbit-two"></div>
        </section>

        {/* PROJECTS */}
        <section id="work" className="projects-section">
          <div className="projects-heading">
            <div>
              <span className="projects-eyebrow">SELECTED PROJECTS</span>

              <h2 className="font-display">Things I've built</h2>
            </div>

            <p>
              04 <span>projects</span>
            </p>
          </div>

          <div className="projects-grid">
            {data.map((project, index) => (
              <article className="project-card" key={project.title}>
                {/* NUMBER */}
                <div className="project-number">0{index + 1}</div>

                {/* IMAGE */}
                <div className="project-image-wrapper">
                  <div className="project-image-glow"></div>

                  <div className="project-image">
                    <img src={project.img} alt={project.title} />
                  </div>

                  <div className="project-overlay">
                    <a
                      href={project.webLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title}`}
                    >
                      <FaArrowUpRightFromSquare />
                    </a>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="project-content">
                  <div className="project-meta">
                    <span>WEB DEVELOPMENT</span>
                    <span>0{index + 1}</span>
                  </div>

                  <h3 className="font-display">{project.title}</h3>

                  <p className="project-description">{project.des}</p>

                  {/* TOOLS */}
                  <div className="project-tools">
                    {project.tools.split(",").map((tool) => (
                      <span key={tool}>{tool.trim()}</span>
                    ))}
                  </div>

                  {/* LINKS */}
                  <div className="project-links">
                    <a
                      href={project.webLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live website
                      <FaArrowUpRightFromSquare />
                    </a>

                    <a
                      href={project.gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* BOTTOM STATEMENT */}
        <section className="projects-end">
          <div className="projects-end-line"></div>

          <p className="font-display">
            Good products are built with
            <span> intention.</span>
          </p>

          <div className="projects-end-line"></div>
        </section>
      </main>
    </>
  );
}

export default Projects;

const data = [
  {
    img: spaceserve,
    title: "Spaceserve Website",
    des: "Spaceserve Website was designed for an IT consulting company dedicated to transforming business through cutting-edge technology solutions.",
    tools: "React, Javascript, Tailwind CSS",
    webLink: "https://spaceserve-website-pi.vercel.app/",
    gitLink: "https://github.com/projectalpha-spaceserve/spaceserve-website",
  },

  {
    img: axessweb,
    title: "Axess2Cash Web App",
    des: "Axess2Cash Web application was designed for a startup FINTECH that ventures in carrying out transactions.",
    tools: "React, Javascript, Tailwind CSS",
    webLink: "https://axesswebanking.vercel.app/",
    gitLink: "https://github.com/Israel306/axesswebanking",
  },

  {
    img: samtlgroup,
    title: "Samtl Group Website",
    des: "Samtl Group website was designed for an organization with various subsidiaries. The group website shows what each subsidiary does.",
    tools: "React, Javascript, Tailwind CSS",
    webLink: "https://samtl-group-website.vercel.app/",
    gitLink: "https://github.com/projectalpha-spaceserve/samtl-group-web",
  },

  {
    img: axess,
    title: "Axess2Cash",
    des: "Axess2Cash was designed for a platform that integrates blockchain technology and cryptocurrencies into the platform to enhance transaction security, transparency, and user confidence.",
    tools: "React, Javascript, Tailwind CSS",
    webLink: "https://axess2-cash.vercel.app/",
    gitLink: "https://github.com/Israel306/Axess2Cash",
  },

  {
    img: cusla,
    title: "Cushla Bakery",
    des: "Cushla Bakery is a website designed for a bakery business that specializes in creating delicious baked goods and treats for customers.",
    tools: "React, Javascript, Tailwind CSS , Firebase, Node Js",
    webLink: "https://cushla.netlify.app/",
    gitLink: "https://github.com/donbay01/cushla",
  },

  {
    img: moth,
    title: "Moth Project",
    des: "Moth project is a digital bank simulation that allows users to create an account, deposit and withdraw funds, and view their transaction history. It is designed to provide a realistic banking experience for users.",
    tools: "React, Javascript, Tailwind CSS , Firebase, Node Js",
    webLink: "https://mothproject-nu.vercel.app/",
    gitLink: "https://github.com/Israel306/mothproject",
  },
];
