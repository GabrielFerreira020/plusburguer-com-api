

import {adicionaReserva, alterarReserva, concluirReserva, listarPorId, listarTodas, removerReserva} from'../repository/reservaRepository.js';

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

        if (altreserva.mesa < 0)
            throw new Error('Mesa inválida')

        if (!altreserva.cliente.trim())
            throw new Error('Nome obrigatório')

        if (altreserva.pessoas < 0)
        throw new Error('Quantidade inválida')

        if (!altreserva.pessoas.trim())
        throw new Error('Quantidade obrigatório')


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


server.put('/reserva/concluido/:id', async (req,resp)=>{
    try {
        const { id } = req.params;
        const resposta = await concluirReserva(id);
        resp.status(200).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})




export default server;