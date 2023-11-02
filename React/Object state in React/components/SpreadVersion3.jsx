import { useState } from "react";



export default function FromVersionThree() {
    const [user, setUser] = useState({
        name : "munna",
        age : 43, 
        email : "mdmunna7@gmail.com"
    })

    function handleEmail(e){
        setUser({
            ...user,
            [e.target.name] :  e.target.value,
        })
    }

    function handleAge(e){
        setUser({
            ...user,
            [e.target.name] :  e.target.value,
        })
    }

    function handleName(e){
        setUser({
            ...user,
            [e.target.name] :  e.target.value,
        })
    }

  return (
    <>
      <label htmlFor="name">
        Name :
        <input name="name" type="text" value={user.name} onChange={handleName}/>
      </label>
      <br />
      <br />

      <label htmlFor="name">
        Roll :
        <input name="age" type="number" value={user.age} onChange={handleAge}/>
      </label>
      <br />
      <br />

      <label htmlFor="name">
        Email :
        <input name="email" type="email" value={user.email} onChange={handleEmail}/>
      </label>

      <p>
        {user.name}   {user.age}   {user.email}
      </p>
    </>
  );
}
