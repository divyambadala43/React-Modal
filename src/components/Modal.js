import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const ModalWrapper = styled.div`
  position: absolute;
  background: #2363eb;
  height: 65vh;
  width: 90%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ImageWrapper = styled.div``;
const ImageContent = styled.h1`
  font-size: 18px;
  position: absolute;
  text-align: center;
  color: #fff;
  margin-top:75px;
`;
const ModalImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 0 0;
`;
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    text-align: center;
    padding: 20px 0px;
    margin-top: 45px;
  }
`;

const JoinButton = styled.button`
  width: 100px;
  padding: 10px 8px;
  border-radius: 6px;
  border: none;
  background: #141414;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  margin-top: 6px;
`;

const CloseButton = styled(MdClose)`
  position: absolute;
  left: 300px;
  top: -10px;
  height: 36px;
  width: 36px;
  background: #141414;
  color: #fff;
  border-radius: 50%;
`;

function Modal({ showModal, setShowModal }) {
  return (
    <>
      {showModal ? (
        <ModalWrapper>
          <CloseButton />
          <ImageWrapper>
            <ImageContent>
              <h1>Life is all about how we live it</h1>
            </ImageContent>
            <ModalImage src='https://images.unsplash.com/photo-1553532434-5ab5b6b84993?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80' />
          </ImageWrapper>
          <ModalContent>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
              odio?
            </p>
            <JoinButton>Join Now</JoinButton>
          </ModalContent>
        </ModalWrapper>
      ) : null}
    </>
  );
}

export default Modal;
