import { Pool } from "pg";

/**
 * Busca por nombre en la tabla addressee
 * @param pool Pool para realizar las acciones en BD
 * @param search Nombre a buscar
 * @returns Promise<QueryResult<any>>
 */
export function getListOfAddressee(pool: Pool, search?: string) {
    let where = search ? `WHERE nombre LIKE '%${search}%'` : '';
    return pool.query('SELECT * FROM addressee as a ' + where);
}

/**
 * Ingresa un destinatario
 * @param pool Pool para realizar las acciones en BD
 * @param body Viene como tipo IAddressee desde el frontend, son los datos del destinatario
 * @returns Promise<QueryResult<any>>
 */
export function insertAddresee(pool: Pool, body: any) {
    const query = {
        text: 'INSERT INTO addressee(nombre, rut, correo, telefono, banco_id, tipo_cuenta, nro_cuenta) VALUES($1, $2, $3, $4, $5, $6, $7)',
        values: [body.nombre, body.rut, body.correo, body.telefono, body.banco_id, body.tipo_cuenta, body.nro_cuenta]
    };
    return pool.query(query)
}