import React, { useState } from "react";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
import ProductList from "../ProductList";
import { useDispatch } from "react-redux";
import { addProduct } from "../../actions/product.action";
import shortid from 'shortid';


function ProductComponent() {
  const discpatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [desc, setDesc] = useState("");

  const saveData = () => {
    console.log(name, price, qty, desc);
    const new_product = {
      id: shortid.generate(),
      name: name,
      price: price,
      qty: qty,
      desc: desc
    };
    discpatch(addProduct(new_product))
  }

  return (
    <Box component="form">
      <Container>
        <Grid container spacing={2} style={{marginTop: '10px'}}>
          <Grid item xs={3}>
            <TextField
              label="Name"
              variant="standard"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Price"
              variant="standard"
              fullWidth
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Qty"
              variant="standard"
              fullWidth
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Description"
              variant="standard"
              fullWidth
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="flex-end">
            <Button color="primary" variant="outlined" onClick={saveData}>
              Add
            </Button>
          </Grid>
        </Grid>

        {/* product list */}
        <ProductList />
      </Container>
    </Box>
  );
}

export default ProductComponent;
