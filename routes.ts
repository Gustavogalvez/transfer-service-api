
import { Router } from 'express';
const app = Router();

app.use('/addressee', (req: any, res: any, next: any) => {
    require('./api/addressee')(req, res, next);
});

app.route('/*').get((req, res) => {
    res.status(500);
    res.send('Petición no encontrada!');
})

export default app;