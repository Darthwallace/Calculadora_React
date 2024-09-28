import React from 'react'
import Botao from './btn'
import Sound from '../assets/Power Rangers completo.mp3'
import Zuada from '../assets/Som botao.mp3'


const AddDigitoTela = ({operado,setOperacao,resultado,setResultado,valorTela,setValorTela}) =>{

  const digitoTela = (d) => {
    if((d === '+' || d === '-' || d === '*' || d ==='/') && operado){
        Som();
        console.log('+-*/');
        setOperacao(false);
        setValorTela(resultado+d);
        setResultado('');
        return 
      }
      if(operado){
        Som();
        setResultado('');
        setValorTela(d)
        setOperacao(false)
        return 
      }
      Som();
      setResultado('');
      const valorDigitadoTela = valorTela + d;
      setValorTela(valorDigitadoTela);
      }

      if(valorTela.length > 10){
        setValorTela('');
      }

      function play(){
        new Audio(Sound).play();
      }

      function Som(){
        new Audio(Zuada).play()
      }

      if(valorTela === '(123456)'){
        play();
        mostrarVideo()
      }

      function mostrarVideo(){
        var video = document.getElementById("video");
        var calc = document.getElementById("calc");
        var corpo = document.getElementById("corpo");
        setTimeout(()=>{
          calc.style.display = "none";
          video.style.display = "block";
          corpo.style.backgroundColor = "red";
        },"3000")
      }
  
      return(
        <>
          <Botao label={'('} onclick={()=> digitoTela('(')}/>
          <Botao label={')'} onclick={()=> digitoTela(')')}/>
          <Botao label={'*'} onclick={()=> digitoTela('*')}/>
          <Botao label={'7'} onclick={()=> digitoTela('7')}/>
          <Botao label={'8'} onclick={()=> digitoTela('8')}/>
          <Botao label={'9'} onclick={()=> digitoTela('9')}/>
          <Botao label={'-'} onclick={()=> digitoTela('-')}/>
          <Botao label={'4'} onclick={()=> digitoTela('4')}/>
          <Botao label={'5'} onclick={()=> digitoTela('5')}/>
          <Botao label={'6'} onclick={()=> digitoTela('6')}/>
          <Botao label={'+'} onclick={()=> digitoTela('+')}/>
          <Botao label={'1'} onclick={()=> digitoTela('1')}/>
          <Botao label={'2'} onclick={()=> digitoTela('2')}/>
          <Botao label={'3'} onclick={()=> digitoTela('3')}/>
          <Botao label={'/'} onclick={()=> digitoTela('/')}/>
          <Botao label={'0'} onclick={()=> digitoTela('0')}/>
          <Botao label={'.'} onclick={()=> digitoTela('.')}/>
        </>
      )
    };
 
export default AddDigitoTela;
