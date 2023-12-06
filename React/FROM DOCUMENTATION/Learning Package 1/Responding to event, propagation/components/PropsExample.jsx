export default function PropsExample(){
    return(
        <>
            <AlertButton massage = "aleart one">button num one</AlertButton>
            <AlertButton massage = "aleart two">button num two</AlertButton>
            <AlertButton massage = "aleart three">button num three</AlertButton>
        </>
    )
}

function AlertButton({children, massage}){
    return(
        <>
            <button onClick={() => alert(massage)}>
                {children}
            </button>
        </>
    )
}


