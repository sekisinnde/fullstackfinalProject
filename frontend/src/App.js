import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
//import Connexion from './components/ConnexionForm';
import Inscription from './components/InscriptionForm';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
      <Routes>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/inscription' element={<Inscription/>}/>
      </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;