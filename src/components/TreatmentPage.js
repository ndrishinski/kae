import React from 'react';

class TreatmentPage extends React.Component {
  render() {
    return (
      <section className="panel color1">
        <div className="intro joined">
          <h2 className="major">It's about balance...</h2>
          <p style={{color: '#FFF'}}>Life is something that should be lived. Find a balance that makes YOU happy.</p>
        </div>
        <div className="inner">
          <ul className="grid-icons three connected">
            <li><span className="icon fa-heartbeat"><span className="label">Lorem</span></span></li>
            <li><span className="icon fa-camera-retro"><span className="label">Ipsum</span></span></li>
            <li><span className="icon fa-fire"><span className="label">Dolor</span></span></li>
            <li><span className="icon fa-leaf"><span className="label">Sit</span></span></li>
            <li><span className="icon fa-moon-o"><span className="label">Amet</span></span></li>
            <li><span className="icon fa-tint"><span className="label">Nullam</span></span></li>
          </ul>
        </div>
      </section>
    )
  }
}

export default TreatmentPage
