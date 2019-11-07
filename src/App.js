import React, { Component } from 'react';
import {BrowserRouter as Router,
        Switch,
        Route
} from 'react-router-dom';

import Wrapper from './components/Wrapper'

import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import TreatmentPage from './components/TreatmentPage'
import ReviewsPage from './components/ReviewsPage'
import PhotosPage from './components/PhotosPage'
import ContactPage from './components/ContactPage'
import ExtraPage from './components/ExtraPage'
import BlogPage from './components/BlogPage'
import './App.css';

import {db} from './firebase'

class App extends Component {
  componentDidMount() {

      // db
      //   .collection('blogs')
      //   .get()
      //   .then(res => console.log(res))
  }

  // <Route path="/blog" component={BlogPage} />

  render() {
    return (

        <Router>
          <Switch>
            <Route exact path="/" component={Wrapper} />

          </Switch>
        </Router>

    );
  }
}

export default App;
