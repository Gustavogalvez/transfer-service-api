
import cors from 'cors';

export default async function (app: any) {
    const corsOptions = {
      origin: '*',
      methods: ['ACCEPT', 'GET', 'POST', 'PATCH', 'OPTIONS', 'PUT', 'DELETE'],
    };
    app.use(cors(corsOptions));
}