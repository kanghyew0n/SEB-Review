import React from "react";
import Item from "../components/Item";

function ItemListContainer({ items, setCartItems, cartItems }) {
  const handleClick = (e, itemIdx) => {
    //새로운 카트 추가
    const newCartItem = {
      itemId: itemIdx,
      quantity: 1,
    };

    //중복 아이템 확인
    const findId = cartItems.findIndex((item) => item.itemId === itemIdx);
    if (findId === -1) {
      setCartItems([...cartItems, newCartItem]);
    } else {
      // 수량 증가
      cartItems[findId].quantity++;
    }
  };
  return (
    <div id="item-list-container">
      <div id="item-list-body">
        <div id="item-list-title">쓸모없는 선물 모음</div>
        {items.map((item, idx) => (
          <Item item={item} key={idx} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
