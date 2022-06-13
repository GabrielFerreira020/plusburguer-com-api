import './index.scss';
import { Link } from 'react-router-dom';
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { listarTodas } from '../../api/reservaApi';



export default function Index(){
    const navigate = useNavigate()
    const [reserva, setReserva] = useState ([]);

    async function  carregarReserva () {
        try {
            const resp = await listarTodas();  
            console.log(resp)
            setReserva(resp);
        } catch(e) {
            console.log(e)
            setReserva([])
        }
    }

    useEffect(() => {
        carregarReserva();
    }, [])


    // function editarReserva(id){
    //      navigate(`/editar/${id}`);
    // }

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
                        <thead className='head-tb'>
                            <tr>
                                <th>Mesas</th>
                                <th>Nome</th>
                                <th>Qtd pessoas</th>
                                <th>data</th>
                                <th>Apagar e Editar</th>    
                            </tr>
                        </thead>
                        <tbody className='corpo-tb'>
                            {reserva.map(item =>
                                <tr>
                                    <td>{item.MESA}</td>
                                    <td>{item.NOME}</td>
                                    <td>{item.QTD_PESSOAS}</td>
                                    <td>{item.DIA.substr(0, 10)}</td>
                                    <td>
                                        <img widht = "20px" height="20px" src="/images/images/Lapis-icon.png"></img> 
                                        <img widht = "20px" height="25px" src="/images/images/trash-can_38501.png"></img>
                                    </td>
                                </tr>
                            )}                         
                        </tbody>
                    </table>
                </div>

                <nav className='navegacao'>
                    <div className='config-botao'> 
                        <Link onClick={sairClick} to="/"className='font , botao'>voltar</Link>
                        <Link to="/adicionar" className='font , botao'>adicionar</Link>
                    </div>
                </nav>
            </main>
        </div>
    )
}