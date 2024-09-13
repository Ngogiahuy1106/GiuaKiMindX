import React from 'react';
import './Header.css'
function Header() {
  return <div className='HeaderContainer'>
            <div className='WebName'>Anonime</div>
            <div className='PagesContainer'>
                <div className='Pages'>Home</div>
                <div className='Pages'>List Anime</div>
            </div>
            <div className='SearchBar'>Search anime or movie</div>
        </div>;
}

export default Header;
