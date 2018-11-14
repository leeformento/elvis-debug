import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Posts from './Posts'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
      // EditedPost: {
      //   title: '',
      //   contents: '',
      // }
    };
  }

  componentDidMount() {
    axios
      .get('https://fierce-temple-45645.herokuapp.com/api/posts')
      .then(response => this.setState({ posts: response.data }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App2">
      <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;

// heroku create --buildpack mars/create-react-app (static version)
// git push heroku master