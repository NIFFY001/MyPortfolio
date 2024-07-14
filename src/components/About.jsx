import React from "react";
import NavBar from "./NavBar";
import about from "/src/assets/about.png";
import aboutimg from "/src/assets/aboutimg.png";

function About() {
  return (
    <>
      <NavBar />
      <div className="bg-black min-h-[100vh] pt-10">
        <div className="gap-10 flex flex-col md:flex-row md:px-20 px-5  ">
          <div className="">
            <img src={about} className=""></img>
          </div>
          <div className="">
            <img src={aboutimg}></img>
            <p className="text-white mb-5 ">
              My Name is Victor Akinsanmi, and I am a passionate frontend
              developer with a solid foundation in networking. With a keen eye
              for design and a commitment to creating seamless user experiences,
              I Specialise in building responsive, intuitive, and dynamic web
              applications. I am continuously expanding my skill set and i am
              always open to learning new technologies and methodologies. My
              goal is to leverage my technical expertise and eagerness to learn
              to contribute to innovative and impactful projects.
            </p>

            <div className="text-white flex md:gap-[100px] gap-[30px] mb-5">
              <ul className="">
                <li>▸ Javascript</li>
                <li>▸ React</li>
                <li>▸ Tailwind</li>
              </ul>
              <ul>
                <li>▸ HTML/CSS</li>
                <li>▸ Networking</li>
                <li>▸ Technical Assistant</li>
              </ul>
            </div>

            <div className="text-white mb-5">
              <h1 className="mb-3 font-bold text-xl">Certifications</h1>
              <p>▸ Certified Secure Computer User</p>
              <p>▸ Cisco Certifed Network Associate </p>
              <p>▸ SQL Fundamentals</p>
              <p>▸ Web Development </p>
              <p>▸ Machine Learning With R</p>
            </div>
            <div className="text-white mb-4">
              <h1 className="mb-3 font-bold text-2xl">Education</h1>
              <p>Bsc | Computer Science</p>
              <p> Redeemers University Ede, Osun State,</p>
              <p> 2019-2023.</p>
            </div>
            <div className="text-white">
              <h1 className="mb-3 font-bold text-2xl">Interests</h1>
              <p>▸ Driving</p>
              <p>▸ Music</p>
              <p>▸ Coding</p>
              <p>▸ Table Tennis</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
