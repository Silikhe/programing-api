const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const programmingLanguagesRouter = require('./routes/programmingLanguages');

app.use('/programming-languages', programmingLanguagesRouter);


app.get('/', (req, res) => {
  res.json({'message': 'ok'});
})

app.listen(port, () => {
  console.log(`proggramming app is listening at http://localhost:${port}`)
});