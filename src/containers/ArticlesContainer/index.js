import React, { Component } from 'react';
import { connect } from 'react-redux';
import rightArrow from '../../../assets/right-arrow.svg';
import { fetchArticlesList } from '../../actions';
import { Article, Loader } from '../../components';
import { ROUTES } from '../../routes/constants';
import { getRoute } from '../../utils';
import './styles.scss';

class ArticlesContainer extends Component {
  componentDidMount() {
    this.props.fetchArticlesList();
  }

  render() {
    const { articles, history } = this.props;

    if (!articles || !articles.length) {
      return <Loader />;
    }

    return (
      <div className='container'>
        {articles.length &&
          articles.map((article) => (
            <Article
              key={article.id}
              title={article.title}
              byline={article.byline}
              published_date={article.published_date}
              media={article.media}
              icon={rightArrow}
              handleClick={() =>
                history.push(getRoute(ROUTES.DETAILS, { id: article.id }))
              }
            />
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles.data,
});

export default connect(mapStateToProps, { fetchArticlesList })(
  ArticlesContainer
);
