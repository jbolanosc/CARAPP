import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import landrover from "../../img/landrover.jpg";
import Grid from "@mui/material/Grid";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Item() {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Card
        sx={{
          width: "100%",
          display: "flex",
          height: "100%",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
          },
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          src={landrover}
          sx={{
            maxWidth: {
              sm: "100%",
              xs: "100%",
              md: "45%",
            },
          }}
        />
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            flexDirection: "column",
          }}
        >
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
          <Button size="large">
            {like ? (
              <FavoriteIcon onClick={handleLike} />
            ) : (
              <FavoriteBorderIcon onClick={handleLike} />
            )}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
