import './App.css';
import LandingApp from './LandingPage/LandingApp';
import SectionTwo from './DataCollection/Datacollection'
import SectionThree from './DataSort/DataSortApp'
import SectionFour from './Preprocessing/Preprocessing';
import SectionFive from './Featureextraction/Featureextraction';
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
    </div>
  );
}

export default App;
