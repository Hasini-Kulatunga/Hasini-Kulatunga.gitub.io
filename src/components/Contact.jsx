import { useEffect, useRef, useState } from 'react';
import NetworkBackdrop from './NetworkBackdrop';
import SocialIcon from './SocialIcon';

const email='hasinipkulatunga@gmail.com';


export default function Contact(){
  const [copied,setCopied]=useState(false);
  const sectionRef=useRef(null);
  const copyTimerRef=useRef(null);
  const currentYear=new Date().getFullYear();

  useEffect(()=>{
    const section=sectionRef.current;
    if(!section)return;
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('is-visible',entry.isIntersecting)),{threshold:.14,rootMargin:'-3% 0px -8%'});
    section.querySelectorAll('[data-contact-reveal]').forEach(item=>observer.observe(item));
    return()=>observer.disconnect();
  },[]);

  const copyEmail=async()=>{
    try{
      await navigator.clipboard.writeText(email);
      setCopied(true);
      clearTimeout(copyTimerRef.current);
      copyTimerRef.current=setTimeout(()=>setCopied(false),1800);
    }catch{
      window.location.href=`mailto:${email}`;
    }
  };

  useEffect(()=>()=>clearTimeout(copyTimerRef.current),[]);

  return <section className="contact-section" id="contact" ref={sectionRef} aria-labelledby="contact-title">
    <NetworkBackdrop/>
    <div className="contact-layout">
      <div className="contact-message" data-contact-reveal>
        <span>05 / CONTACT</span>
        <div className="availability"><i/><p>Seeking internship opportunities</p></div>
        <h2 id="contact-title">Let’s build something <em>meaningful.</em></h2>
        <p>I’m open to AI/ML, Data Science, and Data Analytics internships where thoughtful technology can create real value.</p>
        <a className="contact-primary" href={`mailto:${email}?subject=Let’s build something meaningful`}>
          Start a conversation <span>↗</span>
        </a>
      </div>

      <aside className="contact-directory" data-contact-reveal aria-label="Contact links">
        <header><span>DIRECT CHANNELS</span></header>
        <div className="contact-email">
          <small>EMAIL</small>
          <a href={`mailto:${email}`}><SocialIcon name="email"/>{email}</a>
          <button type="button" onClick={copyEmail}>{copied?'Copied':'Copy'}</button>
        </div>
        <a href="https://www.linkedin.com/in/hasini-kulatunga-88717a439/" target="_blank" rel="noreferrer">
          <div><small>NETWORK</small><strong><SocialIcon name="linkedin"/>LinkedIn</strong></div><span>↗</span>
        </a>
        <a href="https://github.com/Hasini-Kulatunga" target="_blank" rel="noreferrer">
          <div><small>CODE</small><strong><SocialIcon name="github"/>GitHub</strong></div><span>↗</span>
        </a>
        <div className="contact-location">
          <div><small>LOCATION</small><strong>Sri Lanka</strong></div><span>GMT +5:30</span>
        </div>

      </aside>
    </div>

    <footer className="site-footer" data-contact-reveal>
      <div className="footer-main">
        <a className="footer-brand" href="#home">
          <strong>Hasini Pinsara</strong>
          <span>Data Science Undergraduate · SLIIT</span>
          <p>Solving real-world problems with AI and data-driven approaches.</p>
        </a>
        <nav aria-label="Footer navigation">
          <small>EXPLORE</small>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
        </nav>
        <nav aria-label="Social links">
          <small>CONNECT</small>
          <a href="https://www.linkedin.com/in/hasini-kulatunga-88717a439/" target="_blank" rel="noreferrer"><SocialIcon name="linkedin"/>LinkedIn ↗</a>
          <a href="https://github.com/Hasini-Kulatunga" target="_blank" rel="noreferrer"><SocialIcon name="github"/>GitHub ↗</a>
          <a href={`mailto:${email}`}><SocialIcon name="email"/>Email ↗</a>
        </nav>
        <a className="back-to-top" href="#home"><span>↑</span><small>BACK TO TOP</small></a>
      </div>
      <div className="footer-bottom">
        <span>© {currentYear} Hasini Pinsara. All rights reserved.</span>
        <span>Sri Lanka · GMT +5:30</span>
      </div>
    </footer>
  </section>;
}
