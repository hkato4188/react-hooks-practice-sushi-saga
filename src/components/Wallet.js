import React, { useState } from "react";

function Wallet({ addMoney }) {
  const [deposit, setDeposit] = useState(50);

  return (
    <div>
      <form onSubmit={(e) => addMoney(e, deposit)}>
        <label htmlFor="wallet">Add 💵: </label>
        <input
          value={deposit}
          onChange={(e) => setDeposit(e.target.value)}
          name="wallet"
          type="number"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Wallet;
