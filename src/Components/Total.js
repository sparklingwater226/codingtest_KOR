import styled from 'styled-components';
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import Button from './Button'

const StyledTotal = styled.div`
  text-align: right;
  padding: 20px 0 50px;

  div {
    margin: 20px 0;
    font-size: 1.5rem;
  }
`;

const Total = () => {
  const { cartItems } = useSelector(state => state);

  const calculateTotal = (cartItems) => {
    const totalPrice = cartItems.reduce((acc, cur) => acc + cur.price, 0);
    return new Intl.NumberFormat('kr-KR', { style: 'currency', currency: 'KRW' }).format(totalPrice)
  };

  const total = useMemo(() => calculateTotal(cartItems), [cartItems]);

  const checkout = () => alert('Currently not available');

  return (
    <StyledTotal>
      <div>{`Total: ${total}`}</div>
      <Button onClick={() => checkout()}>ORDER</Button>
    </StyledTotal>
  )
}

export default Total;