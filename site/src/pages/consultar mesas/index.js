import './index.scss';
import { Link } from 'react-router-dom';
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';
import { adicionaReserva } from '../../api/reservaApi';

export default function Index(){
    const navigate = useNavigate()

    function editarReserva(id){
        navigate(`/editar/${id}`);
    }

    function sairClick() {
    storage.remove('usuario-logado');
    navigate('/login')
    }
    return(
        <div className='consulta'>
            <main className='main'>
                <div className='cima'>
                    <img width="100px" height="90px"src="/logo-hamburguer.png"alt=""/> 
                    <h1 className='titulo , font'>Reservas de mesas</h1>
                </div>
                
                <div className="container-tabela">
                    <img className="img" src="/images/burguer-consulta" alt=""/>
                    <table className="tabela">
                    
                        <tr className='header , font'>
                            <th className="head-">Mesa</th>
                            <th className="head-">Nome</th>
                            <th className="head-">Qtd pessoas</th>
                            <th className="head-">Data</th>
                            <th className="head-">Hora</th>
                        </tr>
                      
                        <tr className="corpo">
                            <td className="config-td">01</td>
                            <td className="config-td">GABRIEL FERREIRA</td>
                            <td className="config-td">07</td>
                            <td className="config-td">19/02</td>
                            <td className="config-td">19:00</td>
                        </tr>
                        <tr className="corpo">
                            <td className="config-td">01</td>
                            <td className="config-td">GABRIEL FERREIRA</td>
                            <td className="config-td">07</td>
                            <td className="config-td">19/02</td>
                            <td className="config-td">19:00</td>
                        </tr>
                        <tr className="corpo">
                            <td className="config-td">01</td>
                            <td className="config-td">GABRIEL FERREIRA</td>
                            <td className="config-td">07</td>
                            <td className="config-td">19/02</td>
                            <td className="config-td">19:00</td>
                        </tr>
                        <tr className="corpo">
                            <td className="config-td">01</td>
                            <td className="config-td">GABRIEL FERREIRA</td>
                            <td className="config-td">07</td>
                            <td className="config-td">19/02</td>
                            <td className="config-td">19:00</td>
                        </tr>
                        <tr className="corpo">
                            <td className="config-td">01</td>
                            <td className="config-td">GABRIEL FERREIRA</td>
                            <td className="config-td">07</td>
                            <td className="config-td">19/02</td>
                            <td className="config-td">19:00</td>
                        </tr>
                        <tr className="corpo">
                            <td className="config-td">01</td>
                            <td className="config-td">GABRIEL FERREIRA</td>
                            <td className="config-td">07</td>
                            <td className="config-td">19/02</td>
                            <td className="config-td">19:00</td>
                        </tr>
                        <tr className="corpo">
                            <td className="config-td">01</td>
                            <td className="config-td">GABRIEL FERREIRA</td>
                            <td className="config-td">07</td>
                            <td className="config-td">19/02</td>
                            <td className="config-td">19:00</td>
                        </tr>
                        <tr className="corpo">
                            <td className="config-td">01</td>
                            <td className="config-td">GABRIEL FERREIRA</td>
                            <td className="config-td">07</td>
                            <td className="config-td">19/02</td>
                            <td className="config-td">19:00</td>
                        </tr>
                        <tr className="corpo">
                            <td className="config-td">01</td>
                            <td className="config-td">GABRIEL FERREIRA</td>
                            <td className="config-td">07</td>
                            <td className="config-td">19/02</td>
                            <td className="config-td">19:00</td>
                        </tr>
                        <tr className="corpo">
                            <td className="config-td">01</td>
                            <td className="config-td">GABRIEL FERREIRA</td>
                            <td className="config-td">07</td>
                            <td className="config-td">19/02</td>
                            <td className="config-td">19:00</td>
                        </tr>
                    </table>
                </div>
                <nav className='navegacao'>
                    <div className='config-botao'> 
                        <button className='font , botao'>apagar</button>
                        <Link onClick={sairClick} to="/"className='font , botao'>voltar</Link>
                        <Link to="/adicionar" className='font , botao'>adicionar</Link>
                        <Link to="/editar" className='font , botao' onClick={() => editarReserva(editarReserva)}>editar</Link>
                    </div>
                </nav>
            </main>
        </div>
    )
}