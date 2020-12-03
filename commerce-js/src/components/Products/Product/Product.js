import { Card, CardMedia } from "@material-ui/core";
import React from "react";

const Product = () => {
  return (
    <div>
      <Card>
        <CardMedia className={classes.media} image="" title={product.name} />
      </Card>
    </div>
  );
};

export default Product;
