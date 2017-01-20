import React from 'react';
import {render} from 'react-dom';
import Posts from './Posts';
import Post from './Post';
import NewPost from './NewPost';
import { Link, Route, Router, browserHistory } from 'react-router';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Posts}>
      <Route path="/:postId" component={Post} />
      <Route path="/newpost" component={NewPost} />    
    </Route>        
  </Router>
  
), document.getElementById('root'));