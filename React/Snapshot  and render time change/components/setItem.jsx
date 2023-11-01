import { useState } from "react";

export default function From() {
  const [isSent, setSent] = useState(false);
  const [massage, setMassage] = useState("hi");

  if(isSent){
      return <h1>Your massage is on the way</h1>
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
          sendMassage(massage)
        }}
      >

        
        <textarea
          placeholder="Write your massage"
          value={massage}
          onChange={(e) => setMassage(e.target.value)}
        ></textarea>



        <button type="submit">Submit</button>



        {/* here what happen that button type is submit so when we click the button it submit and call onSubmit that work normally like other function  */}
      </form>
    </>
  );
}

function sendMassage(massage){
//     setMassage(massage)
}
