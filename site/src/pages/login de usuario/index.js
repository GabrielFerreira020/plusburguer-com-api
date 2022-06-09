import { useNavigate } from 'react-router-dom';
import axios from  'axios'
import './index.scss';

import { useState } from 'react';





export default function Index(){ 

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro]  = useState('');
    

    const navigate = useNavigate();
    

  async function entrarClick() {
  

      try{
        const r = await axios.post('http://localhost:5000/funcionario/login', {
            email: email,
            senha: senha
         });
         
            navigate('/Consultar');
        
         

      } catch (err) {
          if (err.response.status === 401){
              setErro(err.response.data.erro);
          }
      }
    
       }


    return(
        <div className='login'>
            <main class="pagina-completa">

                
                <section class="conteiner1">
                    <div class="subconteiner">
                        <img src="/logo-hamburguer.png" class="img" alt=""/>
                    </div>

                    <div class="subconteiner2">
                        <div class="titulo">
                            <h1> Faça seu login !!</h1>
                        </div>
                    </div>
                </section>

                <section class="conteiner2">
                <div class="texto2">
                   
                </div>
                </section>

                <section class="conteiner3">
                    <div class="texto3">
                        Email
                    </div>
                    <input type="text" class="box1" value={email}  onChange={e => setEmail(e.target.value)}/>
                </section>

                <section class="conteiner4">
                    <div class="texto4">
                        Senha
                    </div>
                    <input type="password" class="box2" value={senha}  onChange={e => setSenha(e.target.value)}/>
                </section>

                <div class="texto5">
                    <u>{erro}</u>
                </div>

                <div to="/Consultar" class="botão" onClick={entrarClick} >
                    Login
                </div>

                

            </main>  
        </div>
       
    )
}