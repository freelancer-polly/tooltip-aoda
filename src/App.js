import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from './actions';
import RenderMember from './RenderMember';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return <RenderMember post={post} key={post._id} />;
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Members</h1>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);