import { useState } from "react";

export default function From() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing"); // 'typing', 'submitting', or 'success'

  if (status === "success") {
    return <h1>Thats great</h1>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting')
    try {
      await formSubmit(answer)
      setStatus("success")
    }catch(err){
      setStatus('typing')
      setError(err)
    }

  }

  function handleTextAreaChange(e) {
    setAnswer(e.target.value)
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>

      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextAreaChange}
          disabled={status === "submitting"}
        ></textarea>

        <br />

        <button disabled={status === "submitting" || answer.length === 0}>
          Submit
        </button>

        <br />

        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
      </form>
    </>
  );
}


function formSubmit(answer){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let condition = answer.toLowerCase() !== 'munna'
      if(condition){
        reject(new Error('Good guess but a wrong answer. Try again!'));
      }else{
        resolve()
      }
    }, 3000);
  })
}