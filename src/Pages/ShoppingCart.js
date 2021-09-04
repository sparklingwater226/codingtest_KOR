import React, { forwardRef } from 'react'
import MaterialTable, { MTableToolbar } from 'material-table'
import { useSelector, useDispatch } from 'react-redux';
import { removeCart } from '../Modules/actions';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import styled from 'styled-components'
import Body from "../Components/Body";
import Header from "../Components/Header"
import Total from "../Components/Total"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ShoppingCartBody = styled(Body)`
  display: block;
`

const StyledToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    overflow: visible;
  }
  h6 {
    font-family: 'Frijole', sans-serif;
    font-size: 1.5rem;
  }
`

const cartColumnList = [
    {field: 'image_url', title: 'Image',  render: rowData => <img src={rowData.image_url} alt={rowData.name} style={{width: 50}}/>},
    {field: 'name', title: 'This Beer Is'},
    {field: 'price', title: 'Price',  render: rowData => new Intl.NumberFormat('kr-KR', { style: 'currency', currency: 'KRW' }).format(rowData.price)},
    {field: 'quantity', title: 'QTY', type: 'numeric'}
  ]

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(state => state);
  const tableIcons = {
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  };

  return (
    <ShoppingCartBody>
      <Header />
      <MaterialTable
          icons={tableIcons}
          columns={cartColumnList}
          data={cartItems}
          title="Shopping Cart"
          options={{
            sorting: false,
            search: false,
            headerStyle: {
              backgroundColor: 'transparent',
              color: 'white',
              fontSize: '1rem',
              fontFamily: 'Nanum Gothic'
            },
            draggable: false,
            
          }}
          components={{
            Action: props => (
              <FontAwesomeIcon icon={faTimes} className='fa-lg'
              onClick={(event) => props.action.onClick(event, props.data)}/>
            ),
            Pagination: props => (
              <Total />
            ),
            Toolbar: props => (
              <StyledToolbar>
                <MTableToolbar {...props} />
              </StyledToolbar>
            )
          }}
          style={{
            backgroundColor: 'transparent',
            padding: '20px 50px',
            boxShadow: 'none'
          }}
          actions={[
            {
              icon: 'save',
              tooltip: 'Delete from cart',
              onClick: (event, rowData) => dispatch(removeCart(rowData.name))
            }
          ]}
          localization={{
            header: {
              actions: ''
            },
            body: {
              emptyDataSourceMessage: 'Your cart is empty'
            }
          }}
        />
    </ShoppingCartBody>
  )
}

export default ShoppingCart
