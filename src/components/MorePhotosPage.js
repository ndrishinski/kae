import React from 'react'

class MorePhotosPage extends React.Component {
  render() {
    return (
      <section className="panel color4-alt">
        <div className="intro color4">
          <h2 className="major">Contact</h2>
          <p>Sed vel nibh libero. Mauris et lorem pharetra massa lorem turpis congue pulvinar. Vivamus sed feugiat finibus. Duis amet bibendum amet sed. Duis mauris ex, dapibus sed ligula tempus volutpat magna etiam.</p>
        </div>
        <div className="inner columns divided">
          <div className="span-3-25">
            <form method="post" action="#">
              <div className="fields">
                <div className="field half">
                  <label for="name">Name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                  <label for="email">Email</label>
                  <input type="email" name="email" id="email" />
                </div>
                <div className="field">
                  <label for="message">Message</label>
                  <textarea name="message" id="message" rows="4"></textarea>
                </div>
              </div>
              <ul className="actions">
                <li><input type="submit" value="Send Message" className="button primary" /></li>
              </ul>
            </form>
          </div>
          <div className="span-1-5">
            <ul className="contact-icons color1">
              <li className="icon fa-twitter"><a href="#">@untitled-tld</a></li>
              <li className="icon fa-facebook"><a href="#">facebook.com/untitled</a></li>
              <li className="icon fa-snapchat-ghost"><a href="#">@untitled-tld</a></li>
              <li className="icon fa-instagram"><a href="#">@untitled-tld</a></li>
              <li className="icon fa-medium"><a href="#">medium.com/untitled</a></li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default MorePhotosPage
