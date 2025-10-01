import React from "react";
import { Mail, Phone, Download, Github, Linkedin, Code } from "lucide-react";
import { motion } from "framer-motion";
import "./Portfolio.css";

export default function BharatiPortfolio() {
  const PROFILE_PIC_URL = "/Profile.jpg";
  const RESUME_URL = "/ResumeBharti.pdf";

  const projects = [
    {
      title: "Role-Based Academic Task Management System",
      tech: "Node.js, Express.js, Handlebars, Bootstrap, MongoDB",
      bullets: [
        "Role-based access (HOD / Faculty / Student) with secure login & dashboard",
        "HOD can assign tasks to faculty; faculty can delegate to students",
        "Students can upload documents as task submissions"
      ]
    },
    {
      title: "AyurLeaf – AI-based Plant Detection",
      tech: "Flask, TensorFlow, HTML/CSS/JS, MySQL",
      bullets: [
        "CNN-based model to classify plant species from uploaded images",
        "Flask backend with responsive frontend and DB integration",
        "Displays scientific name, general uses, and Ayurvedic uses"
      ]
    }
  ];

  const socials = [
    { name: "GitHub", icon: <Github size={16} />, url: "https://github.com/bpandhare" },
    { name: "LinkedIn", icon: <Linkedin size={16} />, url: "https://www.linkedin.com/in/bharti-pandhare-aab631286" },
    { name: "LeetCode", icon: <Code size={16} />, url: "https://leetcode.com/u/bharati_2601" },
    { name: "CodeChef", icon: <Code size={16} />, url: "https://www.codechef.com/users/bharati_2601" }
  ];

  return (
    <div className="portfolio">
      <header className="header">
        <div className="profile">
          <img src={PROFILE_PIC_URL} alt="Bharati" />
          <div>
            <h1>Bharati Pandhare</h1>
            <p>Computer Science & Engineering • B.Tech • CGPA: 9.7</p>
          </div>
        </div>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a href={RESUME_URL} download className="btn">
            <Download size={14} /> Resume
          </a>
        </nav>
      </header>

      <main className="container">
        <section className="card about">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2>Hi — I’m Bharati 👋</h2>
            <p>
              Computer Science and Engineering student with strong fundamentals in C++ and Java. Passionate about building
              web applications, solving problems, and improving technical skills. I enjoy working on full-stack and AI/ML.
            </p>

            <div className="info-grid">
              <div className="info-box">
                <h3>Education</h3>
                <p>SVERI's COE, Pandharpur — B.Tech (CSE), 2022 - Present, CGPA: 9.7</p>
              </div>
              <div className="info-box">
                <h3>Honors & Achievements</h3>
                <ul>
                  <li>4× University Topper</li>
                  <li>100+ Day Coding Streak</li>
                  <li>Meritorious Student Award - 2023</li>
                </ul>
              </div>
            </div>

            <div className="socials">
              {socials.map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="noreferrer">
                  {s.icon} {s.name}
                </a>
              ))}
            </div>
          </motion.div>
        </section>

        <aside id="contact" className="card sidebar">
          <div>
            <h3>Contact</h3>
            <p><Mail size={14}/> pandharebharti565@gmail.com</p>
            <p><Phone size={14}/> +91 7057604230</p>
            <p>Pandharpur, India</p>
          </div>

          <div id="skills">
            <h3>Skills</h3>
            <div className="skills">
              {["C++","Java","Python (Basic)","HTML & CSS","Node.js / Express","MySQL / MongoDB","TensorFlow","VS Code"].map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </div>

          <div>
            <h3>Certifications</h3>
            <ul>
              <li>Basics of Python - CodingNinjas</li>
              <li>AWS Academy Cloud Foundations</li>
              <li>Young Turks Aptitude - Naukri Campus</li>
            </ul>
          </div>
        </aside>

        <section id="projects" className="projects">
          <h3>Projects</h3>
          <div className="project-grid">
            {projects.map((p, idx) => (
              <article className="project" key={idx}>
                <div className="project-head">
                  <h4>{p.title}</h4>
                  <span>{p.tech}</span>
                </div>
                <ul>
                  {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="form card">
          <h3>Get in touch</h3>
          <p>I’m open to internships and full-time roles. Feel free to message me.</p>
          <form>
            <input placeholder="Your name" />
            <input placeholder="Email" />
            <input placeholder="Subject" />
            <textarea rows={4} placeholder="Message..." />
            <button type="button"><Mail size={16}/> Send message</button>
          </form>
          <p>Or download my resume: <a href={RESUME_URL} download>Download PDF</a></p>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Bharati Pandhare — All rights reserved
      </footer>
    </div>
  );
}
