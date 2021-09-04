import styled from 'styled-components';
import React from 'react';

const StyledIngredients = styled.div`
  padding: 1rem;
`;

const StyledIngredientsHeader = styled.div`
  color: #6e529d;
  font-family: 'Frijole', sans-serif;
  margin: 1rem 0 0.5rem 0;
`;

const StyledIngredientsContent = styled.div`
  display: flex;
  justify-content: space-between;
  color: #6e529d;

  div {
    color: #6e529d;
    flex: 1 1 0px;
  }
`;

const Ingredients = ({ ingredients }) => {
  return (
    <StyledIngredients>
      <StyledIngredientsHeader>MALT</StyledIngredientsHeader>
      {ingredients.malt.map(el => {
        return (
          <StyledIngredientsContent>
            <div>{el.name}</div>
            <div>{el.amount.value + ' ' + el.amount.unit}</div>
          </StyledIngredientsContent>
        )
      })}
      <StyledIngredientsHeader>HOPS</StyledIngredientsHeader>
      {ingredients.hops.map(el => {
        return (
          <StyledIngredientsContent>
            <div>{el.name}</div>
            <div>{el.amount.value + ' ' + el.amount.unit}</div>
            <div>{el.add}</div>
            <div>{el.attribute}</div>
          </StyledIngredientsContent>
        )
      })}
      <StyledIngredientsHeader>YEAST</StyledIngredientsHeader>
      <StyledIngredientsContent>{ingredients.yeast}</StyledIngredientsContent>
    </StyledIngredients>
  )
}

export default Ingredients;