import styled from 'styled-components';
import { Tittle } from './Tittle'
import { Flex } from './Flex'
import { Console } from './Console'
import { Button } from './Button'
import React, { useState } from 'react';
import { Basqet } from './Basqet'


const Wrapper = styled.div`
  width: 100%;
  background-color: black;
  min-height: 100vh;
  padding: 1.5rem;
`



function App() {
  const [inputText, setInputText] = useState('');
  const [textList, setTextList] = useState([]);

  function handleInputChange(event) {
    setInputText(event.target.value);
    console.log(event.target.value)
  }

  function handleSendClick() {
    setTextList(value => [...value, inputText]);
    setInputText('');
  }

  return (
    <Wrapper>
      <Flex justify={'center'}>
        <Tittle color={'green'}>Console cmd NODE.JS august 2023</Tittle>
      </Flex>
      <Flex direction={'column'}>
        <Console value={inputText} onChange={handleInputChange} />
        <Button align={'flex-end'} outline color={'green'} onClick={handleSendClick}>
          Send
        </Button>
      </Flex>
      <Flex>
        <Basqet value={textList} />
      </Flex>
    </Wrapper>
  );
}

export default App;