import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FoodBankIcon from '@mui/icons-material/FoodBank';

export default function ButtonAppBar() {
  const navigate = useNavigate()
  const user = useSelector((store)=>store.login.user)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          {/* <FoodBankIcon color="inherit"  sx={{fontSize:'50px'}}></FoodBankIcon> */}
          <img onClick={()=>navigate("/")} src="https://cdn.iconscout.com/icon/free/png-256/chef-hat-2216706-1857400.png" alt="" width="50"/>
          <Typography onClick={()=>navigate("/")} sx={{textTransform:"uppercase",marginLeft:"10px",marginRight:"20px",fontSize:"14px"}}>Hire Cook</Typography>
          <Typography sx={{textTransform:"uppercase",marginLeft:100,fontSize:"14px"}}>{user!={}?user.name:""}</Typography>
          <Button color="inherit" sx={{marginLeft:2}} onClick={()=>navigate("/login")}>Login</Button>
          {/* <Button color="inherit" sx={{marginLeft:2}} onClick={()=>navigate("/signup")}>Signup</Button> */}
          {/* <Button color="inherit" sx={{marginLeft:2}} onClick={()=>navigate("/dashboard")}>dashboard</Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
