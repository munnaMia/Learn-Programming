import { useState } from "react";

let initialCounters = [0, 0, 0];

export default function Replace() {
  const [counters, setCounters] = useState(initialCounters);

  function handleClick(index){
    let nextUpdate = counters.map((ele, indexC) => {
        if(indexC === index){
            return ele+1
        }else{
            return ele
        }
    })
    setCounters(nextUpdate)
  }

  return (
    <>
      <ul>
        {counters.map((counter, i) => (
          <li key={i}>
            {counter} <button onClick={() => {
                handleClick(i)
            }}>+1</button>
          </li>
        ))}
      </ul>
    </>
  );
}
