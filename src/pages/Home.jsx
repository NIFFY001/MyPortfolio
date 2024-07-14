import React from "react";
import NavBar from "../components/NavBar";
import intro from "/src/assets/intro.png";
import contact from "/src/assets/contact.png";
import contactme from "/src/assets/contactme.png";
import ContactForm from "../components/ContactForm";
import Contact from "../components/Contact";
import about from "/src/assets/about.png";
import aboutimg from "/src/assets/aboutimg.png";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="bg-black min-h-[100vh] ">
        <div className=" md:pt-20 p-5 md:p-20 bg-[#060606] flex flex-col md:flex-row items-center w-full  gap-10">
          <div className="">
            <div className=" text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#FFA500] to-[#FF0000] bg-clip-text text-transparent">
                Hello !
              </span>
            </div>
            <h1 className="text-white text-3xl mb-3">
              I'm{" "}
              <span className="bg-gradient-to-r from-[#FFA500] to-[#FF0000] bg-clip-text text-transparent">
                Victor
              </span>{" "}
              Akinsanmi
            </h1>

            <p className="text-white text-2xl mb-2">
              Web Designs For Your Brand
            </p>
            <p className="mb-5 text-white md:w-[90%] text-xl">
              Transforming your online presence with innovative and visually
              captivating websites. Let us bring your brand's vision to life
              through exceptional web design.
            </p>
          </div>
          <div className="">
            <img src={intro}></img>
          </div>
        </div>

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
