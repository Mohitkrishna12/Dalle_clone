import express  from "express";
import * as dotenv from "dotenv";
import cors from "cors"
import connectDb from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js"
import aiImgRoutes from "./routes/aiImgRoutes.js"


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:"50mb"}));
app.use("/api/v1/post",postRoutes);
app.use("/api/v1/ai-img",aiImgRoutes)

const startServer = async()=>{
    try{
        connectDb(process.env.MONGODB_URL)
        app.listen(8080,()=>{console.log("server running")})
    }catch(err){
        console.log(err)
    }
}

startServer();