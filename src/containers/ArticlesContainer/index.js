import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Article, Loader } from '../../components';
import { fetchArticlesList } from '../../actions';

import './styles.scss';

class ArticlesContainer extends Component {
  componentDidMount() {
    this.props.fetchArticlesList();
  }

  render() {
    const { articles, history } = this.props;

    if (!articles.length) {
      return <Loader />;
    }

    return (
      <div className="container">
        {articles.length &&
          articles.map((article) => (
            <Article
              history={history}
              key={article.id}
              id={article.id}
              title={article.title}
              byline={article.byline}
              published_date={article.published_date}
              media={article.media}
            />
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles.data,
});

export default connect(
  mapStateToProps,
  { fetchArticlesList },
)(ArticlesContainer);
