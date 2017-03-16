import express from 'express';

const app = express();

app.use((req, res) => {
  res.send('Hello world!');
});

const server = app.listen(8000, () => {
  console.info('App pid ' + process.pid + ' start listening at port ' + server.address().port);
});
