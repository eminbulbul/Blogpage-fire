import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./loginRegister.css";
import BlogIcon from "../assets/blok.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import googleLogo from "../assets/google.png";

export default function SimpleContainer() {
  // const eventHandler = ()=>{

  // buraya email ve password bos birakildiginda error mesaji verilmesi fonksiyonu atanmali }

  return (
    <div className="login-container">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box className="login-box">
            <img className="blog-icon" src={BlogIcon} alt="blog_icon" />
            <h2>── REGISTER ──</h2>

            <div className="login-textfields">
              <TextField
                type={"email"}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                required
              />

              <TextField
                type={"password"}
                id="outlined-basic"
                label="Password"
                variant="outlined"
                required
              />
            </div>
            <div className="login-buttons">
              {/* buttonlara hover ve background color eklenmeli */}
              <Button variant="contained">REGISTER</Button>
              <Button>
                WITH
                <span>
                  <img
                    className="google-logo"
                    src={googleLogo}
                    alt="google-logo"
                  />
                </span>
              </Button>
            </div>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
}
