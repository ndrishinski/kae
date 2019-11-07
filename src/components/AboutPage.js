import React from 'react'

class AboutPage extends React.Component {
  render() {
    return (
      <section className="panel spotlight medium right" id="first">
        <div className="content span-7">
          <h2 className="major">About Me</h2>
          <p style={{color: '#FFF'}}>I am a Master Health and Wellness Coach. I have degrees in Feng Shui, a Masters of Science in Psychology, Master of Herbology, Reiki Master, Art Therapy, Yoga Instructor. These degrees set me apart from other coaches; allowing me to use multiple modalities when needed. It also allows me to specialize in many areas. My main specialties are in helping people reset their brain from traumatic events and overcoming fears. I do coaching for businesses, groups, individuals through skype and phone calls.</p>
        </div>
        <div className="image filtered tinted" data-position="top left">
          <img src="/images/aboutMe.jpg" alt="" />
        </div>
      </section>
    )
  }
}

export default AboutPage
