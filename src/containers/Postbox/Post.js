/**
 * copyright 2019 (C) ELAIYA
 * 
 * created on: May 12, 2019
 * @author: Elaiya Raja E
 * 
 * ---------------------------------------------------------
 * Revision History (Release 1.0.0)
 * ---------------------------------------------------------
 * VERSION | AUTHOR - DATE       | DESCRIPTION OF CHANGE
 * --------------------------------------------------------- 
 * 1.0     | ELAIYA - 12-05-2019 | Inital Creation
 * ---------------------------------------------------------
 * 
 */

//Library Files
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//Redux Action Files
import { fetchPost } from '../../redux/actions/postAction';
//Component File
import Loading from '../../components/Loding/Loding';

class Post extends Component {
  componentDidMount = () => {
    //Fetch post using parameter id
    this.props.fetchPost(this.props.match.params.postId);
  };

  render = () => {
    const post = this.props.post;
    return (
      <div>
        <div className="ui hidden divider" />
        <h1 className="ui icon center aligned header">POST MESSAGE</h1>
        <div className="ui hidden divider" />
        <div className="ui blue inverted table">
          {this.props.status === 'loading' ? (
            <Loading />
          ) : (
            <table>
              <tbody>
                <tr>
                  <th>ID</th>
                  <td>{post.id}</td>
                </tr>
                <tr>
                  <th>USERID</th>
                  <td>{post.userId}</td>
                </tr>
                <tr>
                  <th>TITLE</th>
                  <td>{post.title}</td>
                </tr>
                <tr>
                  <th>BODY</th>
                  <td>{post.body}</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
        <div className="ui hidden divider" />
        <Link to="/" className="ui primary button">Go back</Link>
      </div>
    );
  };
}

const mapStateToProps = state => {
  const postReducer = state.postReducer;
  return {
    post: postReducer.post ? postReducer.post : [],
    status: postReducer.status ? postReducer.status : "",
    errorMessage: postReducer.errorMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: postId => dispatch(fetchPost(postId))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Post);
