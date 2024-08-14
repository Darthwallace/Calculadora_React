import React from 'react';

export default function tela(props){
    return(
        <div className='cssTela'>
            <span className='cssTelaOperacao'>{props.valor}</span>
            <span className='cssTelaResultado'>{props.res}</span>
        </div>
    )
}