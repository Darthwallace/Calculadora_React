import React,{useState} from "react";
import './App.css'
import Tela from './componentes/tela';
import Limpar from './componentes/limparTela';
import Operacao from './componentes/operacao';
import AddDigitoTela from "./componentes/addDigitoTela";


const App =() =>{

    const [valorTela,setValorTela] = useState('');
    const [resultado,setResultado] = useState(0);
    const [acumulador,setAcumulador] = useState(0);
    const [operado,setOperacao] = useState(false);

    return(
      <>
         <div className="cssContainer">
            <Tela valor={valorTela} res={resultado}/>
            <div className="cssBotoes">
              <Limpar setOperacao={setOperacao} setValorTela={setValorTela} setResultado={setResultado} setAcumulador={setAcumulador}/> 
              <AddDigitoTela operado={operado} setOperacao={setOperacao} resultado={resultado} setResultado={setResultado} valorTela={valorTela} setValorTela={setValorTela}/>
              <Operacao valorTela={valorTela} setValorTela={setValorTela} setOperacao={setOperacao} setAcumulador={setAcumulador} setResultado={setResultado}/>
            </div>
         </div>
      </>
  )
}

export default App;

