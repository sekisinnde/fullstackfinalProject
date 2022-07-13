import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import HomePage from './components/HomePage';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
      <Routes>
      
        <Route path='/homepage' element={<HomePage/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;