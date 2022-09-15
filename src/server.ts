import app from "./app";
import { Server } from "http";

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;

const server: Server = app.listen(PORT, () =>
  console.log(`App is listeing on port ${PORT}`)
);
