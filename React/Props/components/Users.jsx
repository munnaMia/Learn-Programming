import UserProfile from "./UserProfile";

export default function Users(){
    return(
        <>
            <UserProfile age={23} name = {"munna"}/>
            <UserProfile age={24} name = {"sharif"}/>
            <UserProfile age={25} name = {"tarif"}/>
            <UserProfile age={23} name = {"anas"}/>
            <UserProfile age={45} name = {"asif"}/>
        </>
    )
}