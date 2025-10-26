import "dotenv/config";
import express from 'express';
import cors from 'cors';
import postRoutes from "./routes/postRoutes"

const app = express();
const PORT: Number = 3003;

app.use(cors());
app.use(express.json());

app.use("/", postRoutes)

app.listen(PORT, () => { console.log(`Server on port ${PORT}`) });