import { useState } from "react"

export default function Batchs(){
    //by not replace the value just do something with then like
    const [number, setNumber] = useState(0);
    return(
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(n => n+1);
                setNumber(n => n+1);
                setNumber(n => n+1);
                setNumber(n => n+1);

                alert(number)
            }}>click to +4</button>


            <button onClick={() => {
                setNumber(number+5);
                setNumber(n => n+2)
            }}>Random task</button>


            <button onClick={() => {
              setNumber(number + 5);
              setNumber(n => n + 1);
              setNumber(42);
            }}>click</button>
        </>
    )
}

// Here’s how React works through these lines of code while executing the event handler:

// setNumber(n => n + 1): n => n + 1 is a function. React adds it to a queue.
// setNumber(n => n + 1): n => n + 1 is a function. React adds it to a queue.
// setNumber(n => n + 1): n => n + 1 is a function. React adds it to a queue.
// When you call useState during the next render, React goes through the queue. The previous number state was 0, so that’s what React passes to the first updater function as the n argument. Then React takes the return value of your previous updater function and passes it to the next updater as n, and so on:

// queued update	n	returns
// n => n + 1	0	0 + 1 = 1
// n => n + 1	1	1 + 1 = 2
// n => n + 1	2	2 + 1 = 3
// React stores 3 as the final result and returns it from useState.

// This is why clicking “+3” in the above example correctly increments the value by 3.

