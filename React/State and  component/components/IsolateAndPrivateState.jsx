import { useState } from "react"

export default function State(){
    const [boolean, setBoolean] = useState(true);

    function handleClick(){
        setBoolean(!boolean);
    }

    return(
        <Button onSmash={handleClick} boolData={boolean}>Button {boolean ? "True" : "False"}</Button>
    )

}

function Button({children, onSmash}){
    return <button onClick={onSmash}>{children}</button>
}

