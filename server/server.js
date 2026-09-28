import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routers from "./routes/userRoute.js";
import { connectDatabase } from "./config/database.js";
import loanRouters from "./routes/loanApplicationRoute/loanApplicationRoutes.js";
import bankRouter from "./routes/bankRoute.js";
dotenv.config({ path: "./config/config.env" });


const app = express();

await connectDatabase();

app.use(express.json());

let corsOptions = {
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
};

app.use(cors(corsOptions));

// app.get('/',(req,res)=>{
//     res.send("Hello World")
// })
app.use("/", routers);
app.use("/", loanRouters);
app.use("/", bankRouter);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
