import React from 'react'
import styled from 'styled-components';

const StyledTittle = styled.h1`
   color: ${props  => props.color}
`

export const Tittle  = (props) => {
  return <StyledTittle {...props} />

}

