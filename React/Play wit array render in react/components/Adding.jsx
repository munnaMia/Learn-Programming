import { useState } from "react";


let indx = 0;
export default function Adding(){
    const [name, setName] = useState('');
    const [artist, setArtist] = useState([]);
    

    return(
        <>
            <label htmlFor="name">
                Name : <input value={name} onChange={e => setName(e.target.value)}/>
            </label>

            <button onClick={() => {
                setArtist([
                    {name: name, id: indx++},
                    ...artist
                ])
            }}>ADD</button>


            <ul>
                {
                       artist.map(ele => (
                        <li key={ele.id}>Name {ele.name} and id is {ele.id}</li>
                    ))
                }
            </ul>
        </>
    )
}