import React from 'react';
import {render} from 'react-dom';
import Posts from './Posts';
import Post from './Post';
import NewPost from './NewPost';
import { Link, Route, Router, browserHistory } from 'react-router';

render((
  <Router history={browserHistory}>
    <Route path="/blog" component={Posts}>
      <Route path="/blog/:postId" component={Post} />        
    </Route> 
    <Route path="/newpost" component={NewPost} /> 
  </Router>
  
), document.getElementById('root'));