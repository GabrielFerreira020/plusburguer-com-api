import 'dotenv/config'

import funcionarioController from './controller/funcionarioController.js'
import reservaController from'./controller/reservaController.js'

import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());

//configuração dos endpoints
server.use(funcionarioController)
server.use(reservaController);


server.listen(process.env.PORT, () => console.log(`API Conectada na porta ${process.env.PORT}`))
