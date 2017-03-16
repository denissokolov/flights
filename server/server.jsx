import express from 'express';
import indexRoute from './routes/indexRoute';

const app = express();

app.set('views', './server/views');
app.set('view engine', 'pug');

app.get('/', indexRoute);

const server = app.listen(8000, () => {
  console.info('App pid ' + process.pid + ' start listening at port ' + server.address().port);
});
