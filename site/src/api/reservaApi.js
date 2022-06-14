import axios  from "axios";
const api = axios.create({
    baseURL: 'http://localhost:5000'
})


export async function adicionaReserva(mesa, cliente, pessoas, reservas, observacao){
    const resposta = await api.post ('./reserva', {
        mesa:mesa,
        cliente:cliente,
        pessoas:pessoas,
        reservas:reservas,
        observacao:observacao
    })
    return resposta.data;
}

export async function alterarReserva(id, mesa, cliente, pessoas, reservas, observacao){
    const resposta = await api.put(`/reserva/${id}`, {
        mesa:mesa,
        cliente:cliente,
        pessoas:pessoas,
        reservas:reservas,
        observacao:observacao
    })
    return resposta.data;
}

export async function listarTodas(){
    const resposta = await api.get('/reserva');
    return resposta.data
}

export async function buscarPorId(id){
    const resposta = await api.get(`/reserva/${id}`);
    return resposta.data;
}

export async function removerReserva(id) {
    const reposta = await api.delete(`/reserva/${id}`);
    return  reposta.status;
}
    
