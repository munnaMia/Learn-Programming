function Button({children, onclick}){
    return (
        <button onClick={onclick}>
            {children}
        </button>
    )
}


function PlayMovie({massage}){
    function handleMovie(){
        alert(massage)
    }
    return(
        <Button onclick={handleMovie}>Play movie</Button>
    )
}


function UploadImage(){
    return (
        <Button onclick={() => alert("uploading iamge")}>Upload image</Button>
    )
}




export default function EventHandlersAsProps(){
    return(
        <>
            <PlayMovie massage="playing movie somthing"/>
            <UploadImage/>
        </>
    )
}