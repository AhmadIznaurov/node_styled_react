import React from 'react'
import styled from 'styled-components'

const StyledBasqet = styled.div`
  background-color: black;
  color: ${({ color }) => color || 'white'};
  resize: none;

  &:focus {
    outline: none;
  }

  border: none;
  font-size: 22px;
  margin: 30px 70px;
  width: 88%;
  height: 40vh;
  display: block;
  word-wrap: break-word;
  border: 1px solid green;

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

