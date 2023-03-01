import React, { useState } from 'react';

function App() {
  const [items,setItems] = useState(0);

  return (
    <div className="App">
      <form>
       <input 
        required
        type="number"
        value={items}
        onChange={(e) => setItems(e.currentTarget.valueAsNumber)}
       ></input>
      <button>Checkout</button>  
      </form>
    </div>
  );
}

export default App;
