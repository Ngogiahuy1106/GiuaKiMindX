import React from 'react';
import FilmList from './FilmList';
import './NR.css'
function NR() {
  return <div className='NRContainer'>
            <div className='NewRelease'>New Release</div>
            <FilmList></FilmList>

        </div>;
}

export default NR;
