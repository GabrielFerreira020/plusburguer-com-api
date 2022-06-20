import './index.scss';
import { Link, useParams } from 'react-router-dom';
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { listarTodas, removerReserva, concluirReserva} from '../../api/reservaApi';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { confirmAlert} from 'react-confirm-alert'
import {toast} from 'react-toastify'




export default function Index(){
    const navigate = useNavigate()
    const [reserva, setReserva] = useState ([]);

    const {idParam} = useParams();
        useEffect(() => {
        carregarReserva();
        }, [])

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

    useEffect(()=> {
        concluirReservaClick();
    }, [])

    async function concluirReservaClick(id){
        const resposta = await concluirReserva(id);
        carregarReserva();
         
    }

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
                        toast.dark(' 🚀 Reserva removida!')
                    }
                },
                {
                    label: 'Não'
                }
            ]
        })
        
       
    }



    function editarReserva(id){
        navigate(`/Alterar/${id}`);
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
                                <th>Observações</th>
                                <th></th>    
                            </tr>
                        </thead>
                        <tbody className='corpo-tb'>
                            {reserva.map(item =>
                                <tr key={item.ID} style={{backgroundColor: item.SITUACAO == 'Concluido' ? '#Acdf87' : ''}}>
                                    <td>{item.MESA}</td>
                                    <td>{item.NOME}</td>
                                    <td>{item.QTD_PESSOAS}</td>
                                    <td>
                                        {item.DIA.substr(0, 10)} <br />
                                        {item.DIA.substr(11, 5)}
                                    </td>
                                    <td>
                                        {item.OBSERVACAO.substr(0, 8)}...<br/>
                                        
                                    </td>
                                    <td>
                                        <img widht = "20px" height="20px" src="/images/images/Lapis-icon.png" className='lapislixos' alt="" onClick={() => editarReserva(item.ID)}></img> 
                                        <img widht = "20px" height="25px" src="/images/images/trash-can_38501.png" alt="" className='lapislixos' onClick={() => removerReservaClick(item.ID, item.NOME)}/>
                                        <input className="checkbox"type="checkbox" onClick={() => concluirReservaClick( item.ID)}/>
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