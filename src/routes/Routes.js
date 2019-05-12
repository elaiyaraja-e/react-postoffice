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
import {Switch, Route} from 'react-router-dom';
//Component File
import PostofficeTemplate from '../components/PostofficeTemplate/PostofficeTemplate';
//Container File
import PostView from '../containers/Postbox/PostView';
import Post from '../containers/Postbox/Post';


class Routes extends Component {
    render = () => {
        return (
            <div>
                <PostofficeTemplate>
                    <Switch>
                        <Route exact path="/" render={props => <PostView {...props} />} />
                        <Route path="/posts/:postId" render={props => <Post {...props} />} />
                        <Route render={props => <PostView {...props} />} />
                    </Switch>
                </PostofficeTemplate>
            </div>
        );
    };
}
export default Routes;