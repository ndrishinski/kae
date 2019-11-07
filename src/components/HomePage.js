import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <section className="panel banner right">
        <div className="content color0 span-3-75">
          <h1 className="major">Hello, my name <br />
          is KaeLene</h1>
          <p style={{color: '#FFF'}}>I am a Master Holistic Health and Wellness coach. I specialize in helping people who have gone through, or are going through traumatic events to reset their brain so they can live life free of the past, and have a fulfilling future. </p>

        </div>
        <div className="image filtered span-1-75" data-position="25% 25%">
          <img src="/images/kaeportrait.jpg" alt="" />
        </div>
      </section>
    )
  }
}

export default HomePage
