import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class ArticleSearch extends Component {
  constructor() {
    super();
    this.state = {
      author:'',
      published_date:'',
      credibity_rating:'',
      SE_method: '',
      reasearch_method:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      author: this.state.author,
      published_date: this.state.published_date,
      credibity_rating: this.state.credibity_rating,
      SE_Method: this.state.SE_method,
      Reasearch_method: this.state.Reasearch_method
    };

    axios
      .get('ArticleSearch', data)
      .then(res => {
        this.setState({
          author:'',
          published_date:'',
          credibity_rating:'',
          SE_Method: '',
          Reasearch_method:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in Createarticles!");
      })
      const { MongoClient } = require("mongodb");
      // Replace the uri string with your MongoDB deployment's connection string.
      const uri =
        "mongodb+srv://FelixN:v@kEw*6JzY7z@mern-tutorial.6aeat.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
      const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      async function run() {
        try {
          await client.connect();
          const database = client.db("myFirstDatabase");
          const articles = database.collection("articles");
          // query for articles that have a runtime less than 15 minutes
          const query = { author: "author" };
          const options = {
            // sort returned documents in ascending order by title (A->Z)
            sort: { title: 1 },
          // Include only the `title` and `imdb` fields in each returned document
            projection: { _id: 0, titles: 1, author: 1, published_date: 1, credibity_rating: 1, SE_method: 1, reasearch_method: 1, updated_date: 0, __v: 0 },
          };
          const cursor = articles.find(query, options);
          // print a message if no documents were found
          if ((await cursor.count()) === 0) {
            console.log("No documents found!");
          }
          // replace console.dir with your callback to access individual elements
          await cursor.forEach(console.dir);
        } finally {
          await client.close();
        }
      }
      run().catch(console.dir);
  };

  render() {
    return (
      <div className="ArticleSearch">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Article List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Search</h1>
              <p className="lead text-center">
                  Options
              </p>

              <form noValidate onSubmit={this.onSubmit}>

              <div className='form-group'>
                  <input
                    type='text'
                    placeholder='author'
                    name='author'
                    className='form-control'
                    value={this.state.author}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <label>Start between date</label>
                  <input
                    type='date'
                    placeholder='Start between date'
                    name='published_date'
                    className='form-control'
                    value={this.state.published_date}
                    onChange={this.onChange}
                  />
                  </div>
                  
                  <div className='form-group'>
                  <label>End between date</label>
                  <input
                    type='date'
                    placeholder='End between date'
                    name='published_date'
                    className='form-control'
                    value={this.state.published_date}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='number' 
                    min="1" 
                    max="5"
                    placeholder='Credibity rating'
                    name='credibity_rating'
                    className='form-control'
                    value={this.state.credibity_rating}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='SE Method'
                    name='SE_method'
                    className='form-control'
                    value={this.state.SE_method}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Reasearch method'
                    name='reasearch_method'
                    className='form-control'
                    value={this.state.reasearch_method}
                    onChange={this.onChange}
                  />
                </div>


                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>

        
          </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default ArticleSearch;


