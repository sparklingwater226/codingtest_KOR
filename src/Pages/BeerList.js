import React, { forwardRef, useState } from 'react'
import MaterialTable, { MTableToolbar } from 'material-table'
import { useSelector, useDispatch } from 'react-redux';
import { setColumns, addCart } from '../Modules/actions';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Filter from "../Components/Filter";
import Body from "../Components/Body";
import Header from "../Components/Header"
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const BeerListBody = styled(Body)`
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

const BeerList = () => {
  const dispatch = useDispatch();
  const { beerList, columnList } = useSelector(state => state);
  const tableIcons = {
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  };
  const [displayList, setDisplayList] = useState(beerList);
  const [filter, setFilter] = useState([]);
  
  const handleColumnDrag = (sourceIndex, destinationIndex) => {
    const newColumnList = columnList;
    const moved = newColumnList[sourceIndex];
    newColumnList.splice(sourceIndex, 1);
    newColumnList.splice(destinationIndex, 0, moved);

    dispatch(setColumns(newColumnList));
  }
  
  return (
    <BeerListBody>
      <Header />
      <MaterialTable
          icons={tableIcons}
          columns={columnList}
          data={displayList}
          title="BREWDOG DIY DOG"
          onColumnDragged={handleColumnDrag}
          options={{
            sorting: false,
            search: false,
            headerStyle: {
              backgroundColor: 'transparent'
            }
          }}
          components={{
            Action: props => (
              <FontAwesomeIcon icon={faCartPlus} className='fa-lg'
              onClick={(event) => props.action.onClick(event, props.data)}/>
            ),
            Toolbar: props => (
              <StyledToolbar>
                <MTableToolbar {...props} />
                <Filter 
                  setDisplayList={setDisplayList}
                  setFilter={setFilter}
                  filter={filter}
                />
              </StyledToolbar>
            ),
          }}
          style={{
            backgroundColor: 'transparent',
            padding: '20px 50px'
          }}
          actions={[
            {
              icon: 'save',
              tooltip: 'Add to cart',
              onClick: (event, rowData) => {
                const { image_url, name } = rowData;
                const addCartItem = { image_url, name, price: 10000, quantity: 1};
                dispatch(addCart(addCartItem));
              }
            }
          ]}
        />
    </BeerListBody>
  )
}

export default BeerList
