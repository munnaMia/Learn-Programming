function Item(props){
    if(props.isPacked){
        // return (
        //     <>
        //         <li>Name : {props.name} OK</li>
        //     </>
        // )

        return null
    }
    return (
        <li> Name : {props.name}</li>
    )
}

export default function List_items(){
    return (
        <>
             <ul>
                <Item name="abc" isPacked = {true}/>
                <Item name="awerbc" isPacked = {true}/>
                <Item name="dsa" isPacked = {true}/>
                <Item name="aasbc" isPacked = {false}/>
                <Item name="abxcc" isPacked = {true}/>
                <Item name="aberc" isPacked = {false}/>
             </ul>
        </>
    )
}