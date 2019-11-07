import React from 'react';

class ReviewsPage extends React.Component {
  render() {
    return (
      <section className="panel spotlight large left">
        <div className="content span-5">
          <h2 className="major">I can help you too</h2>
          <p style={{color: '#FFF'}}>Doing the 6 week health challenge was an absolute life changer. It helped me not only learn about health, fitness, foods, and more, but also helped me balance my life as a whole. I began to feel balanced in my personal and professional life. It was such a neat experience to have a health coach with a fountain of knowledge who is also committed to helping you change your life for the better!</p>
          <p style={{color: '#FFF'}}>-Mark Graves</p>
        </div>
        <div className="image filtered tinted" data-position="top right">
          <img src="images/tatPic.jpg" alt="" />
        </div>
      </section>
    )
  }
}

export default ReviewsPage
