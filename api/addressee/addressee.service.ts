import { Pool } from "pg";

export function getListOfAddressee(pool: Pool) {
    return pool.query('SELECT * FROM addressee as a')
}

export function insertAddresee(pool: Pool, body: any) {
    const query = {
        text: 'INSERT INTO addressee(nombre, rut, correo, telefono, banco_id, tipo_cuenta, nro_cuenta) VALUES($1, $2, $3, $4, $5, $6, $7)',
        values: [body.nombre, body.rut, body.correo, body.telefono, body.banco_id, body.tipo_cuenta, body.nro_cuenta]
    };
    return pool.query(query)
}