import './index.scss';
import { Link } from 'react-router-dom';

export default function Index(){
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
                                <input className="input1" type="text"/>
                            </div>
                            <div className="column">
                                <div className="texto , font">Nome</div>
                                <input className="input2" type="text"/>
                            </div>    
                        </div>
                        <div className='baixo'>
                            <div className="">
                                <div className="texto , font">Qtd de pessoas</div>
                                <input className="input1" type="text"/>
                            </div>
                            <div className=''>
                                <div className="texto , font">Data e hora</div>
                                <input type="date"className="input3"/>
                            </div>
                        </div>
                        <div className='baixo-2'>
                            <div>
                                <div className='texto , font'>Observações</div>
                                <textarea type="text" className='input-ob'/>
                            </div>
                            <img style={{"marginTop":"20px"}}width="310px" height="200px"src='/images/adicionar mesa.png'alt=''/> 
                        </div>
                        
                       
                        <div className="margin-botao">
                            <Link to="/Consultar" className="botao , font">Finalizar</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}