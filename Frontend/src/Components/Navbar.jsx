import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../Redux/Login/action";

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.login.user);
  const isAuth = useSelector((store) => store.login.isAuthenticated);

  const handleAuth = ({ target }) => {
    if (isAuth === false) {
      navigate("/login");
    } else {
      dispatch(logoutSuccess());
      alert("You logged out");
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            onClick={() => navigate("/")}
            style={{ display: "flex", gap: "5px", alignItems: "center" }}
          >
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/chef-hat-2216706-1857400.png"
              className="project-logo-img"
              alt=""
            />
            <Typography className="project-logo-name">Hire Cook</Typography>
          </div>
          <div className="navbar-login-logout-div">
            <Button color="inherit" onClick={() => navigate("/cooks")}>
              Cooks
            </Button>
            {user !== {} && isAuth ? (
              <Typography className="logged-in-user-name">
                Hi! {user.name}
              </Typography>
            ) : null}

            <Button color="inherit" onClick={(event) => handleAuth(event)}>
              {isAuth === true ? "LOGOUT" : "LOGIN"}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
