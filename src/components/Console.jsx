import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex } from './Flex'
import { Line } from './Line'

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background-color: black;
  color: ${({color}) => color || 'white'};
  resize: none;
  &:focus {
    outline: none;
  }
  border: none;
  font-size: 22px;
  margin: 0 10px;
`


export const Console = (props) => {
  const [lines, setLines] = useState(['C/USERS/NODECODE>'])

  const setPressKey = (event) => {
    if(event.charCode === 13) {
      setLines([...lines, 'C/USERS/NODECODE>'])
    }
  }

  return (
    <Flex>
      <Flex direction={'column'}>
        {
          lines.map((line) => {
            return <Line>{line}</Line>
          })
        }
      </Flex>
      <StyledConsole onKeyPress={setPressKey} {...props}/>
    </Flex>
  )
}

// styled
