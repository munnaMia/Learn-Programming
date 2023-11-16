//npm i use-immer to install immer
// Write concise update logic with Immer
// If your state is deeply nested, you might want to consider flattening it. But, if you don’t want to change your state structure, you might prefer a shortcut to nested spreads. Immer is a popular library that lets you write using the convenient but mutating syntax and takes care of producing the copies for you. With Immer, the code you write looks like you are “breaking the rules” and mutating an object:

import { useImmer } from "use-immer";

export default function Immer() {
  const [person, setPerson] = useImmer({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
    },
  });


  function handleNameChange(e){
    setPerson(draft => {
        draft.name = e.target.value
    })
  }

  function handleTitleChange(e){
    setPerson(draft => {
        draft.artwork.title = e.target.value
    })
  }

  return (
    <>
      <label>
        Name:
        <input value={person.name} onChange={handleNameChange} />
      </label>
      <label>
        Title:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>


      <p>{person.name} and {person.artwork.title}</p>
    </>
  );
}
