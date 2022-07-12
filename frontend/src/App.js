import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;