import styled from 'styled-components';
import { Tittle } from './Tittle'
import { Flex } from './Flex'
import { Console } from './Console'
import { Button } from './Button'
import React, { useState } from 'react';
import { Basqet } from './Basqet'
import ReactLoading from 'react-loading';

const Wrapper = styled.div`
  width: 100%;
  background-color: black;
  min-height: 100vh;
  padding: 1.5rem;
`

const WrapLoader = styled.div`
margin: -350px auto;
`

const ImgStyled = styled.div`
  display: flex;
  justify-content: end;
  margin-top: -15px;
`


const App = () => {
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [textList, setTextList] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    console.log(event.target.value)
  };

  const handleSendClick = () => {
    setLoading(true);


    setTimeout(() => {
      setLoading(false);
      setTextList((TextList) => [...TextList, inputText]);
      setInputText("");
    }, 1000);
  };

  const Preloader = () => {
    return (
      <WrapLoader>
        <ReactLoading type={"spinningBubbles"} color={"purple"} height={200} width={200} />
      </WrapLoader>
    )
  }

  return (
    <Wrapper>
      <Flex>
        <WrapLoader  />
      </Flex>
      <Flex justify={"center"}>
        <Tittle color={"green"}>Console cmd NODE.JS august 2023
        </Tittle>
        <ImgStyled>
          <img src="https://www.mervcodes.com/wp-content/uploads/2017/12/nodejslogo.png" alt="node" width={170} height={100}/>
        </ImgStyled>
      </Flex>
      <Flex direction={"column"}>
        <Console value={inputText} onChange={handleInputChange} />
        <Button align={"flex-end"} outline color={"green"} onClick={handleSendClick}>
          Send
        </Button>
      </Flex>
      <Flex>
        {loading ? (
          <Preloader />
        ) : (
          <Basqet value={textList} />
        )}
      </Flex>
    </Wrapper>
  );
};

export default App;