import express, { Application } from 'express';
import authRoutes from './api/v1/auth/auth.routes';
import userRoutes from './api/v1/user/user.routes';
import { errorMiddleware } from './middleware/error.middleware';

const app: Application = express();

app.use(express.json());
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);

// Error middleware
app.use(errorMiddleware);

export default app;