function Item(props){

    

    // return (
    //     // <li> Name : {props.isPacked ? props.name + "+" : props.name}</li>



    //     // <li>Name : {props.isPacked ? props.name : (
    //     //     <del>{props.name}</del>
    //     // )}</li>


    //     // <li>{props.name} {props.isPacked && 'OK'}</li>
    // )


    let name = props.name;

    if(props.isPacked){
        name = (
            <del>{name}</del>
        );
    }

    return (
        <>
            <li>{name}</li>
        </>
    )
}

export default function List_items_two(){
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