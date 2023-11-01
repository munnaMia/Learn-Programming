import { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const [numberl, setNumberl] = useState(0);

  return (
    <>
      you will expect +4
      <pre>
        Here is what this button’s click handler tells React to do:
        <br />
        <br />
        setNumber(number + 1): number is 0 so setNumber(0 + 1). React prepares
        to change number to 1 on the next render.
        <br />
        <br />
        setNumber(number + 1): number is 0 so setNumber(0 + 1). React prepares
        to change number to 1 on the next render.
        <br />
        <br />
        setNumber(number + 1): number is 0 so setNumber(0 + 1). React prepares
        to change number to 1 on the next render.
        <br />
        <br />
        Even though you called setNumber(number + 1) three times, in this
        render’s event handler number is always 0,
        <br />
        so you set the state to 1 three times. This is why, after your event
        handler finishes, React re-renders the
        <br />
        component with number equal to 1 rather than 3.
      </pre>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount(count + 1);
          setCount(count + 1);
          setCount(count + 1);
        }}
      >
        click to +4
      </button>



      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5);
          alert(number);
        }}
      >
        click to update
      </button>





      <h1>{numberl}</h1>
      <button
        onClick={() => {
          setNumberl(numberl + 5);
          setTimeout(() => {
            alert(numberl)
          }, 2000);
        }}
      >
        click to update numberL
      </button>
    </>
  );
}
