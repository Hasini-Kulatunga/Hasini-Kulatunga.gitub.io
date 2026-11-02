import { useEffect, useRef } from 'react';
import NetworkBackdrop from './NetworkBackdrop';
import sliitLogo from '../../assets/img/sliit-logo.png';
import uopLogo from '../../assets/img/UoP-logo.webp';
import imbsLogo from '../../assets/img/IMBS-logo.jpg';

const education = [{"institution": "Sri Lanka Institute of Information Technology (SLIIT)", "credential": "Bachelor of Science (Hons)", "field": "in Data Science", "period": "Jul 2024 - Present", "description": "Building a foundation in data science, machine learning, and statistical analysis through practical projects.", "logo": sliitLogo}, {"institution": "University of Peradeniya", "credential": "Diploma", "field": "in English", "period": "2023", "description": "Developed English language skills for clear communication in academic and professional settings.", "logo": uopLogo}, {"institution": "IMBS Campus, Kurunegala", "credential": "Diploma", "field": "in Information Technology", "period": "2022", "description": "Built a foundation in information technology and practical computing skills.", "logo": imbsLogo}];

export default function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.target.classList.toggle('is-visible', entry.isIntersecting)),
      { threshold: 0.14, rootMargin: '-4% 0px -8% 0px' },
    );
    section.querySelectorAll('[data-education-reveal]').forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="education-section" id="education" ref={sectionRef} aria-labelledby="education-title">
      <NetworkBackdrop/>
      <header className="education-heading">
        <span>02 / EDUCATION</span>
        <h2 id="education-title">Academic <em>foundation.</em></h2>
        <p>Building a foundation in data science, information technology, and professional communication.</p>
      </header>

      <div className="education-list">
        {education.map((item, index) => (
          <article key={item.institution} data-education-reveal style={{ '--education-delay': `${index * 100}ms` }}>
            <div className={`education-logo${item.logo === imbsLogo ? " education-logo-imbs" : item.logo === sliitLogo ? " education-logo-sliit" : ""}`}>
              {item.logo ? <img src={item.logo} alt={`${item.institution} logo`} /> : <span className="education-monogram" aria-hidden="true">{index === 1 ? "UP" : "IMBS"}</span>}
            </div>
            <div className="education-content">
              <small>0{index + 1}</small>
              <p className="education-degree"><strong>{item.credential}</strong> {item.field}</p>
              <h3>{item.institution}</h3>
              <p className="education-description">{item.description}</p>
            </div>
            <time>{item.period}</time>
          </article>
        ))}
      </div>
    </section>
  );
}
