import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ArticleDetails, Loader } from '../../components';
import { fetchArticlesList } from '../../actions';

class ArticleDetailsContainer extends Component {
  componentDidMount() {
    if (!this.props.articles.length) {
      this.props.fetchArticlesList();
    }
  }

  render() {
    // Take the id from the URL
    const { id } = this.props.match.params;
    const article =
      this.props.articles.length &&
      this.props.articles.find((el) => el.id.toString() === id);

    if (!article) {
      return <Loader />;
    }

    return (
      <div className="container">
        <ArticleDetails key={id} {...article} />
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
)(ArticleDetailsContainer);
