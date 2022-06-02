use sistemaHamburgueriaMG;



-- adiciona um novo usuario
INSERT INTO TB_FUNCIONARIO
(ID_FUNCIONARIO, DS_EMAIL, DS_SENHA)
VALUES (1,'junior123@gmail.com', 'junior');




-- efetuar um login
select ID_FUNCIONARIO		id,
       ds_email				email
  from TB_FUNCIONARIO
 where DS_EMAIL		= 'gabrielf1234@gmail.com'
   and DS_SENHA		= 'gabriel';




-- adicionar reserva
INSERT INTO TB_RESERVA(ID_FUNCIONARIO,  NR_MESA, NM_CLIENTE, QTD_PESSOAS, DT_RESERVAS, DS_OBSERVACAO)
	VALUES (1, 1, 'GABRIEL FERREIRA', 5 , '2022-02-19','MESA RESERVADA ÃO AR LIVRE');
    

    


-- consultar reserva
SELECT ID_RESERVA ,
		NR_MESA		MESA,
	   NM_CLIENTE	NOME,
       QTD_PESSOAS	PESSOAS,
       DT_RESERVAS	HORA
	   
  FROM TB_RESERVA;
    
   
   
-- editar reserva
UPDATE 	TB_RESERVA
   SET	NR_MESA 		= 4,
		NM_CLIENTE		='PEDRINHO ZS',
        QTD_PESSOAS		= 10,
        DT_RESERVAS		='2022-10-10',
        DS_OBSERVACAO	='QUEROS DUAS MESAS JUNTAS'
  WHERE ID_RESERVA 		= 1;
		
    

-- remover reserva 
DELETE FROM TB_RESERVA
	  WHERE	ID_RESERVA = 2;