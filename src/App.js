import React, { useState } from 'react';
import { Container } from "postcss";
import styled from "styled-components";
import Modal from "./components/Modal"
import { GlobalStyles } from './globalStyles';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`



function App() {
  const [showModal, setShowModal] = useState(false)
  
  const showModalHandler = () => {
    setShowModal(!showModal)
  }

  return (
    <Wrapper>
      <GlobalStyles />
      <Button onClick={showModalHandler}>Open Modal</Button>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </Wrapper>
  );
}

export default App;
