export default function EventPropagation(){
    return(
      <>
            <EventPropagationProblem/>
            <EventPropagationSolution/>
      </>
    )
}


//problem here of event propagation
function EventPropagationProblem(){
    return(
        <div onClick={() => {alert("click on div")}} style={{
            margin : "10px",
            width : "100%",
            backgroundColor : "gray",
            height : "100px",
            padding : "20px"
        }}>
            <h1>EventPropagationProblem</h1>
            <button onClick={() => alert("button one click")}>button one EP</button>
            <button onClick={() => alert("button two click")}>button two EP</button>
        </div>
    )
}

//solution of event propagation
function EventPropagationSolution(){
    return(
        <div onClick={(e) => {alert("click on div")}} style={{
            width : "100%",
            margin : "10px",
            backgroundColor : "gray",
            height : "100px",
            padding : "20px"
        }}>
            <h1>EventPropagationSolution</h1>
            <button onClick={(e) => {
                e.stopPropagation();
                alert("button one click")

            }}>button one EP</button>
            <button onClick={(e) => {
                e.stopPropagation();
                alert("button two click")

            }}>button two EP</button>
        </div>
    )
}
