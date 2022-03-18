import express from 'express';
const app = express();
const port = process.env.PORT || '3000';
import { router } from './routes/web.js';
import { uc } from './middlewares/uc-middleware.js';
//Set View Engine
app.set('view engine', 'ejs');

app.use(uc);

// Router
app.use('/', router);

app.listen(port, () => {
  console.log('Server Running!');
});