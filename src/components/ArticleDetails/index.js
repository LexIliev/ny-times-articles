import React from 'react';
import PropTypes from 'prop-types';
import { ROUTES } from '../../routes/constants';

import './styles.scss';

const ArticleDetails = ({
  id,
  title,
  abstract,
  byline,
  published_date,
  media,
}) => (
  <div className="article-details">
    <h3 className="article-details__title">{title}</h3>
    <p className="article-details__abstract">{abstract}</p>
    <p className="article-details__byline">{byline}</p>
    <p className="article-details__published-date">{published_date}</p>
    <img
      className="article-details__image"
      src={
        media[0] &&
        media[0]['media-metadata'] &&
        media[0]['media-metadata'][2].url
      }
      alt={title}
    />
  </div>
);

ArticleDetails.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  abstract: PropTypes.string.isRequired,
  byline: PropTypes.string.isRequired,
  published_date: PropTypes.string.isRequired,
  media: PropTypes.array.isRequired,
};

export default ArticleDetails;
