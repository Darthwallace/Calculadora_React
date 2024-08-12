import React,{useState} from "react";
import './App.css'
  
export default function App(){

    const [valorTela,setValorTela] = useState('');
    const [resultado,setResultado] = useState(0);
    const [acumulador,setAcumulador] = useState(0);
    const [operado,setOperacao] = useState(false);

    //COMPONENTES
    const tela=(valor,res)=>{
       return(
        <div className="cssTela">
            <span className="cssTelaOperacao">{valor}</span>
            <span className="cssTelaResultado">{res}</span>
        </div>
       )
    }

    const Btn=(label,onClick)=>{
      return(
        <button className="cssBtn" onClick={onClick}>{label}</button>
      )
    }

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
        const r =eval(valorTela)
        setAcumulador(r)
        setResultado(r)
        setOperacao(true)
      }catch{
        setResultado('ERRO')
      }
    }

    return(
      <>
         <div className="cssContainer">
            <h3 style={{textAlign:'center'}}>Calculadora Matematica Simples</h3>
            {tela(valorTela,resultado)}
            <div className="cssBotoes">
              {Btn('AC', limparMemoria)}
              {Btn('(', ()=>addDigitoTela('('))}
              {Btn(')', ()=>addDigitoTela(')'))}
              {Btn('/', ()=>addDigitoTela('/'))}
              {Btn('7', ()=>addDigitoTela('7'))}
              {Btn('8', ()=>addDigitoTela('8'))}
              {Btn('9', ()=>addDigitoTela('9'))}
              {Btn('*', ()=>addDigitoTela('*'))}
              {Btn('4', ()=>addDigitoTela('4'))}
              {Btn('5', ()=>addDigitoTela('5'))}
              {Btn('6', ()=>addDigitoTela('6'))}
              {Btn('-', ()=>addDigitoTela('-'))}
              {Btn('1', ()=>addDigitoTela('1'))}
              {Btn('2', ()=>addDigitoTela('2'))}
              {Btn('3', ()=>addDigitoTela('3'))}
              {Btn('+', ()=>addDigitoTela('+'))}
              {Btn('0', ()=>addDigitoTela('0'))}
              {Btn('.', ()=>addDigitoTela('.'))}
              {Btn('<-', ()=>Operacao('bs'))}
              {Btn('=', ()=>Operacao('='))}
            </div>
         </div>
      </>
  )
}

