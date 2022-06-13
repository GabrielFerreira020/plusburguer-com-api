import {adicionaReserva, alterarReserva, listarPorId, listarTodas, removerReserva} from'../repository/reservaRepository.js';

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
        const altreserva = req.body;

        const resposta = await alterarReserva (id, altreserva);
        if (resposta != 1)
            throw new Error ('reserva não pode ser alterada');
        else
            resp.status (204).send();

    }catch (err) {
        
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.delete('/reserva/:id', async (req, resp) => {
    try{
        const { id } = req.params;

        const resposta = await removerReserva(id);
        if (resposta != 1)
            throw new Error ('reserva não pode ser removida');
        else
            resp.status (204).send();

    } catch(err) {
        resp.status(400).send({
            erro: err.messsage
        })
    }
})

server.get('/reserva',async (req,resp)=>{
    try {
        const resposta = await listarTodas();
        resp.send(resposta)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/reserva/:id', async (req,resp) => {
    try {
        const { id } = req.params;
        const resposta = await listarPorId(Number(id));
        resp.send(resposta)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})




export default server;