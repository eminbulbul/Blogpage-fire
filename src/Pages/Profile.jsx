import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Profile() {
  const { currentUser } = useContext(AuthContext);

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "30rem",
        height: "30rem",
        textAlign: "center",
        margin: "auto",
        marginTop: "10rem",
        minWidth: 275,
        boxShadow: "rgb(215, 180, 222) 6px 6px 2px 0px",
      }}
    >
      <CardContent>
        <CardMedia
          component="img"
          height="200"
          image={currentUser?.photoURL}
          alt="Profile Photo"
        />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Display Name
        </Typography>
        <Typography variant="h5" component="div">
          {currentUser?.displayName}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Email
        </Typography>
        <Typography variant="body2">{currentUser?.email}</Typography>
      </CardContent>
    </Card>
  );
}
