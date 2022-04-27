import { useLocation, useNavigate } from "react-router";
import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

import { AuthContext } from "../context/AuthContext";

const Details = () => {
  const location = useLocation();
  const item = location.state.item;

  const navigate = useNavigate();
  const { DeleteBlog } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);

  const handleErase = () => {
    DeleteBlog();
    navigate("/");
  };
  const handleUpdate = () => {
    navigate("/blogform", { state: { item } });
  };

  return (
    <div>
      <Card
        sx={{
          margin: "auto",
          width: "60%",
          height: "55rem",
        }}
      >
        <CardMedia
          component="img"
          sx={{ height: "40rem" }}
          image={item.imageURL}
          alt={item.title}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "block",
              backgroundColor: "#EFEEFE",
              padding: "0.5rem",
              fontFamily: "Girassol",
            }}
          >
            <div
              style={{
                paddingTop: "1rem",
                textAlign: "center",
                color: "#046582",
              }}
            >
              <h3>{item.title}</h3>
              <h6 style={{ color: "grey" }}>{item.date}</h6>
            </div>
            {item.content}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: "black", mt: 2 }}
          >
            <IconButton sx={{ color: "black", p: 0 }}>
              <AccountCircleIcon fontSize="small" />
            </IconButton>
            {item.author}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <span>1</span>
          <IconButton aria-label="comment">
            <ChatBubbleOutlineIcon />
          </IconButton>
          <span>1</span>
        </CardActions>
      </Card>
      {currentUser === item.author && (
        <div style={{}}>
          <Button onClick={handleUpdate} variant="contained">
            UPDATE
          </Button>
          <Button onClick={handleErase} variant="contained">
            DELETE
          </Button>
        </div>
      )}
    </div>
  );
};

export default Details;
