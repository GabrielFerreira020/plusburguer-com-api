import { useNavigate } from 'react-router-dom';
import { login } from '../../api/usuarioapi';
import './index.scss';
import storage from 'local-storage'

import LoadingBar from 'react-top-loading-bar'
import { useState, useRef } from 'react';



export default function Index(){ 

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro]  = useState('');
    const [carregando, setCarregando] = useState(false);
    

    const navigate = useNavigate();
    const ref = useRef();
    

  async function entrarClick() {
  ref.current.continuousStart();
  setCarregando(true);

      try{
        const r = await login(email,senha);
        storage('usuario-logado', r);

         setTimeout(() => {
          navigate('/Consultar')
         }, 3000);

      } catch (err) {
          ref.current.complete();
          setCarregando(false);
          if (err.response.status === 401){
              setErro(err.response.data.erro);
          }
      }
    
       }


    return(
      
        <div className='login'>
            <main className="pagina-completa">
            <LoadingBar color='#f11946' ref={ref}/>
                
                <section className="conteiner1">
                    <div className="subconteiner">
                        <img src="/logo-hamburguer.png" className="img" alt=""/>
                    </div>

                    <div className="subconteiner2">
                        <div className="titulo">
                            <h1> Faça seu login !!</h1>
                        </div>
                    </div>
                </section>

                <section className="conteiner2">
                <div className="texto2">
                   
                </div>
                </section>

                <section className="conteiner3">
                    <div className="texto3">
                        Email
                    </div>
                    <input type="text" className="box1" value={email}  onChange={e => setEmail(e.target.value)}/>
                </section>

                <section className="conteiner4">
                    <div className="texto4">
                        Senha
                    </div>
                    <input type="password" className="box2" value={senha}  onChange={e => setSenha(e.target.value)}/>
                </section>

                <div className="texto5">
                    <u>{erro}</u>
                </div>

                <button to="/Consultar" className="botão" onClick={entrarClick} disable={carregando} >
                    Login
                </button>

                

            </main>  
        </div>
       
    )
}