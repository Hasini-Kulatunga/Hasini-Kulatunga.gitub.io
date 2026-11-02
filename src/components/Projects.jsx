import { useEffect, useRef } from 'react';
import NetworkBackdrop from './NetworkBackdrop';

const projects = [
  {
    "name": "Logistic 18",
    "category": "AI & Full Stack",
    "description": "Multi-tenant logistics platform with XGBoost risk scoring and supply chain analytics. Contributed to risk alerts and notifications to help teams identify potential disruptions.",
    "tech": [
      "Python",
      "FastAPI",
      "XGBoost",
      "React",
      "MongoDB"
    ],
    "github": "https://github.com/Hasini-Kulatunga/Logistic-18",
    "metrics": [
      "Risk prediction",
      "Alerts & notifications"
    ],
    "featured": true,
    "status": "Academic project",
    "subtitle": "Supply Chain Risk Management"
  },
  {
    "name": "Glowbook",
    "category": "Mobile",
    "description": "Cross-platform salon booking app for managing services and appointments. Contributed to appointment CRUD operations, API integration, and data management.",
    "tech": [
      "React Native (Expo)",
      "Node.js",
      "Express.js",
      "MongoDB Atlas"
    ],
    "github": "https://github.com/itstharusha/Glowbook.git",
    "metrics": [
      "Appointment booking",
      "Cross-platform mobile"
    ],
    "featured": true,
    "status": "Academic project",
    "subtitle": "Salon Appointment Booking"
  },
  {
    "name": "Transportation Management",
    "category": "Web",
    "description": "Web application for transportation and ride bookings. Contributed to the Ride Booking module, supporting backend functionality and database operations.",
    "tech": [
      "Java",
      "Node.js",
      "RESTful APIs",
      "Database Management"
    ],
    "github": "https://github.com/Hasini-Kulatunga/Web-BasedTransportationSystem.git",
    "metrics": [
      "Ride booking",
      "Backend & databases"
    ],
    "featured": true,
    "status": "Academic project",
    "subtitle": "Web-Based Ride Booking"
  }
];

function ProjectLinks({ project }) {
  if (!project.github && !project.live) return <span className="project-availability">{project.status}</span>;
  return <div className="project-links">
    {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live ↗</a>}
    {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
  </div>;
}

export default function Projects() {
  const sectionRef = useRef(null);
  const featured = projects;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.target.classList.toggle('is-visible', entry.isIntersecting)), { threshold: .1, rootMargin: '-3% 0px -8%' });
    section.querySelectorAll('[data-project-reveal]').forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return <section className="projects-section" id="projects" ref={sectionRef} aria-labelledby="projects-title">
    <NetworkBackdrop />
    <header className="projects-heading" data-project-reveal>
      <span>03 / PROJECT HIGHLIGHTS</span>
      <h2 id="projects-title">Systems built for <em>real impact.</em></h2>
      <p>Collaborative academic projects with practical applications</p>
    </header>

    <div className="featured-projects" aria-label="Featured projects">
      {featured.map((project, index) => <article key={project.name} data-project-reveal style={{ '--project-delay': `${index * 90}ms` }}>
        <div className="featured-index"><span>0{index + 1} / FEATURED</span><span>{project.status}</span></div>
        <div>
          <span className="project-category">{project.category}</span>
          <h3>{project.name}</h3>
          <span className="project-subtitle">{project.subtitle}</span>
          <p>{project.description}</p>
          <ul>{project.tech.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
        <footer>
          <div>{project.metrics.map(metric => <span key={metric}>{metric}</span>)}</div>
          <ProjectLinks project={project} />
        </footer>
      </article>)}
    </div>

    <footer className="project-stats" data-project-reveal>
      <div><strong>3</strong><span>Projects</span></div>
      <div><strong>15+</strong><span>Technologies</span></div>
      <div><strong>AI/ML</strong><span>Focus</span></div>
      <p>Collaborative academic projects with practical applications</p>
    </footer>
  </section>;
}
