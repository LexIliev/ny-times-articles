import React from 'react';
import PropTypes from 'prop-types';
import { ROUTES } from '../../routes/constants';
import { getRoute } from '../../utils';

import './styles.scss';

const Article = ({ id, title, byline, published_date, media, history }) => (
  <article
    className="article"
    onClick={() => history.push(getRoute(ROUTES.DETAILS, { id }))}
  >
    <img
      className="article__image"
      src={
        media[0] &&
        media[0]['media-metadata'] &&
        media[0]['media-metadata'][0].url
      }
      alt={title}
    />
    <div className="article__wrapper">
      <h3 className="article__title">{title}</h3>
      <div className="article__info-wrapper">
        <p className="article__byline">{byline !== '' ? byline : 'By -'}</p>
        <p className="article__published-date">{published_date}</p>
      </div>
    </div>
    <img
      className="article__icon"
      src={require('../../../assets/right-arrow.svg')}
      alt="Arrow Icon"
    />
  </article>
);

Article.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  byline: PropTypes.string.isRequired,
  published_date: PropTypes.string.isRequired,
  media: PropTypes.array.isRequired,
};

export default Article;
