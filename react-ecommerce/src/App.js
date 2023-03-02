
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import { Shop } from "./pages/Shop/shop";
import { Cart } from "./pages/cart/cart";

import { LogIn } from './pages/Login/login';
import { ShopContextProvider } from './Context/Shop-Context';


function App() {
  return (
    <div className="App">
      
      <div className="Nav-bar">
        {/* Routes UI Navigation */}
      <ShopContextProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/cart' element={< Cart/>}/>
            <Route path='/login' element={< LogIn />}/>
          </Routes>
        </Router> 
        </ShopContextProvider> 
      </div>
    </div>
  );
}

export default App;
