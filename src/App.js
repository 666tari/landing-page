import './App.css';
import Intro from './component/Intro';
import BestGame from './component/BestGame';
import NavigationBar from './component/NavigationBar';
import TrendingGame from './component/TrendingGame';
import Contact from './component/Contact';

import "./style/landingPage.css"

function App() {
  return (
   <div>
     <div className="myBG">
     <NavigationBar title="game culik"/>
     <Intro />
     </div>

     <div className="trending">
     <TrendingGame />
     </div>

     <div className="best">
     <BestGame />
     </div> 

     <div className="contact">
     <Contact />
     </div> 

   </div>
  );
}

export default App;
