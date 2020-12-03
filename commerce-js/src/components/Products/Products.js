import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running Shoes",
    price: "Ksh 3000",
    image:
      "https://cdn.shopify.com/s/files/1/0071/6698/4310/files/Gravity-ColorwayHeader.jpg?v=1600368766)",
  },
  {
    id: 2,
    name: "PS 5",
    description: "Gamming",
    price: "Ksh 53000",
    image: "https://www.cio.co.ke/wp-content/uploads/2020/09/playstation-5.jpg",
  },
  {
    id: 3,
    name: "Trouser",
    description: "Lower body wear",
    price: "Ksh 1500",
    image: "https://ecstasybd.com/images/thumbs/0005410_tanjim-trouser.jpeg",
  },
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={2}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
