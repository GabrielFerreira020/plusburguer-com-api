import { con } from './connection.js'

export async function adicionaReserva(reserva){
    const comando =
        `INSERT INTO TB_RESERVA(ID_FUNCIONARIO,  NR_MESA, NM_CLIENTE, QTD_PESSOAS, DT_RESERVAS, DS_OBSERVACAO ,DS_SITUACAO)
                        VALUES (?, ?, ?, ?, ?, ?, 'disponivel') `
    
    const [ resposta ] = await con.query(comando, [reserva.funcionario, reserva.mesa, reserva.cliente, reserva.pessoas, reserva.reservas, reserva.observacao]);
    reserva.id = resposta.insertId;
    return reserva
}

export async function alterarReserva(id, reserva){
    const comando =
   ` UPDATE TB_RESERVA
        SET	NR_MESA 		    = ?,
            NM_CLIENTE		    =?,
            QTD_PESSOAS		    = ?,
            DT_RESERVAS		    =?,
            DS_OBSERVACAO	     =?
      WHERE ID_RESERVA 	    	= ?`;

    const [ resposta ] = await con.query (comando, [reserva.mesa, reserva.cliente, reserva.pessoas, reserva.reservas, reserva.observacao,id]);
    return resposta.affectedRows;
}

export async function removerReserva(id){
    const comando =
   ` DELETE FROM TB_RESERVA
    WHERE	ID_RESERVA = ?`;

    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}

export async function listarTodas(){
    const comando=
    `select     ID_RESERVA  ID,
                NR_MESA		MESA,
                NM_CLIENTE	NOME,
                QTD_PESSOAS	QTD_PESSOAS,
                DT_RESERVAS	DIA,
                DS_SITUACAO SITUACAO
           From TB_RESERVA
          WHERE date(DT_RESERVAS) = current_date()
       ORDER BY DT_RESERVAS ASC`
    const [linhas] =await con.query(comando);
    return linhas;
}


export async function listarPorId(id){
    const comando =
    `select id_reserva      id,
            NR_MESA		    MESA,
            NM_CLIENTE	    NOME,
            QTD_PESSOAS	    QTD_PESSOAS,
            DT_RESERVAS	    DIA,
            DS_OBSERVACAO   OBSERVACAO
       From TB_RESERVA
      where ID_RESERVA = ? `;
    
    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
} 



export async function concluirReserva(id){
    const comando =
    `update TB_RESERVA
        SET DS_SITUACAO   =  'Concluido'
      where ID_RESERVA    =  ?
    `;
    const [ resposta ] = await con.query (comando, [id]);
    return resposta;
}


