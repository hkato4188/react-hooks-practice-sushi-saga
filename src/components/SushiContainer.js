import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ eatenArr, eatSushi, sushiList }) {
  const [listIndex, setListIndex] = useState(0);

  const renderedSushi = sushiList
    .slice(listIndex, listIndex + 4)
    .map((sushi) => (
      <Sushi
        key={sushi.id}
        eatSushi={eatSushi}
        {...sushi}
        eatenArr={eatenArr}
      />
    ));

  function handleMoreSushiClick() {
    setListIndex((listIndex) => (listIndex + 4) % sushiList.length);
  }

  return (
    <div className="belt">
      {renderedSushi}
      <MoreButton getMoreSushi={handleMoreSushiClick} />
    </div>
  );
}

export default SushiContainer;
