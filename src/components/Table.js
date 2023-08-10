import React from "react";
import Wallet from "./Wallet";

function Table({ addMoney, money, plates = [] }) {
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">You have: ${money} remaining!</h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
      <Wallet addMoney={addMoney} />
    </>
  );
}

export default Table;
