import React from 'react'
import Botao from './btn'

const Operacao = ({valorTela,setValorTela,setOperacao,setAcumulador,setResultado}) => {
    
    const operacao = (open) => {
        if(open === 'bs'){
            let vtela = valorTela
            vtela=vtela.substring(0,(vtela.length-1))
            setValorTela(vtela)
            setOperacao(false)
            return
          }
          try{ 
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
              <Botao label={'<'} onclick={()=>operacao('bs')}/>
              <Botao label={'='} onclick={()=>operacao()}/>
            </>
        )
    }

    export default Operacao;
