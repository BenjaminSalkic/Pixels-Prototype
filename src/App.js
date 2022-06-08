
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import SmallScreen from "./Screens/smallScreen";
import MediumScreen from "./Screens/mediumScreen";
import { useGlobalContext } from './context'


function App() {
  const {stage}=useGlobalContext();
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
              <Route path="/drawSmall" element={<SmallScreen/>}/>
              <Route path="/drawMedium" element={<MediumScreen/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
