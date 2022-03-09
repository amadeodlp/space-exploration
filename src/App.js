import './normalize.css';
import './App.css';
import Home from "./components/home/Home";
import Navigation from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Crew from "./components/crew/crew";
import Destination from "./components/destination/destination";
import Technology from "./components/technology/technology";
import DestinationDetail from "./components/destination/destinationDetail";
import { destinations } from "./components/destination/destinations";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/destination' element={<Destination />}>
        <Route path="moon" element={<DestinationDetail/>} />
        <Route path="mars" element={<DestinationDetail/>} />
        <Route path="europa" element={<DestinationDetail />} />
        <Route path="titan" element={<DestinationDetail />} />
      </Route>
      <Route path='/crew' element={<Crew />}/>
      <Route path='/technology' element={<Technology />}/>
      </Routes>
     </BrowserRouter>
  );
}

export default App;
