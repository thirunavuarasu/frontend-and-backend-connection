import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Database/dbConfig.js';
import studentRoutes from './Routers/student.router.js';
import mentorRoutes from './Routers/mentor.router.js';
dotenv.config();

const app = express()
app.use(cors())
app.use(express.json())


app.get('/', (req,res)=>{
res.status(200).send("App is working fine")
})
app.use('/api/student',studentRoutes)
app.use('/api/mentor', mentorRoutes)


connectDB();
app.listen (process.env.PORT,()=>{
    console.log("App is listening in the port",process.env.PORT);
});