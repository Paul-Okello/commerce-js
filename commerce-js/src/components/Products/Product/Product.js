import { Card, CardContent, CardMedia, IconButton, Typography } from "@material-ui/core";
import React from "react";
import {AddShoppingCart} from "@material-ui/icons"

const Product = ({ product }) => {
  return (
    <Card>
      <CardMedia className={classes.media} image="" title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">{product.price}</Typography>
        </div>
        <Typography variant="h2" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
    </CardActions>
  );
};

export default Product;
