import { useEffect, useState } from 'react';

export default function FloatingAssistant(){
  const [visible,setVisible]=useState(false);

  useEffect(()=>{
    const hero=document.getElementById('home');
    if(!hero)return;
    const observer=new IntersectionObserver(([entry])=>{
      setVisible(!entry.isIntersecting && entry.boundingClientRect.bottom <= 0);
    },{threshold:0});
    observer.observe(hero);
    return()=>observer.disconnect();
  },[]);

  return <a
    className={`sapphire-bot ${visible?'is-visible':''}`}
    href="#contact"
    aria-label="Contact Hasini"
    title="Get in touch"
  >
    <svg viewBox="0 0 88 100" fill="none" aria-hidden="true">
      <path d="M44 16V9M38 9h12" stroke="var(--sky)" strokeWidth="3" strokeLinecap="round"/>
      <rect x="13" y="29" width="9" height="21" rx="4" fill="var(--sapphire)" stroke="var(--sky)"/>
      <rect x="66" y="29" width="9" height="21" rx="4" fill="var(--sapphire)" stroke="var(--sky)"/>
      <rect x="20" y="18" width="48" height="40" rx="14" fill="var(--navy)" stroke="var(--sky)" strokeWidth="2"/>
      <rect x="26" y="26" width="36" height="24" rx="9" fill="var(--midnight)" stroke="var(--sapphire)"/>
      <path d="M33 36h6m10 0h6" stroke="var(--ice)" strokeWidth="4" strokeLinecap="round"/>
      <path d="M40 43h8" stroke="var(--sky)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M38 58v6h12v-6" fill="var(--sapphire)"/>
      <path d="M27 68c0-3 3-5 6-5h22c3 0 6 2 6 5v10c0 8-8 14-17 14s-17-6-17-14V68Z" fill="var(--navy)" stroke="var(--sky)" strokeWidth="2"/>
      <path d="M21 68v13" stroke="var(--sapphire)" strokeWidth="7" strokeLinecap="round"/>
      <g className="sapphire-bot-hand">
        <path d="M64 69 73 59 74 49" stroke="var(--sapphire)" strokeWidth="7" strokeLinecap="round"/>
        <path d="M70 48v-7m4 6v-9m4 10v-7" stroke="var(--sky)" strokeWidth="3" strokeLinecap="round"/>
        <rect x="69" y="45" width="11" height="10" rx="4" fill="var(--navy)" stroke="var(--sky)"/>
      </g>
      <path d="m44 70 5 6-5 6-5-6 5-6Z" fill="var(--sky)"/>
      <path d="M35 94h18" stroke="var(--sapphire)" strokeWidth="3" strokeLinecap="round"/>
    </svg>
    <span className="sapphire-bot-greeting" aria-hidden="true">Hey!</span>
  </a>;
}
