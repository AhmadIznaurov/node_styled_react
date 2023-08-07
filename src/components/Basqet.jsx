import React from 'react'
import styled from 'styled-components'

const StyledBasqet = styled.div`
  background-color: black;
  color: ${({color}) => color || 'white'};
  resize: none;
  &:focus {
    outline: none;
  }
  border: none;
  font-size: 22px;
  margin: 0 70px;
  width: 100%;
`



export const Basqet = ({ value }) => {
  return (
    <StyledBasqet>
      {value.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </StyledBasqet>
  );
}

