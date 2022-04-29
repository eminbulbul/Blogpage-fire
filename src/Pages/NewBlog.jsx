import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import BlogIcon from "../assets/blok.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { BlogContext } from "../context/BlogContext";
import Toastify from "../helpers/toastNotify";
import { Typography } from "@mui/material";

const initialValues = { title: "", content: "", imageURL: "" };

export default function NewBlog() {
  const navigate = useNavigate();

  const [info, setInfo] = useState(initialValues);
  const { AddBlog } = useContext(BlogContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    AddBlog(info);
    navigate("/");
    Toastify("New Blog Added Successfully");
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const style = {
    boxSizing: "border-box",
    backgroundPosition: "center",
    backgroundImageRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    padding: "1rem",
    backgroundImage: `url("https://picsum.photos/1200/900")`,
  };

  return (
    <div style={style}>
      <Container
        component="main"
        maxWidth="xs"
        style={{
          borderRadius: "10px",
          boxShadow: "rgba(0, 0, 0, 0.75) 10px 10px 5px 0px",
          backgroundColor: "#fff",
          position: "relative",
        }}
      >
        {/* <CssBaseline /> */}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={BlogIcon}
            alt="login_blog"
            style={{
              width: "200px",
              height: "200px",
              margin: "1rem",
              padding: "0.5rem",
              backgroundColor: "#046582",
              borderRadius: "50%",
            }}
          />

          <Typography
            sx={{ color: "#046582", fontFamily: "Girassol" }}
            component="h1"
            variant="h5"
          >
            ── New Blog ──
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <form id="register" action="" onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="imageURL"
                label="Image URL"
                type="url"
                id="imageURL"
                onChange={handleChange}
              />

              <TextField
                margin="normal"
                multiline
                minRows={8}
                maxRows={10}
                required
                fullWidth
                name="content"
                label="content"
                type="textarea"
                id="content"
                onChange={handleChange}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: "#046582" }}
              >
                SUBMIT
              </Button>
            </form>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
