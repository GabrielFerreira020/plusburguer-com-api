import './index.scss';
import { Link } from 'react-router-dom';
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { listarTodas, removerReserva } from '../../api/reservaApi';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert} from 'react-confirm-alert'




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

    async function removerReservaClick(id, NOME){
       
        confirmAlert({
            title:'Remover reserva',
            message: `Deja remover a reserva${NOME}?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        const reposta = await removerReserva(id, NOME);
                        carregarReserva();
                    }
                },
                {
                    label: 'Não'
                }
            ]
        })
        
       
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

                    <div className='tab' >
                    <table className="tabela">
                        <thead className='head-tb'>
                            <tr>
                                <th>Mesas</th>
                                <th>Nome</th>
                                <th>Qtd Pessoas</th>
                                <th>Data</th>
                                <th></th>    
                            </tr>
                        </thead>
                        <tbody className='corpo-tb'>
                            {reserva.map(item =>
                                <tr key={item.ID}>
                                    <td>{item.MESA}</td>
                                    <td>{item.NOME}</td>
                                    <td>{item.QTD_PESSOAS}</td>
                                    <td>{item.DIA.substr(0, 10)}</td>
                                    <td>
                                        <img widht = "20px" height="20px" src="/images/images/Lapis-icon.png" className='lapislixos'></img> 
                                        <img widht = "20px" height="25px" src="/images/images/trash-can_38501.png" className='lapislixos' onClick={() => removerReservaClick(item.ID, item.NOME)}/>
                                    </td>
                                </tr>
                            )}                         
                        </tbody>
                    </table>
                    </div>
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