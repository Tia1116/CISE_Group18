import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class ArticleSearch extends Component {
  constructor() {
    super();
    this.state = {
      author:''
      // published_date:'',
      // credibity_rating:'',
      // SE_method: '',
      // reasearch_method:''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      author: this.state.author
      // published_date: this.state.published_date,
      // credibity_rating: this.state.credibity_rating,
      // SE_Method: this.state.SE_method,
      // Reasearch_method: this.state.Reasearch_method
    };

    axios
      .get('ArticleSearch', data)
      .then(res => {
        this.setState({
          author:''
          // published_date:'',
          // credibity_rating:'',
          // SE_Method: '',
          // Reasearch_method:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in Createarticles!");
      })
      ArticleSearch.articles.find( { author: "author" } );
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

                {/* <div className='form-group'>
                  <input
                    type='date'
                    placeholder='published_date'
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
                </div> */}


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

