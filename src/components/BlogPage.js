import React from 'react'
import {Link} from 'react-router-dom'

import {db} from '../firebase'

class BlogPage extends React.Component {
  state = {
    blogs: [],
    firstBlog: '',
    allowEdit: 'true'
  }

  componentDidMount() {
    db
      .collection('blogs')
      // .onSnapshot(blog => {
      //   let tempBlog = blog.docs.map(item => {
      //     this.setState({ blogs: item.data()})
      //   })
      // })
      .onSnapshot(blog => {
        this.setState({firstBlog: blog.docs[0].data()})
      })

      // console.log(this.state.firstBlog)
  }

  handleBlogEdit(e) {
    this.setState({
      firstBlog: {
        body: e.target.value
      }
    })
  }

  submitChanges() {
    const reference = db.collection('blogs').doc();

      reference.set({
        id: reference.id,
        body: this.state.firstBlog.body
      })
    // db
    //   .doc('blogs/' + this.state.firstBlog.id)
    //   .set({body: this.state.firstBlog.body})
    //   .then((res) => console.log(res))
  }


  render() {


    return (
      <div id="" style={styles.myContainer}>

        <div style={styles.tem}>
          {this.state.firstBlog && <h2>{this.state.firstBlog.title}</h2>}
          <Link className="btn btn-primary" to="/">Home Page</Link>
        </div>

        <div style={styles.post}>
          <div style={styles.blogPicker}>
            <p>Blogs:</p>
            <ul>
              <li>Here is a post</li>
              <li>Here is a post</li>
              <li>Here is a post</li>
              <li>Here is a post</li>
              <li>Here is a post</li>
              <li>Here is a post</li>
              <li>Here is a post</li>
              <li>Here is a post</li>
              <li>Here is a post</li>
              <li style={{whiteSpace: 'pre-line'}}>Here is a post</li>
            </ul>
          </div>

          <p onClick={() => this.setState({allowEdit: 'false'})}>Turn False</p>
          <p onClick={() => this.submitChanges()}>Update</p>


            // .replace(/(?:\\r)?\\n/g, '<br/>')
          <div contenteditable={this.state.allowEdit} style={styles.blogPost} onChange={(e) => this.handleBlogEdit(e)}>
              <textarea className="blogPost" value="/n \n Hey there '\n' <br/> hey there ">
              {this.state.firstBlog && <pre>{this.state.firstBlog.body}</pre>}
              </textarea>
          </div>



        </div>
      </div>
      )
  }
}

const styles = {
  myContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    // justifyContent:'center',
    // alignItems:'center',
    // flex: 1
  },
  tem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '350px',
    backgroundColor: 'lightBlue'
  },

  post: {
    display: 'flex'
  },

  blogPicker: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: '35%'
  },

  blogPost: {
    backgroundColor: 'yellow',
    // height: '400px',
    // flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flexBasis: '65%',
    whiteSpace: 'pre'
  }

}

export default BlogPage
