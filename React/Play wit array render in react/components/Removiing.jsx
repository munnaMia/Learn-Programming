import { useState } from "react";

const alreadyArtist = [
  { id: 0, name: "mdmunna mia" },
  { id: 1, name: "hello" },
  { id: 2, name: "ok no mia" },
  { id: 3, name: "its ok mia" },
];

export default function Remove() {
  const [array, setArray] = useState(alreadyArtist);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {array.map((artist) => (
          <li key={artist.id}>
            {artist.name} 
            <button onClick={()=>{
                setArray(
                    array.filter(ele => ele.id !== artist.id )
                )
            }}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}


// Here, artists.filter(a => a.id !== artist.id) means “create an array that consists of those artists whose IDs are different from artist.id”. In other words, each artist’s “Delete” button will filter that artist out of the array, and then request a re-render with the resulting array. Note that filter does not modify the original array.