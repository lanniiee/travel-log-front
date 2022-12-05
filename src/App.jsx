import './App.scss';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Destinations from './pages/Destinations/Destinations';
import Reviews from './pages/Reviews/Reviews';
import Destination from './pages/Destination/Destination';
import UploadDestination from './pages/UploadDestination/UploadDestination';

function App() {
  return (
    <div className="App">
        <Nav/>

        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/destinations" element={<Destinations/>} />
          <Route path="/reviews" element={<Reviews/>} />
          <Route path='/upload/destination' element={<UploadDestination/>} />
          <Route path='/destination/:id' element={<Destination/>} />
        </Routes>
    </div>
  );
}

export default App;
