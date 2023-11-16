import { useState } from "react"

export default function UsestateLearn(){
    const [index, setIndex] = useState(0);

    function handleIncre(){
        setIndex(index+1)
    }

    return(
        <Button onSmash={handleIncre}>{index}</Button>
    )
}

function Button({onSmash, children}){
    return (
        <button onClick={onSmash}>button incre {children}</button>
    )
}

