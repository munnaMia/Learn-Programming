import { useState } from "react";

let nextId = 3;
const initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

export default function Insert() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(initialArtists);

  function handleClick(){
    // setArtists([
    //     {id: nextId++, name: name},
    //     ...artists
    // ])

    //Now we will see how to use slice method in js
    let insertPosition = 1;

    setArtists([
        ...artists.slice(0, insertPosition),
        {id: nextId++, name: name},
        ...artists.slice(insertPosition)
    ])

  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleClick}>
        Insert
      </button>

      <ul>{artists.map(artist=>(
        <li key={artist.id}>{artist.name}</li>
      ))}</ul>
    </>
  )
}
