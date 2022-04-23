import './App.css';
import React from "react"
import {Routes,Route} from 'react-router-dom';
import {Home} from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import { Booking } from './Components/Booking';
import {Footer} from './Components/Footer';
import Checkout from './Components/Checkout';
import { Cooks } from './Components/CookDetail';
import {Chat} from "./Components/Chat"
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/booking/:id' element={<Booking/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/cooks' element={<Cooks/>}/>
      </Routes>
      <div style={{display:"flex",justifyContent:"flex-end",position:"sticky",top:0,bottom:20,right:20}}>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Chat Bot
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        // anchorOrigin={{
        //   vertical: 'bottom',
        //   horizontal: 'left',
        // }}
      >
        <Chat/>
      </Popover>
    </div>
      <Footer/>
    </div>
  );
}

export default App;
