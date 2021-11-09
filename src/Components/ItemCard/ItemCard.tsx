import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import landrover from "../../img/landrover.jpg";
import { Link } from "react-router-dom";

export default function ImgMediaCard() {
  return (
    <Card sx={{ width: "100%", display: "flex" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        src={landrover}
        sx={{ maxWidth: "30%" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Land Rover Discovery
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        <Link to="/item" className="link">
          <Button size="small">View</Button>
        </Link>
        <Button size="small">Save</Button>
      </CardActions>
    </Card>
  );
}
