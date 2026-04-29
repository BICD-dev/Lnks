import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(helmet());

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Welcome to Lnks API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});