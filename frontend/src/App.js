import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ConnexionForm from './components/ConnexionForm';
import Users from './components/Users'
import InscriptionForm from './components/InscriptionForm';
import MarketPlace from './components/MarketPlace';
import ShoppingCart from './components/ShoppingCart';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import InfoPage from './components/InfoPage';
import CategoryPage from './components/CategoryPage';
import Forum from './components/Forum';
import Conversation from './components/Conversation';


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
      <Routes>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/infopage' element={<InfoPage/>}/>
        <Route path='/users/:id' element={<Users/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/connexion' element={<ConnexionForm/>}/>
        <Route path='/marketplace' element={<MarketPlace/>}/>
        <Route path='/inscription' element={<InscriptionForm/>}/>
        <Route path='/forum' element={<Forum/>}/>
        <Route path="/category/:id" element={<CategoryPage/>} />
        <Route path="/conversations" element={<Conversation/>} />
      </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;