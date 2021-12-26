import 'reflect-metadata'
import express from 'express';
import morgan from 'morgan'
import cors from 'cors'
import userRoutes from "./routes/user.routes";
import { createConnection } from "typeorm";
import Router from "./routes";

const app = express();
// al ejecutar busca el ormconfig y ya conoce los parametros de la db
createConnection()
.then(async (connection) => {
    
});

//middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json());


//routes
app.use(Router);


app.listen(3000);
console.log('Server on port', 3000);
