import styled from 'styled-components';
import React from 'react'
import Method from './Method';
import Ingredients from './Ingredients';

const StyledModalDescription = styled.div`
  flex: 1 1 0px;
  padding: 10px 30px;
`;

const StyledModalDescriptionHeader = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-family: 'Frijole', sans-serif;
  border-bottom: 2px dashed #6e529d;
  padding-bottom: 1rem;
  color: #6e529d;
`;

const StyledModalDescriptionContent = styled.div`
  padding: 1rem;
  color: #6e529d;
`;

const ModalDescription = ({ header, description }) => {
  const renderDescription = (description) => {
    if (header === 'Method') {
      return (<Method method={description} />);
    } else if (header === 'Ingredients') {
      return (<Ingredients ingredients={description} />);
    } else {
      return (<StyledModalDescriptionContent>{description}</StyledModalDescriptionContent>);
    }
  }

  return (
    <StyledModalDescription>
      <StyledModalDescriptionHeader>{header}</StyledModalDescriptionHeader>
      {renderDescription(description)}
    </StyledModalDescription>
  )
}

export default ModalDescription;