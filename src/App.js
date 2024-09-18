import React,{useState} from "react";
import './App.css'
import Tela from './componentes/tela';
import Botao from './componentes/btn';
//import Limpar from './componentes/limparTela';

  
export default function App(){

    const [valorTela,setValorTela] = useState('');
    const [resultado,setResultado] = useState(0);
    const [acumulador,setAcumulador] = useState(0);
    const [operado,setOperacao] = useState(false);

    //FUNCOES
    const addDigitoTela=(d)=>{
      if((d === '+' || d === '-' || d === '*' || d ==='/') && operado){
        console.log('+-*/');
        setOperacao(false);
        setValorTela(resultado+d);
        return
      }
      if(operado){
        setValorTela(d)
        setOperacao(false)
        return
      }
      setResultado('');
      const valorDigitadoTela = valorTela + d
      setValorTela(valorDigitadoTela);
    }

    const limparMemoria=()=>{
      setOperacao(false)
      setValorTela('')
      setResultado(0)
      setAcumulador(0)
      return 
    }

    const Operacao= (open)=>{
      if(open === 'bs'){
        let vtela = valorTela
        vtela=vtela.substring(0,(vtela.length-1))
        setValorTela(vtela)
        setOperacao(false)
        return
      }
      try{ //calculo
        const r = eval(valorTela)
        setAcumulador(r)
        setResultado(r)
        setOperacao(true)
        setValorTela('')
      }catch{
        setValorTela('')
        setResultado('ERRO')
      }
    }

    return(
      <>
         <div className="cssContainer">
            <Tela valor={valorTela} res={resultado}/>
            <div className="cssBotoes">
              <Botao label={'C'} onclick={() => limparMemoria()}/>
              <Botao label={'('} onclick={()=>addDigitoTela('(')}/>
              <Botao label={')'} onclick={()=>addDigitoTela(')')}/>
              <Botao label={'/'} onclick={()=>addDigitoTela('/')}/>
              <Botao label={'7'} onclick={()=>addDigitoTela('7')}/>
              <Botao label={'8'} onclick={()=>addDigitoTela('8')}/>
              <Botao label={'9'} onclick={()=>addDigitoTela('9')}/>
              <Botao label={'*'} onclick={()=>addDigitoTela('*')}/>
              <Botao label={'4'} onclick={()=>addDigitoTela('4')}/>
              <Botao label={'5'} onclick={()=>addDigitoTela('5')}/>
              <Botao label={'6'} onclick={()=>addDigitoTela('6')}/>
              <Botao label={'-'} onclick={()=>addDigitoTela('-')}/>
              <Botao label={'1'} onclick={()=>addDigitoTela('1')}/>
              <Botao label={'2'} onclick={()=>addDigitoTela('2')}/>
              <Botao label={'3'} onclick={()=>addDigitoTela('3')}/>
              <Botao label={'+'} onclick={()=>addDigitoTela('+')}/>
              <Botao label={'0'} onclick={()=>addDigitoTela('0')}/>
              <Botao label={'.'} onclick={()=>addDigitoTela('.')}/>
              <Botao label={'<'} onclick={()=>Operacao('bs')}/>
              <Botao label={'='} onclick={()=>Operacao('=')}/>
            </div>
         </div>
      </>
  )
}

