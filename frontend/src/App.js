import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ConnexionForm from './components/ConnexionForm';
import InscriptionForm from './components/InscriptionForm';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
      <Routes>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/connexion' element={<ConnexionForm/>}/>
        <Route path='/inscription' element={<InscriptionForm/>}/>
        <Route path='/homepage' element={<HomePage/>}/>
      </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;