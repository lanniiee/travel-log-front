import './App.scss';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Nav/>

        <Routes>
          <Route path="*" element={<Home />} />
          
        </Routes>
    </div>
  );
}

export default App;
