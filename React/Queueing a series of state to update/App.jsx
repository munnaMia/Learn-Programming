// Queueing a Series of State Updates
// Setting a state variable will queue another render. But sometimes you might want to perform multiple operations on the value before queueing the next render. To do this, it helps to understand how React batches state updates.

import Batchs from "./components/ReactBatchStateUpdate"


// But there is one other factor at play here. React waits until all code in the event handlers has run before processing your state updates. This is why the re-render only happens after all these setNumber() calls.
function App() {

  return (
    <>
      <Batchs/>
    </>
  )
}

export default App
