import { useEffect, useRef } from 'react';
import NetworkBackdrop from './NetworkBackdrop';

const pillars=[
  {number:'01',title:'Who I Am',items:['Problem Solver','Data Science Undergraduate','Analytical Thinker','Detail Oriented']},
  {number:'02',title:'What I Build',items:['Data-Driven Applications','AI Applications','Predictive Models','Analytics Solutions']},
  {number:'03',title:'My Mission',items:['Real-World Impact','Continuous Learning','Engineering Excellence','Meaningful Products']},
];
const expertise=['Data Science','Machine Learning','Data Analytics','Statistical Analysis'];
const technologyGroups=[{"title": "Programming Languages", "items": ["Python", "R", "Java", "JavaScript", "C"], "essential": ["Python", "R"]}, {"title": "AI & Machine Learning", "items": ["Machine Learning", "Data Preprocessing", "Feature Engineering", "Predictive Modelling", "Model Training and Evaluation", "Regression", "Demand Forecasting", "Scikit-learn", "XGBoost", "LightGBM", "Random Forest", "HistGradientBoosting"], "essential": ["Machine Learning", "Data Preprocessing"]}, {"title": "Data Science & Analytics", "items": ["Exploratory Data Analysis (EDA)", "Data Analytics", "Statistical Analysis", "Data Warehousing", "Data Visualization", "Pandas", "Polars", "NumPy"], "essential": ["Exploratory Data Analysis (EDA)", "Data Analytics"]}, {"title": "Databases", "items": ["Microsoft SQL Server", "MySQL", "MongoDB"], "essential": ["Microsoft SQL Server", "MySQL"]}, {"title": "Backend & APIs", "items": ["Python (FastAPI)", "Spring Boot", "Node.js", "Express.js", "Java Servlets/JSP", "RESTful APIs"], "essential": ["Python (FastAPI)", "Spring Boot"]}, {"title": "Cloud & Deployment", "items": ["AWS EC2", "AWS S3", "Linux Server Administration", "Web Application Deployment"], "essential": ["AWS EC2", "AWS S3"]}, {"title": "Web & Mobile Technologies", "items": ["React", "React Native (Expo)", "MERN Stack"], "essential": ["React", "React Native (Expo)"]}, {"title": "Tools & Version Control", "items": ["Git", "GitHub"], "essential": ["Git", "GitHub"]}, {"title": "Security & Authentication", "items": ["JWT Authentication", "Role-Based Access Control (RBAC)"], "essential": ["JWT Authentication", "Role-Based Access Control (RBAC)"]}, {"title": "Core Concepts", "items": ["Data Structures", "System Design", "Problem-Solving", "Business Analysis", "Data-Driven Decision Making"], "essential": ["Data Structures", "System Design"]}];
const philosophy=[
  {number:'01',title:'Discover',description:'Understand the real problem, users, and desired impact.'},
  {number:'02',title:'Architect',description:'Shape a scalable foundation and make deliberate technical decisions.'},
  {number:'03',title:'Engineer',description:'Build clean, secure, and maintainable software with purpose.'},
  {number:'04',title:'Validate',description:'Test reliability, usability, performance, and real-world value.'},
  {number:'05',title:'Evolve',description:'Deliver, learn from outcomes, and continuously improve the system.'},
];

export default function About(){
  const sectionRef=useRef(null);

  useEffect(()=>{
    const section=sectionRef.current;
    if(!section)return;
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        entry.target.classList.toggle('is-visible',entry.isIntersecting);
      });
    },{threshold:.1,rootMargin:'-4% 0px -8% 0px'});
    section.querySelectorAll('[data-reveal]').forEach(item=>observer.observe(item));
    return()=>observer.disconnect();
  },[]);

  return <section ref={sectionRef} className="about-section" id="about" aria-labelledby="about-title">
    <NetworkBackdrop/>
    <header className="about-intro" data-reveal>
      <span>01 / ABOUT ME</span>
      <h2 id="about-title">Hasini <em>Pinsara.</em></h2>
      <p className="about-role">Data Science Undergraduate <i/> SLIIT</p>
      <p className="about-summary">I turn data into <strong>practical insights</strong> and <strong>intelligent solutions</strong> using Python, machine learning, and analytics. Seeking an <strong>AI/ML, Data Science, or Data Analytics internship</strong> to apply my skills to real-world problems.</p>
    </header>

    <div className="about-pillars" data-reveal>
      {pillars.map((pillar,index)=><article key={pillar.title} data-reveal style={{'--reveal-delay':`${index*90}ms`}}>
        <small>{pillar.number}</small><h3>{pillar.title}</h3>
        <ul>{pillar.items.map(item=><li key={item}>{item}</li>)}</ul>
      </article>)}
    </div>

    <div className="about-band expertise-band" data-reveal>
      <div className="section-label"><span>AREAS OF FOCUS</span><i/></div>
      <div className="expertise-list">{expertise.map((item,index)=><div key={item} data-reveal style={{'--reveal-delay':`${index*70}ms`}}><i/><span>{item}</span><small>ACTIVE</small></div>)}</div>
    </div>

    <div className="about-band stack-band" data-reveal>
      <div className="section-label"><span>TECHNOLOGY STACK</span><i/></div>
      <p className="stack-note"><i/> Technical skills and tools</p>
      <div className="technology-groups">{technologyGroups.map((group,index)=><article key={group.title} data-reveal style={{'--reveal-delay':`${Math.min(index,3)*65}ms`}}>
        <header><small>0{index+1}</small><h3>{group.title}</h3></header>
        <ul>{group.items.map(item=><li className={group.essential.includes(item)?'essential':''} key={item}>{group.essential.includes(item)&&<i/>}{item}</li>)}</ul>
      </article>)}</div>
    </div>

    <div className="about-detail-grid philosophy-section">
      <article className="engineering-philosophy" data-reveal>
        <div className="section-label"><span>ENGINEERING PHILOSOPHY</span><i/></div>
        <header className="philosophy-heading">
          <h3>From meaningful problems to enduring systems.</h3>
          <p>A thoughtful engineering process that balances people, architecture, quality, and continuous improvement.</p>
        </header>
        <div className="philosophy-flow">{philosophy.map((item,index)=><div key={item.title} data-reveal style={{'--reveal-delay':`${index*75}ms`}}>
          <small>{item.number}</small>
          <span>{item.title}</span>
          <p>{item.description}</p>
          {index<philosophy.length-1&&<i aria-hidden="true">→</i>}
        </div>)}</div>
      </article>
    </div>

    <footer className="future-vision" data-reveal>
      <span>FUTURE VISION</span>
      <div><strong>World-Class Data Science Undergraduate</strong><i>+</i><strong>Artificial Intelligence</strong><i>+</i><strong>Real-World Impact</strong></div>
      <p>Always learning, collaborating, contributing, and taking on challenges that push both technology and myself forward.</p>
    </footer>
  </section>;
}
