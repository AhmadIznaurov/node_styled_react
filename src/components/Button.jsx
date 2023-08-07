import React from 'react';
import styled, {css} from 'styled-components'

const StyledButton = styled.button`
  border: none;
  padding: 10px 40px;
  font-size: 18px;
  &:focus {
    outline: none;
  }
  align-self: ${props => props.align || 'stretch'};
  
  ${props => props.primary && css`
  color: ${props => props.color || 'white'};
  background: ${props => props.background || 'white'};
  `};

  ${props => props.outline && css`
  color: ${props => props.color || 'white'};
  background: transparent;
  border: 1px solid ${props => props.color || 'white'};  
  font-weight: bold;  
  `};
  
`


export const Button = (props) => {
  return <StyledButton  {...props}/>
}

