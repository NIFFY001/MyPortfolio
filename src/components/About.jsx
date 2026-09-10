import React from "react";
import NavBar from "./NavBar";
import "./About.css";

const stack = [
  {
    name: "React",
    role: "Frontend",
    color: "#61DAFB",
    letter: "R",
  },
  {
    name: "JavaScript",
    role: "Language",
    color: "#F7DF1E",
    letter: "JS",
  },
  {
    name: "TypeScript",
    role: "Language",
    color: "#3178C6",
    letter: "TS",
  },
  {
    name: "Python",
    role: "Language",
    color: "#4B8BBE",
    letter: "Py",
  },
  {
    name: "Node.js",
    role: "Runtime",
    color: "#4FA84C",
    letter: "N",
  },
  {
    name: "Tailwind",
    role: "Styling",
    color: "#38BDF8",
    letter: "T",
  },
  {
    name: "HTML",
    role: "Markup",
    color: "#D8683B",
    letter: "H",
  },
  {
    name: "Oracle",
    role: "Database",
    color: "#E25555",
    letter: "O",
  },
];

function About() {
  return (
    <div className="about-page">
      <NavBar />

      {/* =========================================
          HERO
      ========================================= */}

      <section className="about-hero">
        <div className="about-glow"></div>
        <div className="about-orbit about-orbit-one"></div>
        <div className="about-orbit about-orbit-two"></div>

        <div className="about-hero-content">
          <div className="about-label">
            <span>02</span>
            <p>About me</p>
          </div>

          <h1>
            Building digital
            <span>experiences with purpose.</span>
          </h1>

          <p className="about-intro">
            Frontend developer focused on creating responsive, intuitive, and
            visually refined digital experiences.
          </p>
        </div>
      </section>

      {/* =========================================
          ABOUT
      ========================================= */}

      <section className="about-section">
        <p className="section-label font-display">About</p>

        <div className="about-grid">
          <div className="about-main">
            <p className="bio">
              My name is Victor Akinsanmi, and I am a passionate frontend
              developer with a solid foundation in networking. With a keen eye
              for design and a commitment to creating seamless user experiences,
              I specialise in building responsive, intuitive, and dynamic web
              applications.
            </p>

            <p className="bio bio-secondary">
              I am continuously expanding my skill set and exploring new
              technologies and methodologies. My goal is to combine technical
              expertise, creativity, and a strong willingness to learn to
              contribute to innovative and impactful projects.
            </p>

            <div className="interests-block">
              <div className="profile-label">
                <span>03</span>
                <h2 className="font-display">Interests</h2>
              </div>

              <div className="interest-list">
                <span>Driving</span>
                <span>Music</span>
                <span>Coding</span>
                <span>Table Tennis</span>
              </div>
            </div>
          </div>

          <div className="sidebar">
            {/* CERTIFICATIONS */}

            <div className="profile-block">
              <div className="profile-label">
                <span>01</span>
                <h2 className="font-display">Certifications</h2>
              </div>

              <div className="certifications">
                <div className="cert-row">
                  <span>Certified Secure Computer User</span>
                  <small>CSCU</small>
                </div>

                <div className="cert-row">
                  <span>Cisco Certified Network Associate</span>
                  <small>CCNA</small>
                </div>

                <div className="cert-row">
                  <span>SQL Fundamentals</span>
                  <small>SQL</small>
                </div>

                <div className="cert-row">
                  <span>Web Development</span>
                  <small>WEB</small>
                </div>

                <div className="cert-row">
                  <span>Machine Learning With R</span>
                  <small>ML</small>
                </div>
              </div>
            </div>

            {/* EDUCATION */}

            <div className="profile-block education-block">
              <div className="profile-label">
                <span>02</span>
                <h2 className="font-display">Education</h2>
              </div>

              <div className="education-item">
                <div className="education-top">
                  <span className="education-year">2025 — 2026</span>

                  <span className="education-status">MSc</span>
                </div>

                <h3 className="font-display">
                  Technology & Innovation Management
                </h3>

                <p>Technological University Dublin</p>
                <small>Dublin, Ireland</small>
              </div>

              <div className="education-divider"></div>

              <div className="education-item">
                <div className="education-top">
                  <span className="education-year">2019 — 2023</span>

                  <span className="education-status">BSc</span>
                </div>

                <h3 className="font-display">Computer Science</h3>

                <p>Redeemer's University</p>
                <small>Ede, Osun State</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          STACK
      ========================================= */}

      <section className="stack-section">
        <p className="section-label font-display">Stack</p>

        <div className="stack-heading">
          <h2 className="font-display section-title">Tools I build with</h2>

          <p>
            A selection of technologies I use to design, build and develop
            modern digital experiences.
          </p>
        </div>

        <div className="stack-grid">
          {stack.map((item) => (
            <div className="stack-card" key={item.name}>
              <div
                className="stack-dot"
                style={{ backgroundColor: item.color }}
              >
                {item.letter}
              </div>

              <div className="stack-content">
                <div className="stack-name">{item.name}</div>

                <div className="stack-role">{item.role}</div>
              </div>

              <span className="stack-number">/</span>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================
          FOOTER STATEMENT
      ========================================= */}

      <section className="about-end">
        <div className="about-end-line"></div>

        <p>
          <span>01</span> Curiosity drives better work.
        </p>

        <div className="about-end-line"></div>
      </section>
    </div>
  );
}

export default About;
