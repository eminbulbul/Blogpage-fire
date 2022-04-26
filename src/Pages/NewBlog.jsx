import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./loginRegister.css";
import BlogIcon from "../assets/blok.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { BlogContext } from "../context/BlogContext";

export default function NewBlog() {
  const navigate = useNavigate();

  const [info, setInfo] = useState();
  const { AddBlog } = useContext(BlogContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    AddBlog(info);
    navigate("/");
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <div className="login-container">
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit}>
            <Box className="login-box">
              <img className="blog-icon" src={BlogIcon} alt="blog_icon" />
              <h2>── NEW BLOG ──</h2>

              <div className="login-textfields">
                <TextField
                  autoFocus
                  id="title"
                  label="Title"
                  variant="outlined"
                  name="title"
                  required
                  onChange={handleChange}
                />

                <TextField
                  type="url"
                  id="outlined-basic2"
                  label="Image URL"
                  variant="outlined"
                  name="imageURL"
                  required
                  onChange={handleChange}
                />
                <TextField
                  multiline
                  minRows={8}
                  id="outlined-basic2"
                  label="Content"
                  variant="outlined"
                  name="content"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="login-buttons">
                {/* buttonlara hover ve background color eklenmeli */}
                <Button type="submit" variant="contained">
                  SUBMIT
                </Button>
              </div>
            </Box>
          </form>
        </Container>
      </React.Fragment>
    </div>
  );
}
