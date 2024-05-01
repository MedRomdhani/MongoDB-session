import express from 'express';
import { dbconnection } from './database/dbconnection.js';
import userRouter from './src/modules/user/user.router.js';



const app = express()
const port = 3000
app.use(express.json());

dbconnection();
app.use('/users', userRouter)


app.listen(port, () => console.log(`Listening on port ${port}!`))