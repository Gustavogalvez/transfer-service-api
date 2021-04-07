import { Pool } from "pg";

/**
 * Obtiene un listado de las transferencias según el id del distinatario ingresado
 * @param pool Pool para realizar las acciones en BD
 * @param IdAddressee ID del destinatario
 * @returns Promise<QueryResult<any>>
 */
export function getLisTransfersByAddressee(pool: Pool, IdAddressee: number) {
    return pool.query('SELECT * FROM transfer as a ' + `WHERE addressee_id = ${IdAddressee}`);
}

/**
 * Ingresa una transferencia a la tabla transfer
 * @param pool Pool para realizar las acciones en BD
 * @param body {addressee_id, monto}
 * @returns Promise<QueryResult<any>>
 */
export function insertTransfer(pool: Pool, body: any) {
    const query = {
        text: 'INSERT INTO transfer(addressee_id, monto) VALUES($1, $2)',
        values: [body.addressee_id, body.monto]
    };
    return pool.query(query)
}

/**
 * Obtiene el listado historico de las transferencias realizadas
 * @param pool Pool para realizar las acciones en BD
 * @returns Promise<QueryResult<any>>
 */
export function getLisTransfers(pool: Pool) {
    return pool.query(`
        select a.*, t.monto
        from transfer t
        INNER JOIN addressee a on a.id = t.addressee_id
    `);
}