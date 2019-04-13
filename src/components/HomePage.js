import React from 'react';

class HomePage extends React.Component {
  render() {
    return (
      <section className="panel banner right">
        <div className="content color0 span-3-75">
          <h1 className="major">Hello, my name<br />
          is Ethereal</h1>
          <p>This is <strong>Ethereal</strong>, a free site template by AJ for <a href="https://html5up.net">HTML5 UP</a>. It’s fully responsive, built on HTML5 and CSS3, and released entirely for free under the Creative Commons license. Hope you dig it :)</p>
          <ul className="actions">
            <li><a href="#first" className="button primary color1 circle icon fa-angle-right">Next</a></li>
          </ul>
        </div>
        <div className="image filtered span-1-75" data-position="25% 25%">
          <img src="images/pic01.jpg" alt="" />
        </div>
      </section>
    )
  }
}

export default HomePage
