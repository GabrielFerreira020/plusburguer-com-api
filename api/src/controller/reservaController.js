import {adicionaReserva} from'../repository/reservaRepository.js';

import { Router } from 'express';
const server =Router();

server.post('/reserva', async (req, resp)=>{
    try {
        const novaReserva = req.body;

        const reservaInserida = await adicionaReserva(novaReserva);
        
        resp.send(reservaInserida)
       
    } catch (err) {
        resp.status(400).send({
            erro: err.messsage
        })
    }
})


export default server;