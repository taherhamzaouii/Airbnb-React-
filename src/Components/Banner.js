import React, {useState} from 'react'
import './Banner.css'
import { Button } from '@material-ui/core';
import Search from './Search'
function Banner() {
    const [showSearch, SetShowSearch] = useState(false);

    return (
        <div className='banner'>
                <div className='banner_search'>
                    {showSearch && <Search />}
                    <Button onClick={() => SetShowSearch(!showSearch)} className='banner_searchButton' >{showSearch ? "Hide" : "Search Dates"}</Button>
                </div>
                <div className='banner_info'>
                    <h1>Get out and stretch your imagination</h1>
                    <h5>
                        Plan a different kind of getaway to uncover the hidden gems near you.
                    </h5>
                    <Button variant='outlined'>Explore Nearby
                    </Button>                
                </div>
        </div>
    )
}

export default Banner
