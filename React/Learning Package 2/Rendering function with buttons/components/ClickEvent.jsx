export default function Click() {
  function handelClick() {
    alert("hello clicked");
  }

  return (
    <>
      <button onClick={handelClick}>click to alert1</button>

      <br />

      <button onClick={function () {alert("you clicked me!")}}>click to alert2</button> 

      <br />

      <button onClick={() => {alert("you clicked on me!")}}>click to alert3</button> 
    </>
  );
}
