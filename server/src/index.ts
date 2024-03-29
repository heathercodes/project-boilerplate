import express from 'express';
import dotenv from 'dotenv';
import { router } from './routes';

const PORT = 9000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

const server = app.listen(PORT, () => {
    console.info(`Server started on port ${PORT}`);
});

export default server;
