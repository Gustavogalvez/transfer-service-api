import { Request, Response } from 'express';
import { getListOfAddressee } from './addressee.service';

export function getAddressees(req: Request, res: Response) {
    getListOfAddressee().then(resp => {
        res.send(resp.rows);
    })
}