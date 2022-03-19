import React from 'react';

function Keypad() {

    function keyHandler(e) {
        console.log('Entering password...')
    }

    return (
        <input type='password' onChange={keyHandler}></input>
    )
}

export default Keypad;
