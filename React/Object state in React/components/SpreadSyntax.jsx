import { useState } from "react";



export default function From() {
    const [user, setUser] = useState({
        name : "munna",
        age : 43, 
        email : "mdmunna7@gmail.com"
    })

    function handleEmail(e){
        setUser({
            name :user.name,
            age : user.age,
            email : e.target.value
        })
    }

    function handleAge(e){
        setUser({
            name : user.name,
            age : e.target.value,
            email : user.email
        })
    }

    function handleName(e){
        setUser({
            name :  e.target.value,
            age : user.age,
            email : user.email
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
