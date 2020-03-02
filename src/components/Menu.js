import React from 'react';
import InputBar from './InputBar';

const Menu = props => {
    return(
        <div className='ui secondary menu'>
            <a className='item active'>
                Home
            </a>
            <a className='item'>
                My List
            </a>
            <a className='item'>
                My Friends
            </a>
                <InputBar onTermSubmit={props.onTermSubmit}/>
            <div className='right menu'>
                <a className='ui item'>
                    Sign up
                </a>
                <a className='ui item'>
                    Logout
                </a>
            </div>
        </div>
    )
}

export default Menu