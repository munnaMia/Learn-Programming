import { useState } from "react";


const intialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function List() {
  const [myList, setMyList] = useState(intialList); //containing my list
  const [yourList, setYourList] = useState(intialList);

  function handleToggleMylist(artworkId, seenArtwork) {
    setMyList(myList.map(artwork => {
        if(artwork.id === artworkId){
            return {...artwork, seen: seenArtwork}
        }else{
            return artwork
        }
    }))
  }

  function handleToggleYourList(artworkId, seenArtwork) {
    setYourList(yourList.map(artwork => {
        if(artwork.id === artworkId){
            return {...artwork, seen: seenArtwork}
        }else{
            return artwork
        }
    }))
  }
  return (
    <>
      <h1>List of items</h1>
      <ItemList artworks={myList} onToggle={handleToggleMylist} />
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
    return (
      <ul>
        {artworks.map(artwork => (
          <li key={artwork.id}>
            <label>
              <input
                type="checkbox"
                checked={artwork.seen}
                onChange={e => {
                  onToggle(
                    artwork.id,
                    e.target.checked
                  );
                }}
              />
              {artwork.title}
            </label>
          </li>
        ))}
      </ul>
    );
  }
  