import './App.scss';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Destinations from './pages/Destinations/Destinations';
import Reviews from './pages/Reviews/Reviews';
import UploadReviews from './pages/UploadReviews/UploadReviews';
import Destination from './pages/Destination/Destination';

function App() {
  return (
    <div className="App">
        <Nav/>

        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/destinations" element={<Destinations/>} />
          <Route path="/reviews" element={<Reviews/>} />
          <Route path='/uploadreviews' element={<UploadReviews/>} />
          <Route path='/destination/:id' element={<Destination/>} />
        </Routes>
    </div>
  );
}

export default App;
