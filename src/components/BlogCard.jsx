import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function BlogCard() {
  const { currentUser } = useContext(AuthContext);

  const [likeNumber, setLikeNumber] = useState(0);
  const [likeColor, setLikeColor] = useState();
  const [click, setClick] = useState(true);

  ///like make red and +1 function
  const handleLike = () => {
    if (click) {
      setLikeNumber(likeNumber + 1);
      setLikeColor("red");
      setClick(!click);
    } else {
      setLikeNumber(likeNumber - 1);
      setLikeColor();
      setClick(!click);
    }
  };

  return (
    <Card sx={{ width: 300, height: 500 }}>
      <CardMedia
        component="img"
        height="100"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
        objectfit="contain"
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
            <h3>Title Here</h3>
            <h6 style={{ color: "grey" }}>Date Here</h6>
          </div>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: "black", textAlign: "start", mt: 2 }}
        >
          <IconButton sx={{ color: "black", p: 0 }}>
            <AccountCircleIcon fontSize="small" />
          </IconButton>
          {currentUser?.email}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={() => {
            handleLike();
          }}
          sx={{ color: `${likeColor}` }}
          aria-label="add to favorites"
        >
          <FavoriteIcon />
        </IconButton>
        <span>{likeNumber}</span>
        <IconButton aria-label="comment">
          <ChatBubbleOutlineIcon />
        </IconButton>
        <span>1</span>
      </CardActions>
    </Card>
  );
}