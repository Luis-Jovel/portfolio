import express from 'express';
import GraphHTTP from 'express-graphql';
import Schema from './graphql/schema';

const app = express();
app.set('port', process.env.PORT || 3001);
// serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// graphQL
const shouldUseGraphiql = process.env.NODE_ENV !== 'production';
app.use('/graphql', GraphHTTP({
  schema: Schema,
  graphiql: shouldUseGraphiql,
}));

app.listen(app.get('port'), () => {
  console.log(`App listening on port ${app.get('port')}!`); //eslint-disable-line
});
