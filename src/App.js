import React, { Component } from 'react';

import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import TreatmentPage from './components/TreatmentPage'
import ReviewsPage from './components/ReviewsPage'
import PhotosPage from './components/PhotosPage'
import ContactPage from './components/ContactPage'
import ExtraPage from './components/ExtraPage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="page-wrapper">


					<div id="wrapper">



              <HomePage />

						  <AboutPage />

              <TreatmentPage />

              <ReviewsPage />

              <ContactPage />


							<div className="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</div>

					</div>

			</div>

    );
  }
}

export default App;
