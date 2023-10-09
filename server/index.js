import express from "express";
import cors from "cors";
import 'dotenv/config'
import dbConnection  from "./config.js";
import { router } from "./Router/UserRouter.js";

const app = express();
const port = process.env.PORT;

dbConnection;
app.use(express.json());
app.use(cors({origin: true}));

app.use('/api', router)

app.listen(port, () =>{
  console.log(`server is working on ${port}`);
});