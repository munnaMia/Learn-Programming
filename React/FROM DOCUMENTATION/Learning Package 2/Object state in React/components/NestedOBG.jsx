import { useState } from "react";

export default function NestedObj(){
    const [person, setPerson] = useState({
        name: 'Niki de Saint Phalle',
        artwork: {
          title: 'Blue Nana',
          city: 'Hamburg',
          image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
      });

      const cityUpdate = {...person.artwork, city: 'Cumilla'}
      const dataUpdate = {...person, artwork:cityUpdate}
      setPerson(dataUpdate)


      setPerson({
        ...person, // Copy other fields
        artwork: { // but replace the artwork
          ...person.artwork, // with the same one
          city: 'New Delhi' // but in New Delhi!
        }
      });


    //   i can also do that 
    // ====================== 
    //   setPerson(draft => {
    //     draft.artwork.city = 'Lagos';
    //   });
}