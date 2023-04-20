import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
const Header = ({ children, hasHiddenAuthButtons }) => {
  const history = useHistory();
  let user = localStorage.getItem("username");
  return (
    <Box className="header">
      <Box className="header-title">
        <img src="logo_light.svg" alt="QKart-icon"></img>
      </Box>
      {children}
      {hasHiddenAuthButtons ? (
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={() => {
            history.push("/");
          }}
        >
          Back to explore
        </Button>
      ) : (
        <Stack direction="row" alignItems="center">
          {user ? (
            <>
            
              <Avatar alt={user} src="avatar.png" style={{marginRight:"7px"}}/>
              <p>{user}</p>
              {/* <img src="avatar.png" alt="User avatar" className="userAvatar" /> */}
              <Button
                className="explore-button"
                variant="text"
                onClick={() => {
                  localStorage.clear();
                  history.push("/");
                  // window.location.reload();
                }}
              >
                LOGOUT
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="text"
                className="explore-button"
                style={{ marginRight: "10px" }}
                onClick={() => {
                  history.push("/login");
                }}
              >
                LOGIN
              </Button>
              <Button
                variant="contained"
                className="register-button"
                onClick={() => {
                  history.push("/register");
                }}
              >
                REGISTER
              </Button>
            </>
          )}
        </Stack>
      )}
    </Box>
  );
};

export default Header;
