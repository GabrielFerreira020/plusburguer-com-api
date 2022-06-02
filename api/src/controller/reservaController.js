import {adicionaReserva, alterarReserva} from'../repository/reservaRepository.js';

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

server.put('/reserva/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const reserva = req.body;

        const resposta = await alterarReserva (id, reserva);
        if (resposta != 1)
            throw new Error ('reserva não pode ser alterada');
        else
            resp.status (204).send();

    }catch (err) {
        resp.status(400).send({
            erro: err.messsage
        })
    }
})


export default server;