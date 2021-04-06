import express from 'express';
import { createServer } from 'http';
import routes from './routes';

// Setup server
const app = express();

const server = createServer(app);
require('./config/express').default(app);
app.use(routes);

const PORT = process.env.PORT || 3000;
// Start server
function startServer() {
    server.listen(PORT, function () {
        console.log(`Express server listening on http://localhost:${PORT}`);
    });
}
startServer();
// Expose app
export default app;
