// src/components/Home.jsx
import React, { useEffect, useState, useRef } from "react";
import "./Home.css";

const HERO_MIN_HEIGHT = 0.5; // 50vh
const HERO_MAX_HEIGHT = 1; // 100vh
const SCROLL_DISTANCE = 400; // px to shrink from max to min

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const heroRef = useRef(null);

  // Update window height on mount and resize
  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowHeight(window.innerHeight);
    };

    // Initial setup
    updateWindowDimensions();

    // Listen for window resize
    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate hero height (in vh)
  let heroHeightVh;
  if (scrollY <= 0) {
    heroHeightVh = 100;
  } else if (scrollY < SCROLL_DISTANCE) {
    const progress = scrollY / SCROLL_DISTANCE;
    heroHeightVh = 100 - 50 * progress;
  } else {
    heroHeightVh = 50;
  }

  // Calculate font sizes
  const titleSize = 3.5 + (5 - 3.5) * ((heroHeightVh - 50) / 50); // 5rem to 3.5rem
  const subtitleSize = 1.4 + (1.8 - 1.4) * ((heroHeightVh - 50) / 50); // 1.8rem to 1.4rem

  return (
    <div className="home-section">
      <div
        ref={heroRef}
        className="hero"
        style={{
          height: `${heroHeightVh}vh`,
          minHeight: "50vh",
          maxHeight: "100vh",
          position: "relative",
          top: "auto",
          left: 0,
          width: "100vw",
          zIndex: 20,
          borderRadius: "0 0 20px 20px",
          boxShadow: "0 12px 24px var(--neomorphic-dark)",
          transition:
            "height 0.3s cubic-bezier(0.19, 1, 0.22, 1), border-radius 0.3s, box-shadow 0.3s",
        }}
      >
        <div className="hero-content">
          <h1 style={{ fontSize: `${titleSize}rem` }}>Aryan Phadnis</h1>
          <p className="subtitle" style={{ fontSize: `${subtitleSize}rem` }}>
            Computer Science Engineer
          </p>
        </div>
      </div>

      <div className="section-container">
        <section id="about">
          <h2>About</h2>
          <p>
            Hi, I'm Aryan Phadnis, a 6th-semester Computer Science student at
            KLE Technological University. I'm a passionate developer who enjoys
            web development as well as tackling real-world problems through
            innovative solutions. My interests include exploring new
            technologies, collaborating on exciting projects, and continuously
            learning to enhance my skills. I'm eager to contribute to projects
            that are impactful and would make a difference in the tech world.
          </p>
        </section>

        <section id="education">
          <h2>Education</h2>
          <div className="education-card">
            <h3>Bachelor of Engineering in Computer Science</h3>
            <p className="university">KLE Technological University</p>
            <p className="year">Expected Graduation: 2026</p>
            <p className="grade">CGPA: 8.74</p>
          </div>
        </section>

        <section id="skills">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>
                <i className="fas fa-code"></i> Languages
              </h3>
              <ul>
                <li>Python</li>
                <li>C</li>
                <li>C++</li>
                <li>JavaScript</li>
                <li>SQL/MySQL</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>
                <i className="fas fa-laptop-code"></i> Web Technologies
              </h3>
              <ul>
                <li>HTML/CSS</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Flask</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>
                <i className="fas fa-tools"></i> Tools & Platforms
              </h3>
              <ul>
                <li>Supabase</li>
                <li>Vercel</li>
                <li>Git</li>
                <li>GitHub</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>
                <i className="fas fa-brain"></i> Additional Skills
              </h3>
              <ul>
                <li>Machine Learning</li>
                <li>Data Analysis</li>
              </ul>
            </div>
          </div>
          <h2>Soft Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <ul>
                <li>Teamwork</li>
                <li>Communication</li>
                <li>Problem Solving</li>
                <li>Critical Thinking</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>Visual Question Answering (VQA) Model</h3>
              <p>
                Developed a VQA model using BLIP and Transformers, fine-tuned on
                a custom dataset for image-question pairs.
              </p>
              <div className="tech-stack">
                <span>PyTorch</span>
                <span>Transformers</span>
                <span>Google Colab</span>
              </div>
            </div>
            <div className="project-card">
              <h3>SQL Query Generation from Natural Language</h3>
              <p>
                Created QueryGenie, an AI tool that converts natural language
                into SQL queries using RAG and Pinecone.
              </p>
              <div className="tech-stack">
                <span>Python</span>
                <span>NLP</span>
                <span>Flask</span>
                <span>React.js</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Runtime Memory Allocation Detection Tool</h3>
              <p>
                Designed a tool to monitor memory allocation as an NVIDIA
                project intern and detect inefficiencies, enhancing code
                reliability and performance.
              </p>
            </div>
            <div className="project-card">
              <h3>Video Game Database</h3>
              <p>
                Developed a video game search platform with a Flask-based REST
                API for retrieving game data. Implemented a search functionality
                to fetch and display game details dynamically.
              </p>
              <div className="tech-stack">
                <span>Python</span>
                <span>Flask</span>
                <span>REST API</span>
                <span>SQL</span>
                <span>JavaScript</span>
              </div>
            </div>
          </div>
        </section>

        <section id="domain">
          <h2>Chosen Domain</h2>
          <h3>
            <i className="fab fa-microsoft"></i> Microsoft
          </h3>
          <div class="case-studies">
            <div class="case-card">
              <h3>
                <i class="fas fa-robot"></i> AI-Driven Windows Troubleshooter
              </h3>
              <p>
                An AI tool in Windows that automatically fixes software issues
                by analyzing data from users, reducing support tickets by 40%
                and boosting reliability.
              </p>
            </div>
            <div class="case-card">
              <h3>
                <i class="fas fa-vr-cardboard"></i> HoloLens + AI for Field
                Service
              </h3>
              <p>
                Combines HoloLens and AI to assist technicians with real-time
                data and repair guidance, reducing equipment downtime by 35%.
              </p>
            </div>
            <div class="case-card">
              <h3>
                <i class="fas fa-shield-alt"></i> Azure SecureEdge
              </h3>
              <p>
                A security framework for Azure that uses encryption and
                segmentation to protect hybrid cloud environments, appealing to
                regulated industries.
              </p>
            </div>
            <div class="case-card">
              <h3>
                <i class="fas fa-leaf"></i> Microsoft Sustainability Hub
              </h3>
              <p>
                A platform in Microsoft 365 and Azure for tracking and reducing
                carbon footprints, promoting sustainability and encouraging
                Azure adoption.
              </p>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2>Contact Me</h2>
          <div className="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" />
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </section>

        <section id="portfolio-details">
          <h2>Portfolio Details</h2>
          <dl>
            <dt>Course Name</dt>
            <dd>Algorithmic Problem Solving</dd>
            <dt>Course Code</dt>
            <dd></dd>
            <dt>Name</dt>
            <dd>Aryan Phadnis</dd>
            <dt>SRN</dt>
            <dd>01FE22BCS126</dd>
            <dt>Course Instructor</dt>
            <dd>Prakash Hegade</dd>
            <dt>University</dt>
            <dd>KLE Technological University</dd>
            <dt>Portfolio Topic</dt>
            <dd>Microsoft</dd>
          </dl>
        </section>
      </div>
    </div>
  );
};

export default Home;
