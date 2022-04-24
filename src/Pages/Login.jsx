import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./loginRegister.css";
import BlogIcon from "../assets/blok.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import googleLogo from "../assets/google.png";
import { useState } from "react";
import { useNavigate } from "react-router";
import { signIn, signUpProvider } from "../helpers/firebase";
// import { blueGrey } from "@mui/material/colors";
// import { createTheme } from "@mui/material/styles";

export default function SimpleContainer() {
  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: blueGrey[100],
  //     },
  //   },
  // });

  // const googleBtnColor = blueGrey[100];

  // const eventHandler = ()=>{

  // buraya email ve password bos birakildiginda error mesaji verilmesi fonksiyonu atanmali }
  const navigate = useNavigate();
  const handleProviderRegister = () => {
    signUpProvider(navigate);
  };
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
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
              <h2>── LOGIN ──</h2>

              <div className="login-textfields">
                <TextField
                  type="email"
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                  type="password"
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
                  LOGIN
                </Button>
                <Button
                  // sx={{
                  //   bgcolor: "main",
                  //   "&:hover": {
                  //     bgcolor: "primary.main",
                  //     color: "white",
                  //   },
                  // }} bu sekilde bg color degise biliyor renkleri nasil secilecek
                  onClick={handleProviderRegister}
                >
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
