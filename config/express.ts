
import bodyParser from 'body-parser';
import cors from 'cors';

/**
 * Agrega la configuración de express
 * * Cors
 * * bodyParser
 * @param app express
 */
export default async function (app: any) {
    const corsOptions = {
      origin: '*',
      methods: ['ACCEPT', 'GET', 'POST', 'PATCH', 'OPTIONS', 'PUT', 'DELETE'],
    };
    app.use(cors(corsOptions));
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({
        extended: true
    }));
}