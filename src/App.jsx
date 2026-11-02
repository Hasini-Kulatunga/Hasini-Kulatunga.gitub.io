import { useCallback,useState } from 'react';
import BootSequence from './components/BootSequence';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import FloatingAssistant from './components/FloatingAssistant';

export default function App({ initialReady = false }){
  const [ready,setReady]=useState(initialReady);
  const finish=useCallback(()=>setReady(true),[]);
  return <>{!ready&&<BootSequence onComplete={finish}/>}<Navbar visible={ready}/><Hero active={ready}/><About/><Education/><Projects/><Experience/><Contact/><FloatingAssistant/></>;
}
