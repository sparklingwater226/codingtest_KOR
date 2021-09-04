import styled from 'styled-components';
import React from 'react'

const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;

  * {
    padding: .5rem;
  }
`;

const Checkbox = ({ filter, setFilter, name, value }) => {
  const handleChange = (e) => {
    const category = e.currentTarget.value;
    if (filter.includes(category)) {
      setFilter(filter.filter(el => el !== category));
    } else {
      setFilter([...filter, category]);
    }
  }

  const expandClick = (e) => {
    e.currentTarget.previousSibling.click();
  }

  const renderLabel = (name) => {
    if (name.includes('~')) return name.replace('~', ' ~ ');
    else return '> 15%';
  }

  return (
    <StyledCheckbox>
      <input type="checkbox"
        name={name}
        value={value}
        checked={filter.includes(value)}
        onChange={e => handleChange(e)} />
      <label htmlFor={name} onClick={e => expandClick(e)}>{renderLabel(name)}</label>
    </StyledCheckbox>
  )
}

export default Checkbox;