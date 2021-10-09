import { AddShoppingCartSharp } from '@mui/icons-material';
import { IconButton, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateProduct } from '../../actions/product.action';

const ProductList = () => {
  const data = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  let products = data.filter(item => item.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
  
  // function for adding item into cart
  const addToList = (index) => {
    const obj = {...products[index]};
    obj['qty'] = 1; // default qty
    products[index]['qty'] = products[index]['qty'] - 1;  // updating the product qty
    console.log('product: ', products[index])
    dispatch(addToCart(obj)); // adding to cart.
    // dispatch(updateProduct(products[index])); // udpate product detail
  }

  const sortItemPrice = (e) => {
    e.preventDefault()
    products = products.sort((a, b) => b.price - a.price)
    console.log('product: ', products);
  }

  const sortByQty = (e) => {
    e.preventDefault()
    products = products.sort((a, b) => b.qty -a.qty)
    console.log('product: ', products)
  }  
  
  return (
    <>
    <h3>Product List</h3>
    <button onClick={(e) => sortItemPrice(e)}>Sort by price</button>
    <button onClick={(e) => sortByQty(e)}>Sort by qty</button>
    <div style={{margin: '10px 0', textAlign: 'end'}}>
      <TextField variant="standard" label="search text" onChange={(e) => setSearchText(e.target.value)} />
    </div>
    <Table sx={{minWidth: 650}}>
      <TableHead>
        <TableRow>
          <TableCell>SNo.</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Qty</TableCell>
          <TableCell>Descr</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.qty}</TableCell>
            <TableCell>{item.desc}</TableCell>
            <TableCell>
              <IconButton color="inherit" onClick={() => addToList(index)}>
                <AddShoppingCartSharp />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </>
  )
}

export default ProductList;