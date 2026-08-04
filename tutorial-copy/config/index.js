// config/index.js
import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  db: {
    storage: process.env.DB_STORAGE || "./database.sqlite",
  },
  cors: {
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    methods: process.env.CORS_METHOD
      ? process.env.CORS_METHOD.split(",")
      : ["GET", "POST", "PUT", "DELETE"],
  },
};