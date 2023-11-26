import './App.css';
import LandingApp from './LandingPage/LandingApp';
import SectionTwo from './DataCollection/Datacollection'
import SectionThree from './DataSort/DataSortApp'
import { useRef } from "react";



function App() {

  const resultRef = useRef(null);
  return (
    <div id='background'>
      <LandingApp resultRef={resultRef} />
      <SectionTwo ref={resultRef}/>
      <SectionThree/>
    </div>
  );
}

export default App;
