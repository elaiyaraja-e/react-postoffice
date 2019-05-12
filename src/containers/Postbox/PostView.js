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
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
//Redux Action File
import {fetchPostView} from '../../redux/actions/postViewAction';
//Component File
import Loading from '../../components/Loding/Loding';

class PostView extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      filterStr: ''
    }
  }

  componentDidMount = () => {
    this.props.fetchPostView();
  }

  handleFilterChange = event => {
    this.setState({
      filterStr: event.target.value
    });
  }

  render = () => {
    const filterStr = this.state.filterStr;
    const filteredPosts = this.props.posts.filter (
      post =>
        post.id.toString().includes(filterStr) ||
        post.userId.toString().includes(filterStr) ||
        post.title.includes(filterStr) ||
        post.body.includes(filterStr)
    );
    const postRows = filteredPosts.map((post, index) => {
      return (
        <tr key={index} >
          <td>
            <Link to={`/posts/${post.id}`}>{post.id}</Link>
          </td>
          <td>
            <Link to={`/posts/${post.id}`}>{post.userId}</Link>
          </td>
          <td>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </td>
          <td>
            <Link to={`/posts/${post.id}`}>{post.body}</Link>
          </td>
        </tr>
      );
    });
      
    return (
      <div>
        <div className="ui hidden divider" />
        <h1 className="ui icon center aligned header">POST BOX</h1>
        <div className="ui hidden divider " />
        <div className="ui fluid icon input">
          <input 
            type = 'text'
            placeholder = 'search posts...'
            value = {this.state.filterStr}
            onChange = {this.handleFilterChange}
          />
          <i aria-hidden="true" class="search icon" />
        </div>
        <div className="ui hidden divider" />
        <div >
          <table className="ui celled blue selectable table">
          <thead>
            <tr>
              <th>ID</th>
              <th>USERID</th>
              <th>TITILE</th>
              <th>BODY</th>
            </tr>
            </thead>
            <tbody>{postRows}</tbody>
          </table>
          <div className="ui hidden divider" />
          {this.props.status === "loading" ? <Loading /> : <React.Fragment />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const postViewReducer = state.postViewReducer;
  return {
    posts: postViewReducer.posts ? postViewReducer.posts : [],
    status: postViewReducer.status,
    errorMessage: postViewReducer.errorMessage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPostView: () => { dispatch(fetchPostView())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostView);