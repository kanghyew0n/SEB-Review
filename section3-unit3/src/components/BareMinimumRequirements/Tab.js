import { useState } from "react";
import styled from "styled-components";

// TODO: Styled-Component 라이브러리를 활용해 TabMenu 와 Desc 컴포넌트의 CSS를 구현합니다.

const TabMenu = styled.ul`
  background-color: #dcdcdc;
  color: rgba(73, 73, 73, 0.5);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  margin-bottom: 7rem;
  padding: 0;

  .submenu {
    flex: 1;
    padding: 10px 0;
    text-align: center;
    cursor: pointer;
  }

  .focused {
    background-color: #4000c7;
    color: #fff;
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  text-align: center;
`;

export const Tab = () => {
  // TIP: Tab Menu 중 현재 어떤 Tab이 선택되어 있는지 확인하기 위한
  // currentTab 상태와 currentTab을 갱신하는 함수가 존재해야 하고, 초기값은 0 입니다.
  const [currentTab, setCurrentTab] = useState(0);
  const [currentDesc, setCurrentDesc] = useState("Tab menu ONE");

  const menuArr = [
    { name: "Tab1", content: "Tab menu ONE" },
    { name: "Tab2", content: "Tab menu TWO" },
    { name: "Tab3", content: "Tab menu THREE" },
  ];

  const selectMenuHandler = (index) => {
    // console.log(index.target.textContent);
    const currentIdx = menuArr.findIndex(
      (el) => el.name === index.target.textContent
    );
    //console.log(currentIdx);
    setCurrentTab(currentIdx);
    setCurrentDesc(menuArr[currentIdx].content);
    console.log(currentTab);
  };

  return (
    <>
      <div>
        <TabMenu>
          {menuArr.map((el, idx) => (
            <li
              className={`submenu ${idx === currentTab ? "focused" : ""}`}
              key={idx}
              onClick={selectMenuHandler}
            >
              {el.name}
            </li>
          ))}
        </TabMenu>
        <Desc>
          {/*TODO: 아래 하드코딩된 내용 대신에, 현재 선택된 메뉴 따른 content를 표시하세요*/}
          <p>{currentDesc}</p>
        </Desc>
      </div>
    </>
  );
};
