import React from 'react';
import { useEffect } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCartTotal } from '../features/cartSlice';

export default function App() {
  const dispatch = useDispatch();

  const { cart, totalQuantity } = useSelector((state) => state.allCart);
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
        <Link to="/">
          {' '}
          <MDBNavbarBrand>Shopping Cart Redux ToolKit</MDBNavbarBrand>
        </Link>

        <Link to="/">
          {' '}
          <span>All Products</span>
        </Link>

        <Link to="/cart">
          {' '}
          <MDBBtn>Cart({totalQuantity})</MDBBtn>
        </Link>
      </MDBContainer>
    </MDBNavbar>
  );
}
