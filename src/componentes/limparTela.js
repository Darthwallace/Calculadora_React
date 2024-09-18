import React,{useState} from 'react';


export default function LimparTela(props){
  
      const [valorTela,setValorTela] = useState('');
      const [resultado,setResultado] = useState(0);
      const [acumulador,setAcumulador] = useState(0);
      const [operado,setOperacao] = useState(false);
      return(
        <>
            {props.setOperacao}
            {props.setValorTela}
            {props.setResultado}
            {props.setAcumulador}
        </>
      )
      setOperacao(false)
      setValorTela('')
      setResultado(0)
      setAcumulador(0)
}