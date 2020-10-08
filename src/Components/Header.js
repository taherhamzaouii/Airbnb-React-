import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LanguageIcon from '@material-ui/icons/Language';

function Header() {
    return (
        <div className='header'>
            <img className='header_icon'
            src='https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png'></img>
            <div className='header_center'>
                <input className='search_input' placeholder='Start your search' type='text'></input>
                <SearchIcon className='search_icon' />
            </div>

            <div className='header_right'>
                <p>Become a host</p>
                <div className='language'>
                <LanguageIcon />
                <ExpandMoreIcon />
                </div>
                <AccountCircleIcon />
            </div>

        </div>
    )
}

export default Header
