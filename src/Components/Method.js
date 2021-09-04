import styled from 'styled-components';
import React from 'react'

const StyledMethod = styled.div`
  padding: 1rem;
`;

const StyledMethodHeader = styled.div`
  color: #6e529d;
  font-family: 'Frijole', sans-serif;
  margin: 1rem 0 0.5rem 0;
`;

const StyledMethodContent = styled.div`
  display: flex;
  justify-content: space-between;
  color: #6e529d;

  div {
    color: #6e529d;
    flex: 1 1 0px;
  }
`;

const renderTemp = ({ temp, duration }) => {
  let dur = duration ? `${duration}min` : '-';
  if (temp.unit === 'celsius') {
    let celsius = `${temp.value}°C`
    let fahrenheit = `${(temp.value * 1.8) + 32}°F`
    return {celsius, fahrenheit, duration: dur}
  } else {
    let celsius = `${temp.value}°C`
    let fahrenheit = `${(temp.value - 32) * 5 / 9}°F`
    return {celsius, fahrenheit, duration: dur}
  }
}

const Method = ({ method }) => {
  const { celsius, fahrenheit, duration } = renderTemp(method.fermentation);
  return (
    <StyledMethod>
      <StyledMethodHeader>MASH TEMP</StyledMethodHeader>
      {method.mash_temp.map(el => {
        const { celsius, fahrenheit, duration } = renderTemp(el);
        return (
          <StyledMethodContent>
            <div>{celsius}</div>
            <div>{fahrenheit}</div>
            <div>{duration}</div>
          </StyledMethodContent>
        )
      })}
      <StyledMethodHeader>FERMENTATION</StyledMethodHeader>
      {
          <StyledMethodContent>
            <div>{celsius}</div>
            <div>{fahrenheit}</div>
            <div>{duration}</div>
          </StyledMethodContent>
      }
      {method.twist ? <StyledMethodHeader>TWIST</StyledMethodHeader> : null}
      {method.twist ? <StyledMethodContent>{method.twist}</StyledMethodContent> : null}
    </StyledMethod>
  )
}

export default Method;