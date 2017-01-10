import express from 'express';
import GraphHTTP from 'express-graphql';
import Schema from './graphql/schema';

const app = express();

// GraphQL
app.use('/graphql', GraphHTTP({
  schema: Schema,
}));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Example app listening on port 3000!'); //eslint-disable-line
});
