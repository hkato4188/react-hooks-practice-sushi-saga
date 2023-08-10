import React from "react";

function Sushi({ created_at, id, img_url, name, price, eatSushi, eatenArr }) {
  return (
    <div className="sushi" onClick={() => eatSushi({ price, id })}>
      <div className="plate">
        {eatenArr.includes(id) ? null : (
          <img src={img_url} alt={name} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
