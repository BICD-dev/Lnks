import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import router from './route';
import { errorHandler, methodNotAllowedHandler, notFoundHandler } from './middleware/errorhandler.middleware';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Welcome to Lnks API');
});
// 404 handler
app.use(notFoundHandler);
app.use(methodNotAllowedHandler(['GET', 'POST', 'PUT', 'DELETE']));
// Global error handler - must be last middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});