import express from "express";
import mongoose from "mongoose";
import authrouter from "./routers/auth"

import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());


app.use("/api",authrouter)





mongoose.connect("mongodb://127.0.0.1:27017/angular");

export const viteNodeApp = app;