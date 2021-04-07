import { Pool } from "pg";

export function getLisTransfers(pool: Pool, IdAddressee: number) {
    return pool.query('SELECT * FROM transfer as a ' + `WHERE addressee_id = ${IdAddressee}`);
}

export function insertTransfer(pool: Pool, body: any) {
    const query = {
        text: 'INSERT INTO transfer(addressee_id, monto) VALUES($1, $2)',
        values: [body.addressee_id, body.monto]
    };
    return pool.query(query)
}