import React from "react";
import {
  Paper,
  Card,
  CardActions,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  Button,
} from "@mui/material";
import landrover from "../../../img/landrover.jpg";

export default function Personal() {
  return (
    <Paper
      elevation={3}
      sx={{
        height: "100%",
      }}
    >
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={landrover}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </Paper>
  );
}
