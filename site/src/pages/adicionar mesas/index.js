import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { adicionaReserva, alterarReserva} from '../../api/reservaApi';

export default function Index(){
        const [mesa, setMesa] = useState(0);
        const [cliente, setCliente] = useState('');
        const [pessoas, setPessoas] = useState(0);
        const [reservas, setReservas] = useState('');
        const [observacao, setObservacao] = useState('');
        const [id, setId] = useState(0);

        async function finalizarClick() {
            try{
            const resposta = await adicionaReserva(mesa, cliente, pessoas, reservas, observacao);
            alert('reserva cadastrada com sucesso');
             
            }   catch (err){
                alert(err.message);
            }
        }
        
    return(
        <div className='adicionar'>
            <section className="fx-reserva">
                <img className="logo" src="/logo-hamburguer.png" alt=""/>
                
                <div className="container" >
                    <div className="titulo , font">
                        Adicionar reserva
                    </div>

                    <div className="linhas">
                        <div className="cima">
                            <div className="column">
                                <div className="texto , font">Mesa</div>
                                <input className="input1" type="number" value={mesa} onChange={e => setMesa(e.target.value)}/>
                            </div>
                            <div className="column">
                                <div className="texto , font">Nome</div>
                                <input className="input2" type="text" value={cliente} onChange={e => setCliente(e.target.value)}/>
                            </div>    
                        </div>
                        <div className='baixo'>
                            <div className="">
                                <div className="texto , font">Qtd de pessoas</div>
                                <input className="input1" type="number" value={pessoas} onChange={ e => setPessoas(e.target.value)}/>
                            </div>
                            <div className=''>
                                <div className="texto , font">Data e hora</div>
                                <input type="date"className="input3" value={reservas} onChange={ e => setReservas(e.target.value)}/>
                            </div>
                        </div>
                        <div className='baixo-2'>
                            <div>
                                <div className='texto , font'>Observações</div>
                                <textarea type="text" className='input-ob'value={observacao} onChange={ e => setObservacao(e.target.value)}/>
                            </div>
                            <img style={{"marginTop":"20px"}}width="310px" height="200px"src='/images/adicionar mesa.png'alt=''/> 
                        </div>
                        
                       
                        <div className="margin-botao">
                            <Link to="/Consultar" className="botao , font" onClick={finalizarClick} >Finalizar</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}