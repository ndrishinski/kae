import React from 'react'

class PhotosPage extends React.Component {
  render() {
    return (
      <section className="panel">
        <div className="intro color2">
          <h2 className="major">Photos</h2>
          <p>Sed vel nibh libero. Mauris et lorem pharetra massa lorem turpis congue pulvinar. Vivamus sed feugiat finibus. Duis amet bibendum amet sed. Duis mauris ex, dapibus sed ligula tempus volutpat magna etiam.</p>
        </div>
        <div className="gallery">
          <div className="group span-3">
            <a href="images/gallery/fulls/01.jpg" className="image filtered span-3" data-position="bottom"><img src="images/gallery/thumbs/01.jpg" alt="" /></a>
            <a href="images/gallery/fulls/02.jpg" className="image filtered span-1-5" data-position="center"><img src="images/gallery/thumbs/02.jpg" alt="" /></a>
            <a href="images/gallery/fulls/03.jpg" className="image filtered span-1-5" data-position="bottom"><img src="images/gallery/thumbs/03.jpg" alt="" /></a>
          </div>
          <a href="images/gallery/fulls/04.jpg" className="image filtered span-2-5" data-position="top"><img src="images/gallery/thumbs/04.jpg" alt="" /></a>
          <div className="group span-4-5">
            <a href="images/gallery/fulls/05.jpg" className="image filtered span-3" data-position="top"><img src="images/gallery/thumbs/05.jpg" alt="" /></a>
            <a href="images/gallery/fulls/06.jpg" className="image filtered span-1-5" data-position="center"><img src="images/gallery/thumbs/06.jpg" alt="" /></a>
            <a href="images/gallery/fulls/07.jpg" className="image filtered span-1-5" data-position="bottom"><img src="images/gallery/thumbs/07.jpg" alt="" /></a>
            <a href="images/gallery/fulls/08.jpg" className="image filtered span-3" data-position="top"><img src="images/gallery/thumbs/08.jpg" alt="" /></a>
          </div>
          <a href="images/gallery/fulls/09.jpg" className="image filtered span-2-5" data-position="right"><img src="images/gallery/thumbs/09.jpg" alt="" /></a>
        </div>
      </section>
    )
  }
}

export default PhotosPage
