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
        res.send(resp.rows);
    }).catch(() => {
        pool.end();
    });
}

export function addAddressee(req: Request, res: Response) {
    insertAddresee(pool, req.body).then((resp: any) => {
        pool.end();
    }).catch(() => {
        pool.end();
    });
}