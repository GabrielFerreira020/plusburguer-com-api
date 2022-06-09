import {login} from '../repository/funcionarioRepository.js'

import { Router } from "express";
const server = Router();


server.post('/funcionario/login', async(req, resp) =>{
    try {
        const { email , senha } = req.body;
        const resposta = await login(email, senha );

        if(!resposta){
            throw new Error('Credenciais inválidas')
        }
      
        resp.send(resposta)
    } catch  (err) {
        console.log(err)
        resp.status(401).send({
            
             erro: err.message
             
        })
    }
})


export default server;