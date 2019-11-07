import React from 'react'
import {Link} from 'react-router-dom';
import * as emailjs from 'emailjs-com';

import {db} from '../firebase'

class ContactPage extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      message: '',
      random: '',
      thanks: false
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    const reference = db.collection('messages').doc()

    reference.set({
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    })
    .then(() => {
      emailjs.send('gmail', 'template_eI6EgBsF', this.state, 'user_KVQV9K4LUYkyGmTCAe5Hb')
       .then((response) => {
          // console.log('SUCCESS!', response.status, response.text);
          console.log('success')
       }, (err) => {
          // console.log('FAILED...', err);
          console.log('failed')
       });
    })
    .then(() => {
      this.setState({
        name: '',
        email: '',
        message: '',
        thanks: true
      })
    })

  }

   handleGay(e) {
     this.setState({
       random: e.target.value
     })
   }

   handleThing(e) {
     if(e.keyCode == 32 ) {
       if (e.target.name == 'name') {
         let thing = this.state.name
         console.log(thing)
         thing += ' '
         this.setState({
           name: thing
         })
         thing = ''
       }  else {
         let thing3 = this.state.message
         thing3 += ' '
         this.setState({
           message: thing3
         })
         thing3 = ''
       }
     }

   }

   // <span><h2 style={{padding: 20}}>Check Out My Blog!</h2>
   // <li><Link to="/blog" className="button primary color1 circle icon fa-angle-right"></Link></li>
   // </span>



  render() {
    return (
      <section onKeyDown={(e) => this.handleThing(e)} className="panel color4-alt">
        <div className="intro color4">


          <h2 className="major">Contact</h2>
          <p style={{color: '#FFF'}}>If you're ready to find peace and wellness, submit a message and let's start today!</p>

        </div>

        <div className="inner columns divided">
          <div className="span-3-25">

            {this.state.thanks && <h2>Thank You</h2>}

            <form name="contactForm" onSubmit={(e) => this.handleSubmit(e)} style={{color: '#FFF'}}>
              <div className="fields">
                <div className="field half">
                  <label for="name">Name</label>
                  <input type="text" name="name" id="name" onChange={this.handleChange.bind(this)} value={this.state.name} />
                </div>
                <div className="field half">
                  <label for="email">Email</label>
                  <input type="email" name="email" id="email" onChange={this.handleChange.bind(this)} value={this.state.email} />
                </div>
                <div className="field">
                  <label for="message">Message</label>
                  <textarea name="message" id="message" rows="4" onChange={this.handleChange.bind(this)} value={this.state.message} />
                </div>
              </div>
              <ul className="actions">
                <li><input type="submit" value="Send Message" className="button primary" /></li>
              </ul>
            </form>
          </div>
          <div className="span-1-5">
              <img src="/images/certified.jpg" height="250" width="250" style={{borderRadius: 10, margin: 20, paddingRight: 10, boxShadow: 1}}alt="" />
            <ul className="contact-icons color1">
              <li className="icon fa-facebook"><a href="https://www.facebook.com/groups/182745029182811/">Join my Facebook group</a></li>
              <li className="icon fa-instagram"><a href="https://www.instagram.com/mkaelene/">Follow me on Instagram</a></li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default ContactPage
