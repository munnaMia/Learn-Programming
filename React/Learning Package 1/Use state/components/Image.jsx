import { useState } from 'react'
import {sculptureList} from './Data.jsx'

export default function Image() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const hasNext = index < sculptureList.length -1;



    let sculpture = sculptureList[index]; //store current index data here.



    function handleNextClick (){
        if(hasNext){
            setIndex(index + 1);
        }else{
            setIndex(0);
        }
    }

    function handelMoreClick(){
        setShowMore(!showMore);
    }

    return(
        <>
            <button onClick={handleNextClick}>
                Next
            </button>

            <h2>
                <i>{sculpture.name}</i> by {sculpture.artist    }
            </h2>

            <h3>
                {index +1} of {sculptureList.length}
            </h3>

            <button onClick={handelMoreClick}>
                {showMore ? 'Hide' : 'Show'} Details
            </button>

            <img src={sculpture.url} alt={sculpture.alt} />
        </>
    )
}
