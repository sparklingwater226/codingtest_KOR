import styled from 'styled-components';
import React from 'react'
import { useSelector } from 'react-redux';
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import Checkbox from './Checkbox'

const StyledFilter = styled.div`
  display: flex;
  align-items: center;
`;

const Filter = ({ filter, setFilter, setDisplayList }) => {
  const { beerList } = useSelector(state => state);

  const showFiltered = () => {
    if (filter.length === 4) {
      setDisplayList(beerList);
    } else if (filter.length === 1) {
      setDisplayList(beerList.filter(el => el.category === filter[0]));
    } else if (!filter.length) {
      setDisplayList([]);
    } else {
      setDisplayList(beerList.filter(el => filter.includes(el.category)));
    }
  }

  return (
    <StyledFilter>
      <Checkbox
        filter={filter}
        setFilter={setFilter}
        name={'0%~5%'}
        value={'1'}
      />
      <Checkbox
        filter={filter}
        setFilter={setFilter}
        name={'5%~10%'}
        value={'2'}
      />
      <Checkbox
        filter={filter}
        setFilter={setFilter}
        name={'10%~15%'}
        value={'3'}
      />
      <Checkbox
        filter={filter}
        setFilter={setFilter}
        name={'15%+'}
        value={'4'}
      />
      <Button borderless onClick={() => showFiltered()}>
        <FontAwesomeIcon icon={faFilter} />
        show filtered
      </Button>
    </StyledFilter>
  )
}

export default Filter;