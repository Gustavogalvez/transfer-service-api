import { Pool } from 'pg';
import { CONNECTION_PROD } from '../../config/environment/production';



export function getListOfAddressee() {
    const pool = new Pool({
        connectionString: CONNECTION_PROD,
        ssl: { rejectUnauthorized: false }
    });
    return pool.query('SELECT * FROM addressee as a')
}