import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LanguageIcon from '@material-ui/icons/Language';
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
            <img className='header_icon'
            src='https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png'></img>
            </Link>
            <div className='header_center'>
                <input className='search_input' placeholder='Start your search' type='text'></input>
                <SearchIcon className='search_icon' />
            </div>

            <div className='header_right'>
            <Button variant="outlined">Become a host</Button>
                <div className='language'>
                <Button style={{borderRadius:'22px',border:'none'}} variant="outlined">
                <LanguageIcon />
                <ExpandMoreIcon />
                </Button>
                </div>
                <Button variant="outlined">
                <AccountCircleIcon />
                </Button>
            </div>

        </div>
    )
}

export default Header
