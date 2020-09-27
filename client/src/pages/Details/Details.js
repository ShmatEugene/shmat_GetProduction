import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Loader from '../../components/UI/Loader/Loader';
import classes from './Details.module.scss';

const getItem = gql`
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      imgUrl
      title
      desc
    }
  }
`;

export default function Details() {
  const { id } = useParams();

  const { data, loading } = useQuery(getItem, {
    variables: {
      id: id,
    },
  });

  const item = data ? data.getItem : null;
  return (
    <div className={classes.Details}>
      {item && !loading ? (
        <>
          <div className={classes.Details__img}>
            <img src={item.imgUrl} alt="listing-img" />
          </div>
          <div className={classes.Details__text}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
