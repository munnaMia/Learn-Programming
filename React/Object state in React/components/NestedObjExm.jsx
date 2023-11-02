import { useState } from "react";

export default function UserProfile() {
  const [profile, setProfile] = useState({
    name: "Md Munna Mia",
    artwork: {
      country: "Bangladeshi",
    },
  });

  function handleName(e){
    setProfile({
        ...profile,
        [e.target.name]: e.target.value
    });
  }


  function handleCountry(e){
    setProfile({
        ...profile,
        artwork : {
            ...profile.artwork,
            country : e.target.value
        }
    })
  }

  return(
    <>
        <label>
            Name :
            <input type="text" name="name" value={profile.name} onChange={handleName} />
        </label>

        <label>
            Country :
            <input type="text" value={profile.artwork.country} onChange={handleCountry}/>
        </label>


        <p>
            {profile.name} and {profile.artwork.country}
        </p>
    </>
  )
}
