import React from "react";
import { ShoppingCart } from "@material-ui/icons";
import { AppBar, Badge, Toolbar, Typography } from "@material-ui/core";
import logo from "../../../assets/myShop.png";

const Navbar = () => {
  return (
    <>
      <AppBar position="fixed" className={Classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img
              src={logo}
              alt="MyShop"
              height="25px"
              className={classes.image}
            />
            MyShop
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
