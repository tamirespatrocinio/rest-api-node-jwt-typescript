import express from 'express';
import './db';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, async () => {
  console.log('🚀 Server started on port 3333!');
});
