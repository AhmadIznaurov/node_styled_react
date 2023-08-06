import React from 'react';
import styled from 'styled-components'

const LifeStyle = styled.div`
font-size: 22px;
  color: ${({color}) => color || 'white'}
`

export const Line = (props) => {
  return <LifeStyle {...props} />
}

