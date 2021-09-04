import styled from 'styled-components';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faShoppingCart, faList } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from "react-router";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 50px;
  background-color: black;
  height: 80px;
`;

const Header = () => {
  const history = useHistory();
  return (
    <StyledHeader>
      <FontAwesomeIcon icon={faHome} className='fa-2x' onClick={() => history.push('/home')} />
      {window.location.pathname === '/beerlist' ?
      <FontAwesomeIcon icon={faShoppingCart} className='fa-2x' onClick={() => history.push('/shoppingcart')} />
      :
      <FontAwesomeIcon icon={faList} className='fa-2x' onClick={() => history.push('/beerlist')} />}
    </StyledHeader>
  )
}

export default Header;