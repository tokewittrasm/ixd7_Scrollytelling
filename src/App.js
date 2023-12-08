import './App.css';
import LandingApp from './LandingPage/LandingApp';
import SectionTwo from './DataCollection/Datacollection'
import SectionThree from './DataSort/DataSortApp'
import SectionFour from './Preprocessing/Preprocessing';
import SectionFive from './Featureextraction/Featureextraction';
import SectionSix from './Training/Training';
import SectionSeven from './Testing/Testing';
import { useRef } from "react";



function App() {

  const resultRef = useRef(null);
  return (
    <div id='background'>
      <LandingApp resultRef={resultRef} />
      <SectionTwo ref={resultRef}/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <SectionSeven/>
    </div>
  );
}

export default App;
