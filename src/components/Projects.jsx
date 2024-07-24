import React from "react";
import line from "../assets/Line.svg";
import Card from "./Card";
import zealluck from "../assets/zealluck.png";
import spaceserve from "../assets/spaceserve.png";
import samtlgroup from "../assets/samtlgroup.png";
import axess from "../assets/axess.png";
import axessweb from "../assets/axessweb.png";
import projects from "../assets/projects.png";
import NavBar from "./NavBar";

function Projects() {
  return (
    <>
      <NavBar />
      <section
        id="work"
        className="bg-black text-white px-5 md:px-20 py-10 min-h-screen"
        style={{ borderTop: "1px solid #4b5563" }}
      >
        <div className="pt-6 pb-3">
          <img src={projects} alt="Projects" />
        </div>
        {data.map((project, index) => (
          <Card
            key={index}
            img={project.img}
            title={project.title}
            des={project.des}
            webLink={project.webLink}
            tools={project.tools}
            gitLink={project.gitLink}
          />
        ))}
      </section>
    </>
  );
}

export default Projects;

const data = [
  {
    img: spaceserve,
    title: "Spaceserve Website",
    des: "Spaceserve Website was designed for an IT consulting company dedicated to transforming business through cutting-edge technology solutions.",
    tools: "React, Javascript & Tailwind CSS",
    webLink: "https://spaceserve-website-pi.vercel.app/",
    gitLink: "https://github.com/projectalpha-spaceserve/spaceserve-website",
  },
  {
    img: axessweb,
    title: "Axess2Cash Web App",
    des: "Axess2Cash Web application was designed for a startup FINTECH that ventures in carrying out transactions.",
    tools: "React, Javascript & Tailwind CSS",
    webLink: "https://axesswebanking.vercel.app/",
    gitLink: "https://github.com/Israel306/axesswebanking",
  },
  {
    img: samtlgroup,
    title: "Samtl Group Website",
    des: "Samtl Group website was designed for an organization with various subsidiaries. The group website shows what each of the Subsidiary does.",
    tools: "React, Javascript & Tailwind CSS",
    webLink: "https://samtl-group-website.vercel.app/",
    gitLink: "https://github.com/projectalpha-spaceserve/samtl-group-web",
  },
  {
    img: axess,
    title: "Axess2Cash",
    des: "Axess2cash was designed for a platform that integrates blockchain technology and cryptocurrencies like bitcoin into the platform to enhance transaction security, transparency, boosting user confidence and trust in their services.",
    tools: "React, Javascript & Tailwind CSS",
    webLink: "https://axess2-cash.vercel.app/",
    gitLink: "https://github.com/Israel306/Axess2Cash",
  },
];
