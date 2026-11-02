import { useRef, useState } from 'react';
import withoutDigital from '../../assets/img/1-withoutDigital.png';
import withDigital from '../../assets/img/2-1-withDigital.png';
import HeroContent from './HeroContent';

export default function Hero({active}) {
  const heroRef=useRef(null);
  const [revealing,setRevealing]=useState(false);
  const [touchReveal,setTouchReveal]=useState(false);
  const move=event=>{
    const bounds=heroRef.current.getBoundingClientRect();
    heroRef.current.style.setProperty('--reveal-x',`${event.clientX-bounds.left}px`);
    heroRef.current.style.setProperty('--reveal-y',`${event.clientY-bounds.top}px`);
  };
  return <main ref={heroRef} id="home" className={`photo-hero data-hero portrait-hero ${active?'active':''} ${revealing?'revealing':''} ${touchReveal?'touch-revealing':''}`}
    onPointerEnter={event=>{if(event.pointerType!=='touch'){move(event);setRevealing(true);}}}
    onPointerMove={event=>{if(event.pointerType!=='touch'){move(event);setRevealing(true);}}}
    onPointerLeave={()=>setRevealing(false)}
    onPointerDown={event=>{if(event.pointerType==='touch'&&!event.target.closest('a')){move(event);setTouchReveal(value=>!value);}}}
  >
    <img className="hero-image vr-image" src={withDigital} width="1672" height="941" decoding="async" alt="" aria-hidden="true"/>
    <img className="hero-image normal-image" src={withoutDigital} width="1672" height="941" fetchPriority="high" decoding="async" alt="Hasini Kulatunga, Data Science undergraduate at SLIIT"/>
    <div className="image-grade" aria-hidden="true"/>
    <HeroContent/>
  </main>;
}
