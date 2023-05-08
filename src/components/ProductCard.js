import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBContainer,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

export default function ProductCard() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.allCart.items);
  console.log('ITEMS', items);

  return (
    <MDBContainer className="mx-auto mt-2">
      <MDBRow className="mb-3">
        {items.map((item) => (
          <MDBCol key={item.id} size="md">
            <MDBCard>
              <MDBCardImage src={item.img} position="top" alt="..." />
              <MDBCardBody>
                <MDBCardTitle>{item.title}</MDBCardTitle>
                <MDBCardText>{item.price}</MDBCardText>
                <MDBBtn
                  className="d-flex mx-auto"
                  onClick={() => dispatch(addToCart(item))}
                >
                  Add to Cart
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}
