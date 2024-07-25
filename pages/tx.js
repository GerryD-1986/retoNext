import express, { json } from 'express';
import authRoutes from "./routes/auth.routes";

const tx = express();

tx.use(express.json());

tx.use(authRoutes);

export default tx;