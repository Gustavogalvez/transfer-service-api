import { Request, Response } from 'express';
import { Pool } from 'pg';
import { CONNECTION_PROD } from '../../config/environment/production';
import { getListOfAddressee, insertAddresee } from './addressee.service';

function getPool() {
    return new Pool({
        connectionString: CONNECTION_PROD,
        ssl: { rejectUnauthorized: false }
    });
}

/** Busca por nombre en los destinatarios */
export function getAddressees(req: Request, res: Response) {
    let pool = getPool();
    let search = req.params['search'];
    getListOfAddressee(pool, search).then((resp: any) => {
        pool.end();
        res.status(200);
        res.send(resp.rows);
    }).catch(() => {
        pool.end();
        res.status(500);
        res.send({msg: 'Error interno del servidor!'})
    });
}

/** Agrega un destinatario */
export function addAddressee(req: Request, res: Response) {
    let pool = getPool();
    insertAddresee(pool, req.body).then((resp: any) => {
        pool.end();
        res.status(200);
        res.send({msg: 'Actualizado correctamente'})
    }).catch(() => {
        pool.end();
        res.status(500);
        res.send({msg: 'Error interno del servidor!'})
    });
}