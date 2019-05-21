import React from 'react';
import PropTypes from 'prop-types';
import { ROUTES } from '../../routes/constants';
import { getRoute, checkEmpty } from '../../utils';

import './styles.scss';

const Article = ({
  id,
  title,
  byline,
  published_date,
  media,
  icon,
  history,
  handleClick,
}) => (
  <article className="article" onClick={handleClick}>
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
      <h3 className="article__title">{title !== '' ? title : ' - '}</h3>
      <div className="article__info-wrapper">
        <p className="article__byline">{byline !== '' ? byline : 'By -'}</p>
        <p className="article__published-date">
          {published_date !== '' ? published_date : 'N/A'}
        </p>
      </div>
    </div>
    <img className="article__icon" src={icon} alt="Arrow Icon" />
  </article>
);

Article.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  byline: PropTypes.string.isRequired,
  published_date: PropTypes.string.isRequired,
  media: PropTypes.array.isRequired,
  icon: PropTypes.any.isRequired,
  handleClick: PropTypes.func,
};

export default Article;
