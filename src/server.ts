import express, {Request, Response} from 'express';

const app = express();

app.use(express.json());
const PORT:Number = 3000;

app.get('/teste', (req: Request, res: Response)=>{
    res.json({ message: "aeea"})
})

app.listen(PORT, ()=> { console.log(`Server on port ${PORT}`)});