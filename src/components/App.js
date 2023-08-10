import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, setSushiList] = useState([]);
  const [eatenArr, setEatenArr] = useState([]);
  const [money, setMoney] = useState(100);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((list) => setSushiList(list));
  }, []);

  function eatSushi({ price, id }) {
    if (!eatenArr.includes(id) && money >= price) {
      setEatenArr([...eatenArr, id]);
      setMoney(() => money - price);
    }
  }

  function addMoney(e, deposit) {
    e.preventDefault();
    setMoney(() => parseInt(money) + parseInt(deposit));
  }

  return (
    <div className="app">
      <SushiContainer
        eatenArr={eatenArr}
        eatSushi={eatSushi}
        sushiList={sushiList}
      />
      <Table addMoney={addMoney} plates={eatenArr} money={money} />
    </div>
  );
}

export default App;
