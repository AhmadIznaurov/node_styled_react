import styled from 'styled-components';
import { Tittle } from './Tittle'
import { Flex } from './Flex'
import { Console } from './Console'
import { Button } from './Button'



const Wrapper = styled.div`
  width: 100%;
  background-color: black;
  min-height: 100vh;
  padding: 1.5rem;

`


function App() {

  return (
    <Wrapper>
       <Flex justify={'center'}>
         <Tittle color={'green'}>
          Console cmd NODE.JS august 2023
         </Tittle>
       </Flex>
      <Flex direction={'column'}>
        <Console />
        <Button align={'flex-end'} outline color={'green'}>
          Send
        </Button>
      </Flex>
    </Wrapper>
  );
}

export default App;
