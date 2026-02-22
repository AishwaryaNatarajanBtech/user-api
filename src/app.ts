import express from 'express';
import userRoutes from './routes/users.routes';
import { errorMiddleware } from './middleware/error.middleware';

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

app.use(errorMiddleware);
export default app;