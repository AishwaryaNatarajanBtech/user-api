import express from 'express';
import userRoutes from './routes/users.routes';

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

export default app;