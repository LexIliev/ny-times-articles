import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticlesList } from '../../actions';
import { ArticleDetails, Loader } from '../../components';

class ArticleDetailsContainer extends Component {
  componentDidMount() {
    const { articles, fetchArticlesList } = this.props;

    if (!articles || !articles.length) {
      fetchArticlesList();
    }
  }

  render() {
    // Take the id from the URL
    const {
      articles,
      match: {
        params: { id },
      },
    } = this.props;
    const article =
      articles.length && articles.find((el) => el.id.toString() === id);

    if (!article || !articles.length) {
      return <Loader />;
    }

    return (
      <div className='container'>
        <ArticleDetails key={id} {...article} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles.data,
});

export default connect(mapStateToProps, { fetchArticlesList })(
  ArticleDetailsContainer
);
