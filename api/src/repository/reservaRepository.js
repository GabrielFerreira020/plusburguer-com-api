import { con } from './connection.js'

export async function adicionaReserva(reserva){
    const comando =
        `INSERT INTO TB_RESERVA(ID_FUNCIONARIO,  NR_MESA, NM_CLIENTE, QTD_PESSOAS, DT_RESERVAS, DS_OBSERVACAO)
                        VALUES (?, ?, ?, ? , ?,?) `
    
    const [ resposta ] = await con.query(comando, [reserva.funcionario, reserva.mesa, reserva.cliente, reserva.pessoas, reserva.reservas, reserva.observacao]);
    reserva.id = resposta.insertId;
    return reserva
}

export async function alterarReserva(id, reserva){
    const comando =

   ` UPDATE 	TB_RESERVA
        SET	NR_MESA 		    = ?,
            NM_CLIENTE		    =?,
         QTD_PESSOAS		    = ?,
         DT_RESERVAS		    =?,
         DS_OBSERVACAO	        =?
   WHERE ID_RESERVA 	    	= ?`;

    const [ resposta ] = await con.query (comando, [reserva.mesa, reserva.cliente, reserva.pessoas, reserva.reservas, reserva.observacao,  id]);
    return resposta.affectedRows;
}

export async function removerReserva(id){
    const comando =
   ` DELETE FROM TB_RESERVA
    WHERE	ID_RESERVA = ?`;

    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}

export async function consultarReserva (){
    `SELECT ID_RESERVA ,
    NR_MESA		MESA,
   NM_CLIENTE	NOME,
   QTD_PESSOAS	PESSOAS,
   DT_RESERVAS	HORA
   
FROM TB_RESERVA`;

const [linhas] = await con.query(comando);
return linhas;
}

