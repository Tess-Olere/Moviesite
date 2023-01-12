import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import Navhead from './components/Navhead'
import Home from './Page/Home'
import Search from './Page/Search';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Navhead />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/search' element={<Search />}/>
     </Routes>
     <Footer/>
    </>
  );
}

export default App;
