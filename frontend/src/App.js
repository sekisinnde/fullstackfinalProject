import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ConnexionForm from './components/ConnexionForm';
import Users from './components/Users'
import InscriptionForm from './components/InscriptionForm';
import MarketPlace from './components/MarketPlace';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import Category from './components/Categories';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
      <Routes>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/homepage' element={<HomePage/>}/>
        <Route path='/users/:id' element={<Users/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/connexion' element={<ConnexionForm/>}/>
        <Route path='/marketplace' element={<MarketPlace/>}/>
        <Route path='/inscription' element={<InscriptionForm/>}/>
        <Route path='/categories/' element={<Category/>}/>
        <Route path="/category/:theme" element={<Category />} />
      </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;