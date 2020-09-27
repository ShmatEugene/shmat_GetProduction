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
    imgUrl: 'https://pixabay.com/get/54e6d4474f54a514f6da8c7dda353678153edce75753754b_1280.jpg',
    title: 'Kimberley Griffiths',
    desc:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web.',
  },
  {
    id: '2',
    imgUrl: 'https://pixabay.com/get/5fe8d1434c52b108f5d08460da29317e143ddce1505475_1280.jpg',
    title: 'Janelle Mosley',
    desc:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web.',
  },
  {
    id: '3',
    imgUrl: 'https://pixabay.com/get/54e6d4474f54a514f6da8c7dda353678153edce75753754b_1280.jpg',
    title: 'Connor Watts',
    desc:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web.',
  },
  {
    id: '4',
    imgUrl: 'https://pixabay.com/get/5fe8d1434c52b108f5d08460da29317e143ddce1505475_1280.jpg',
    title: 'Fahim Calderon',
    desc:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web.',
  },
  {
    id: '5',
    imgUrl: 'https://pixabay.com/get/54e6d4474f54a514f6da8c7dda353678153edce75753754b_1280.jpg',
    title: 'Matias Avalos',
    desc:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web.',
  },
  {
    id: '6',
    imgUrl: 'https://pixabay.com/get/5fe8d1434c52b108f5d08460da29317e143ddce1505475_1280.jpg',
    title: 'Madihah Herrera',
    desc:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web.',
  },
  {
    id: '7',
    imgUrl: 'https://pixabay.com/get/54e6d4474f54a514f6da8c7dda353678153edce75753754b_1280.jpg',
    title: 'Parker Barnard',
    desc:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web.',
  },
  {
    id: '8',
    imgUrl: 'https://pixabay.com/get/5fe8d1434c52b108f5d08460da29317e143ddce1505475_1280.jpg',
    title: 'Isabella Dale',
    desc:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web.',
  },
  {
    id: '9',
    imgUrl: 'https://pixabay.com/get/54e6d4474f54a514f6da8c7dda353678153edce75753754b_1280.jpg',
    title: 'Lucille Figueroa',
    desc:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web.',
  },
  {
    id: '10',
    imgUrl: 'https://pixabay.com/get/5fe8d1434c52b108f5d08460da29317e143ddce1505475_1280.jpg',
    title: 'Antonio Sloan',
    desc:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web.',
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
