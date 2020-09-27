import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Card from '../../components/Card/Card';
import classes from './Content.module.scss';
import Loader from '../../components/UI/Loader/Loader';

const getItems = gql`
  query GetAllItems {
    getAllItems {
      id
      imgUrl
      title
      desc
    }
  }
`;

export default function Content() {
  const { data, loading } = useQuery(getItems);

  return (
    <div className={classes.Content}>
      {loading && <Loader />}

      {!loading &&
        data.getAllItems &&
        data.getAllItems.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              desc={item.desc}
              imgUrl={item.imgUrl}
              id={item.id}
            />
          );
        })}
    </div>
  );
}
