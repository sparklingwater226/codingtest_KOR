import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import ModalDescription from './ModalDescription'
import styled, { css }  from 'styled-components';

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: min(90vh, auto);
  width: 60vw;
  top: 50%;
  margin-top: -45vh;
  left: 50%;
  margin-left: -30vw;
  background-color: black;
  overflow-y: scroll;
  border-radius: 15px;
`;

const StyledModalRow = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.75);

  ${(props) => 
    props.title && css`
      align-items: center;
      justify-content: center;
      font-size: 3rem;
      font-family: 'Frijole', sans-serif;
      color: #6e529d;
      padding-top: 1rem;
    `
  }
  ${(props) => 
    props.sub && css`
      font-size: 1.5rem;
      padding-top: 0;
      padding-bottom: 1rem;
    `
  }
  ${(props) => 
    props.desc && css`
      font-size: 1rem;
      font-family: inherit;
      padding: 0 20%;
      padding-bottom: 1rem;
      text-align: justify;
      text-justify: inter-word;
      ${'' /* border: 1px black solid */}
    `
  }
`;

export default function SimpleModal({ rowData }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const body = (
    <StyledModal>
      <StyledModalRow title>{rowData.name}</StyledModalRow>
      <StyledModalRow title sub>{`\"${rowData.tagline}\"`}</StyledModalRow>
      <StyledModalRow title desc>{rowData.description}</StyledModalRow>
      <StyledModalRow>
        <ModalDescription header={'Brewer\'s Tips'} description={rowData.brewers_tips} />
        <ModalDescription header={'Food Pairings'} description={rowData.food_pairing.join(', ')} />
      </StyledModalRow>
      <StyledModalRow>
        <ModalDescription header={'Ingredients'} description={rowData.ingredients} />
        <ModalDescription header={'Method'} description={rowData.method} />
      </StyledModalRow>
    </StyledModal>
  );

  return (
    <div>
      <div onClick={handleOpen}>{rowData.name}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
