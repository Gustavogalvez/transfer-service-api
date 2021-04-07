import { Request, Response } from 'express';
import { Pool } from 'pg';
import { CONNECTION_PROD } from '../../config/environment/production';
import { getLisTransfers, insertTransfer } from './transfer.service';

function getPool() {
    return new Pool({
        connectionString: CONNECTION_PROD,
        ssl: { rejectUnauthorized: false }
    });
}

export function getTransfer(req: Request, res: Response) {
    let pool = getPool();
    let IdAddressee = Number(req.params?.IdAddressee);
    getLisTransfers(pool, IdAddressee).then((resp: any) => {
        pool.end();
        res.status(200);
        res.send(resp.rows);
    }).catch(() => {
        pool.end();
        res.status(500);
        res.send({msg: 'Error interno!'})
    });
}

export function sendTransfer(req: Request, res: Response) {
    let pool = getPool();
    insertTransfer(pool, req.body).then((resp: any) => {
        pool.end();
        res.status(200);
        res.send({msg: 'Actualizado correctamente'})
    }).catch(() => {
        pool.end();
        res.status(500);
        res.send({msg: 'Error interno!'})
    });
}