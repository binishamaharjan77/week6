// import express from "express";

// const app =express();
// const PORT=3000;

// app.use(express.json());
// app.get("/",(req,res)=>{
//     res.send("api running");
// })

// app.listen(PORT,()=>{
// console.log(`server runnning on ${PORT}`)
// })

import app from "./app.js";
//const PORT=3000;
import { config } from "./config/index.js";;

app.listen(config.port,()=>{
    console.log(`server running on ${config.port}`);
})