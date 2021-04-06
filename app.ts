import express from 'express';
import { createServer } from 'http';
import routes from './routes';

// Setup server
const app = express();

const server = createServer(app);
require('./config/express').default(app);
app.use(routes);

// Start server
function startServer() {
    server.listen(8080, function () {
        console.log(`Express server listening on http://localhost:${8080}`);
    });
}
startServer();
// Expose app
export default app;