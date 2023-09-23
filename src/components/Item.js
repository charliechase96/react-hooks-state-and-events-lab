import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);
  
  function addOrRemove() {
    setInCart((inCart) => !inCart)
  }

  const itemClass = inCart ? "in-cart" : ""
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addOrRemove}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
