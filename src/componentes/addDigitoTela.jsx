import {useState} from 'react'

export default function AddDigitoTela(d){

    const [valorTela,setValorTela] = useState('');
    const [resultado,setResultado] = useState(0);
    const [acumulador,setAcumulador] = useState(0);
    const [operado,setOperacao] = useState(false);

    if((d === '+' || d === '-' || d === '*' || d ==='/') && operado){
        console.log('+-*/');
        setOperacao(false);
        setValorTela(resultado+d);
        return 
      }
      if(operado){
        setValorTela(d)
        {setOperacao(false)
        return 
      }
      const valorDigitadoTela = valorTela + d
      setValorTela(valorDigitadoTela);
  
      }
    }
