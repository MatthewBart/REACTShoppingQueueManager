import React, { useState } from 'react';

function App() {
  const [items,setItems] = useState(0);
  const [queues,setQueues] = useState([[1,4,5],[1],[2],[3],[4]]);

  function addPersonToQueue(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    let smallestItemAmount = 1e9;
    let smallestQueue: number[] | undefined = undefined;

    for(let queue of queues) {
      const totalInQueue = queue.reduce((sum, value) => sum + value, 0);
      if(totalInQueue < smallestItemAmount){
        smallestItemAmount = totalInQueue;
        smallestQueue = queue;
      }
    }

    if(!smallestQueue) return;

    setQueues((prevQueues) => 
      prevQueues.map((queue) => 
        queue === smallestQueue ?  [...queue, items] : queue));

  }

  return (
    <div className="App">
      <form onSubmit={addPersonToQueue}>
       <input 
        required
        type="number"
        value={items}
        onChange={(e) => setItems(e.currentTarget.valueAsNumber)}
       ></input>
      <button>Checkout</button>  
      </form>
    <div className = "queues">
      {queues.map((queue,idx)=>(
          <div className = "queue" key = {idx}>
            {queue.map(items => (<div>{items}</div>))}
          </div>

        ))}
    </div>
  </div>
     
  );
}

export default App;
