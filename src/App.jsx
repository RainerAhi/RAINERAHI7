import Lenis from "@studio-freight/lenis";
import { Section1 } from "./Sections/Section1";
import CanvasContainer from "./CanvasContainer";
function App() {

  const lenis = new Lenis({
    duration: 1, // speed
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    direction: "vertical", 
    gestureDirection: "vertical", 
    smooth: true,
    mouseMultiplier: 0.5, 
    smoothTouch: false, 
    touchMultiplier: 2, 
    infinite: false 
  });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  function addAnotherSection() {
    const element = document.createElement("div");
    element.classList.add("section");
    element.innerHTML = "";
    document.body.appendChild(element);
  }
  
  requestAnimationFrame(raf);
  setTimeout(addAnotherSection, 1000);

  return (
    <>

      <Section1 />
    </>
  )
}

export default App;