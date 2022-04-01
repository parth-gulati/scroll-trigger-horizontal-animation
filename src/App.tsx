import "./App.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {GiTriangleTarget} from 'react-icons/gi'
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function App() {

  useEffect(()=>{
    gsap.to('.visual-1', {
      width: 0,
      scrollTrigger: {
        trigger: '.App',
        start: 'top top',
        end: 'bottom top',
        markers: true,
        scrub: 1,
        pin: true,
        anticipatePin: 1
      }
    })

  },[])


  return (
    <div className="App">
      <div className="visual-1"></div>  
      <div className="visual-2"></div>
        <h1 className="heading-1">Pattypan</h1>
        <GiTriangleTarget size={100} id="triangle-1"/>
        <GiTriangleTarget size={80} id="triangle-2"/>
        <GiTriangleTarget size={90} id="triangle-3"/>
        <GiTriangleTarget size={110} id="triangle-4"/>
    </div>
  );
}

export default App;
