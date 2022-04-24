import * as React from "react";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./loginRegister.css";
import BlogIcon from "../assets/blok.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import googleLogo from "../assets/google.png";
import { createUser, signUpProvider } from "../helpers/firebase";
import { useNavigate } from "react-router";

export default function SimpleContainer() {
  // const eventHandler = ()=>{

  // buraya email ve password bos birakildiginda error mesaji verilmesi fonksiyonu atanmali }
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const handleProviderRegister = () => {
    signUpProvider(navigate);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(email, password, navigate);
    console.log(email, password);
  };
  return (
    <div className="login-container">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit}>
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
                  onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                  type={"password"}
                  id="outlined-basic2"
                  label="Password"
                  variant="outlined"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="login-buttons">
                {/* buttonlara hover ve background color eklenmeli */}
                <Button type="submit" variant="contained">
                  REGISTER
                </Button>
                <Button onClick={handleProviderRegister}>
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
          </form>
        </Container>
      </React.Fragment>
    </div>
  );
}
