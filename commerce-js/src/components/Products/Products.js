import React from "react";
import Grid from "@material-ui/core";

const products = [
  { id: 1, name: "Shoes", description: "Running Shoes" , price="Ksh 3000" },
  { id: 2, name: "PS 5", description: "Gamming", price="Ksh 53000" },
  { id: 3, name: "Trouser", description: "Lower body wear", price="Ksh 1500" },
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
