const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const { buildSchema } = require('graphql');
const { readFileSync } = require('fs');

// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

const schemaString = readFileSync('./schema.graphql', { encoding: 'utf8' });

const schema = buildSchema(schemaString);

const allItems = [
  {
    id: '1',
    imgUrl:
      'https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80',
    title: 'NAme name',
    desc: 'Lorem ipsum',
  },
  {
    id: '2',
    imgUrl:
      'https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80',
    title: 'NAme name 2',
    desc: 'Lorem ipsum 2',
  },
];

const root = {
  getAllItems: () => {
    return allItems;
  },
  getItem: (params) => {
    return allItems.find(({ id }) => params.id === id);
  },
};

// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------

const app = express();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.listen(6006);

console.log('Running a GraphQL API server at http://localhost:6006/graphql');
