
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartPage from './Components/Cartpage';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom';


function App() {
  return (
   <>
   <Router>
   <ToastContainer />
   <Navbar/>
   <Routes>
    <Route  path='/cart' element={<CartPage/>}/>
    <Route path='/' element={<Product/>}/>
   </Routes>
   </Router>

   </>
  );
}

export default App;
