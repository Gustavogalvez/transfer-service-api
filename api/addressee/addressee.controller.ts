import { Request, Response } from 'express';
import { Pool } from 'pg';
import { CONNECTION_PROD } from '../../config/environment/production';
import { getListOfAddressee, insertAddresee } from './addressee.service';

const pool = new Pool({
    connectionString: CONNECTION_PROD,
    ssl: { rejectUnauthorized: false }
});

export function getAddressees(req: Request, res: Response) {
    getListOfAddressee(pool).then((resp: any) => {
        pool.end();
        res.status(200);
        res.send(resp.rows);
    }).catch(() => {
        pool.end();
        res.status(500);
        res.send('Error interno!')
    });
}

export function addAddressee(req: Request, res: Response) {
    insertAddresee(pool, req.body).then((resp: any) => {
        pool.end();
        res.status(200);
        res.send('Actualizado correctamente')
    }).catch(() => {
        pool.end();
        res.status(500);
        res.send('Error interno!')
    });
}