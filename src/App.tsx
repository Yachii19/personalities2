import { useState } from 'react';
import { hollywoodArtistList } from './data.tsx';
import './App.css'

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < hollywoodArtistList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleBackClick() {
    if (index == 0) {
      setIndex(hollywoodArtistList.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = hollywoodArtistList[index];
  return (
    <>
      <div className='main-container'>
        <div className='name'>
          John Rein Vinuya
        </div>
        <div className='button-container'>
          <button onClick={handleBackClick} className='next-button'>
            Back
          </button>
          <button onClick={handleNextClick} className='back-button'>
            Next
          </button>
        </div>
        
        <h2 className='artist-name'>
          <i >{sculpture.name} </i>
        </h2>
        <h3 className='index-count'>
          ({index + 1} of {hollywoodArtistList.length})
        </h3>
        <div>
          <button onClick={handleMoreClick} className='details-button'>
            {showMore ? 'Hide' : 'Show'} details
          </button>
        </div>
        
        {showMore && <p>{sculpture.description}</p>}
        <img
          src={sculpture.url}
          alt={sculpture.alt}
        />
      </div>

    </>
  );
}

