import express from 'express';
import router from './routes';
import cors from 'cors';

function createApp() {

const app = express();
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:3333', // Substitua pelo domínio do seu frontend
    methods: ['GET', 'POST', 'PATCH', 'DELETE'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
};

app.use('/api', router);
app.use('/api/players/:id', router);
app.use(cors(corsOptions));


    return app;
}

export default createApp;