import styled, { css } from 'styled-components';

const Button = styled.button`
    background-color: transparent;
    padding: 1em;
    border-radius: 5px;
    border: 1px white solid;
    font-family: 'Frijole', sans-serif;

    ${(props) => 
      props.borderless && css`
        border: none;
        font-family: inherit;
      `
    }
    ${(props) => 
      !props.borderless && css`
        :hover {
          background-color: white;
          color: #6e529d;
        }
      `
    }

    
`;

export default Button;