import { useState } from "react";



export default function FromVersionTwo() {
    const [user, setUser] = useState({
        name : "munna",
        age : 43, 
        email : "mdmunna7@gmail.com"
    })

    function handleEmail(e){
        setUser({
            ...user,
            email : e.target.value
        })
    }

    function handleAge(e){
        setUser({
            ...user,
            age : e.target.value,
        })
    }

    function handleName(e){
        setUser({
            ...user,
            name :  e.target.value,
        })
    }

  return (
    <>
      <label htmlFor="name">
        Name :
        <input type="text" value={user.name} onChange={handleName}/>
      </label>
      <br />
      <br />

      <label htmlFor="name">
        Roll :
        <input type="number" value={user.age} onChange={handleAge}/>
      </label>
      <br />
      <br />

      <label htmlFor="name">
        Email :
        <input type="email" value={user.email} onChange={handleEmail}/>
      </label>

      <p>
        {user.name}   {user.age}   {user.email}
      </p>
    </>
  );
}
