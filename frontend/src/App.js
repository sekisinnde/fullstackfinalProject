import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/tests' element={<Navbar/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;