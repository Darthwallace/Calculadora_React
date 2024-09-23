import React from 'react';

export default function btn(props){
    return(
        <button className='cssBtn' onClick={props.onclick}>{props.label}</button>
    )
}