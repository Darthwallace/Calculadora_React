import React from 'react'
import Botao from './btn'

const LimparTela = ({setOperacao,setValorTela,setResultado,setAcumulador}) => {
    
  const memoriaLimpa = () => {
      setOperacao(false);
      setValorTela('');
      setResultado(0);
      setAcumulador(0);
    }
      
    return(
      <Botao label={'C'} onclick={memoriaLimpa}/>
    );
};

export default LimparTela;