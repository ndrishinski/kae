import React from 'react'

import HomePage from './HomePage'
import AboutPage from './AboutPage'
import TreatmentPage from './TreatmentPage'
import ReviewsPage from './ReviewsPage'
import ContactPage from './ContactPage'



export default class Wrapper extends React.Component {
  render() {
    return (
      <div id="page-wrapper">


					<div id="wrapper">
            <HomePage />

            <AboutPage />

            <TreatmentPage />

            <ReviewsPage />

            <ContactPage />


							<div className="copyright">&copy; <a href="https://www.nickdrishinski.com">Nick Drishinski Development 2019</a> <a style={{textDecoration: 'none', color: '#666'}}href="https://html5up.net">HTML5 UP</a>.</div>

					</div>

			</div>
    )

  }
}
