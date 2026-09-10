import { useEffect, useRef } from "react";
import "./Home.css";
import NavBar from "../components/NavBar";

const stack = [
  { name: "React", role: "Frontend", color: "#61DAFB", letter: "R" },
  { name: "JavaScript", role: "Language", color: "#F7DF1E", letter: "JS" },
  { name: "TypeScript", role: "Language", color: "#3178C6", letter: "TS" },
  { name: "Python", role: "Language", color: "#4B8BBE", letter: "Py" },
  { name: "Node.js", role: "Runtime", color: "#4FA84C", letter: "N" },
  { name: "Tailwind", role: "Styling", color: "#38BDF8", letter: "T" },
  { name: "HTML", role: "Markup", color: "#D8683B", letter: "H" },
  { name: "Oracle", role: "Database", color: "#E25555", letter: "O" },
];

function Home() {
  const heroRef = useRef(null);
  const orbRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const orb = orbRef.current;

    if (!hero || !orb) return;

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;

      orb.style.transform = `translate(${x}px, calc(-50% + ${y}px))`;
    };

    const handleMouseLeave = () => {
      orb.style.transform = "translateY(-50%)";
    };

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="home">
      <NavBar />

      <section className="hero" ref={heroRef}>
        <div className="orb" ref={orbRef}></div>
        <div className="grid-floor"></div>

        <div className="hero-content">
          <p className="eyebrow font-display">Hello, I'm</p>

          <h1 className="font-display">Victor Akinsanmi</h1>

          <p className="tagline font-display">Web design for your brand</p>

          <p className="lede">
            Transforming your online presence with innovative and visually
            captivating websites. Let us bring your brand's vision to life
            through exceptional web design.
          </p>
        </div>
      </section>

      <section className="about-section">
        <p className="section-label font-display">About</p>

        <div className="about-grid">
          <div>
            <p className="bio">
              My name is Victor Akinsanmi, and I am a passionate frontend
              developer with a solid foundation in networking. With a keen eye
              for design and a commitment to creating seamless user experiences,
              I specialise in building responsive, intuitive, and dynamic web
              applications. My goal is to leverage my technical expertise to
              contribute to innovative and impactful projects.
            </p>
          </div>
          <div className="sidebar">
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
          </div>{" "}
        </div>
      </section>

      <section className="stack-section">
        <p className="section-label font-display">Stack</p>

        <h2 className="font-display section-title">Tools I build with</h2>

        <div className="stack-grid">
          {stack.map((item) => (
            <div className="stack-card" key={item.name}>
              <div
                className="stack-dot"
                style={{ backgroundColor: item.color }}
              >
                {item.letter}
              </div>

              <div className="stack-name">{item.name}</div>

              <div className="stack-role">{item.role}</div>
            </div>
          ))}
        </div>
      </section>

      <footer>Creating digital experiences that move ideas forward.</footer>
    </div>
  );
}

export default Home;
