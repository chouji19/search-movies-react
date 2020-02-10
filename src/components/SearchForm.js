import React, {Component} from 'react';

const API_KEY = 'e40399b6'

export class SearchForm extends Component
{
  state = { inputMovie: ''}

  _handleChange = (e) => {
    this.setState({inputMovie: e.target.value})
  }

  _handlerSubmit = (e) => {
    e.preventDefault();
    const {inputMovie} = this.state
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
      .then(res => res.json())
      .then(results => {
        const { Search = [], totalResult='0'} = results
        console.log({ Search, totalResult})
        this.props.onResults(Search )
      })
  }

  render(){
    return (
      <form onSubmit={this._handlerSubmit} >
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              onChange={this._handleChange}
              type="text"
              placeholder="Movie to search..." />
          </div>
          <div className="control">
            <button className="button is-info">
              Search
            </button>
          </div>
        </div>
      </form>
    )
  }
}
