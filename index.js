import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js'

const app = express();
const PORT = 5000;
//const PORT = 8080;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Hello from Homepage.'));

//app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));
//app.listen(PORT, () => console.log(`Server Running on port: http://172.31.41.169:${PORT}`));
app.listen(PORT, () => console.log(`Server Running on port: http://192.168.1.111:${PORT}`));
