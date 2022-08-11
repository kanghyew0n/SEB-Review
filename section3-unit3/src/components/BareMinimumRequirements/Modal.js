import { useState } from "react";
import styled from "styled-components";

export const ModalContainer = styled.div`
  // TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const ModalBackdrop = styled.div`
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBtn = styled.button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
  z-index: 100;
`;

export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: "dialog",
}))`
  background-color: #fff;
  width: 300px;
  height: 150px;
  z-index: 100;
  border-radius: 10px;
  text-align: center;

  span {
    cursor: pointer;
    display: inline-block;
    margin-top: 20px;
    font-weight: 600;
  }

  .title {
    font-size: 24px;
    font-weight: 600;
    color: #0907d0;
  }
`;

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    // TODO : isOpen의 상태를 변경하는 메소드를 구현합니다.
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}>
          {isOpen ? "Opened!" : "Open Modal"}
        </ModalBtn>

        {isOpen ? (
          <ModalBackdrop onClick={openModalHandler}>
            <ModalView onClick={(e) => e.stopPropagation()}>
              <span onClick={openModalHandler}>X</span>
              <p className="title">세젤귀 꼬미 </p>
            </ModalView>
          </ModalBackdrop>
        ) : (
          ""
        )}
      </ModalContainer>
    </>
  );
};
