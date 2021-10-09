import React from "react";
import {
  IconButton,
  Box,
  AppBar,
  Toolbar,
  Typography,
  Badge,
} from "@mui/material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function HeaderComponent() {
  const cart = useSelector((state) => state.product.cart);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Product
          </Typography>
          <Link to="/cart" style={{ color: "#fff" }}>
            <Badge badgeContent={cart.length}>
              <IconButton color="inherit">
                <ShoppingCart />
              </IconButton>
            </Badge>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default HeaderComponent;
