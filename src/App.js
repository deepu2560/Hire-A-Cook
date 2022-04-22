import './App.css';
import {Routes,Route} from 'react-router-dom';
import {Home} from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import {Footer} from './Components/Footer';
import Checkout from './Components/Checkout';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
