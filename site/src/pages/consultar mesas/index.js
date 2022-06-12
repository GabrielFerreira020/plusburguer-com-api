import './index.scss';
import { Link } from 'react-router-dom';
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { adicionaReserva, listarTodas } from '../../api/reservaApi';


export default function Index(){
    const navigate = useNavigate()
    const [reserva, setReserva] = useState ([]);

    async function  carregarReserva () {
        const resp = await listarTodas();
        console.log(resp);
        setReserva(resp);
    }

    useEffect(() => {
        carregarReserva();
    }, [])


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
                    <td className="config-td"></td>
                    <td className="config-td"></td>
                    <td className="config-td">07</td>
                    <td className="config-td">19/02</td>
                    <td className="config-td"> 
                        <img widht = "20px" height="20px" src="/images/images/Lapis-icon.png"></img>
                        <img widht = "20px" height="25px" src="/images/images/trash-can_38501.png"></img>
                    </td>
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