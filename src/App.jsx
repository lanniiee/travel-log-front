import './App.scss';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Destinations from './pages/Destinations/Destinations';
import Reviews from './pages/Reviews/Reviews';
import Destination from './pages/Destination/Destination';
import UploadDestination from './pages/UploadDestination/UploadDestination';
import {getAllDestinations, getRandomDestination} from "./utils/apiUtils";
import {useState, useEffect} from "react";

function App() {
  const [allDestinations, setAllDestinations] = useState([]);
  const [randomDestination, setRandomDestination] = useState({});


  const getDestinations = async () => {
    const destinations = await getAllDestinations()
    setAllDestinations(destinations);
  }

  const getRandDestination = async () => {
    const destination = await getRandomDestination();
    setRandomDestination(destination)
  }

  useEffect(()=> {
      getDestinations();
      getRandDestination();
  }, [])

  

  return (
    <div className="App">
        <Nav/>

        <Routes>
          <Route path="*" element={<Home destination={randomDestination}/>} />
          <Route path="/destinations" element={<Destinations allDestinations={allDestinations} />} />
          <Route path="/reviews" element={<Reviews/>} />
          <Route path='/upload/destination' element={<UploadDestination/>} />
          <Route path='/destination/:id' element={<Destination/>} />
        </Routes>
    </div>
  );
}

export default App;
