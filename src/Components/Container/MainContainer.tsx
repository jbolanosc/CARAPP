import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Switch, Route } from "react-router-dom";
import About from "../../pages/About/About";
import Blog from "../../pages/Blog/Blog";
import Landing from "../../pages/Landing/Landing";
import Listing from "../../pages/Listing/Listing";
import User from "../../pages/User/User";
import NotFound from "../../pages/404/NotFound";
import Login from "../../pages/Auth/Login";
import Item from "../../pages/Item/Item";

export default function MainContainer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/listing">
          <Listing />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/item">
          <Item />
        </Route>
        <Route exact strict path="/login">
          <Login />
        </Route>
        <Route exact strict path="/">
          <Landing />
        </Route>
        <Route exact strict path="*">
          <NotFound />
        </Route>
      </Switch>
    </Box>
  );
}
