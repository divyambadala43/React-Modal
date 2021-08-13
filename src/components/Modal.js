import React from "react";
import styled from "styled-components";

function Modal({ showModal, setShowModal }) {
  return <>{showModal ? <div>Open Modal</div> : null}</>;
}

export default Modal;
