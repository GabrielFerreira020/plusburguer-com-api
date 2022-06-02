import { con } from './connection.js'

export async function adicionaReserva(reserva){
    const comando =
        `INSERT INTO TB_RESERVA(ID_FUNCIONARIO,  NR_MESA, NM_CLIENTE, QTD_PESSOAS, DT_RESERVAS, DS_OBSERVACAO)
                        VALUES (?, ?, ?, ? , ?,?) `
    
    const [ resposta ] = await con.query(comando, [reserva.funcionario, reserva.mesa, reserva.cliente, reserva.pessoas, reserva.reservas, reserva.observacao]);
    reserva.id = resposta.insertId;
    return reserva
}


