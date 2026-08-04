import express from "express";
import cors from "cors";
import { config } from "./config/index.js";
import authRoutes from "./routes/authRoutes.js";
import { loggers } from "./middlewares/loggers.js";
import studentRoutes from "./routes/studentRoutes.js";
import { notFoundHandler, errorHandler } from "./middlewares/errorHandler.js";
const app=express();
// const PORT=3000;
app.use(
  cors({
    origin: config.cors.origin,
    methods: config.cors.methods,
  }),
);

app.use(loggers);
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("api running");
});

app.use("/api/students", studentRoutes);
app.use("/api/auth", authRoutes);
// app.listen(PORT,()=>{
//     console.log(`server running on ${PORT}`);
// })

app.use(notFoundHandler);   // must come after all real routes
app.use(errorHandler);
export default app;