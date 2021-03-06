import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { ButtonBackToHome } from '../components/ButtonBackToHome'

const API_KEY = 'e40399b6'

export class Detail extends Component {

  state = { movie: {}}

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  _fetchMovie({movieId}){
    console.log(movieId);
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`)
      .then(res => res.json())
      .then(movie => {
        this.setState({ movie })
        console.log({movie});
      })

  }

_goBack(){
  window.history.back()
}

  componentDidMount(){

    const {movieId} = this.props.match.params
    console.log(`MovieId: ${movieId}`);
    this._fetchMovie({movieId});
  }

  render(){
    const {Title, Poster, Actors, Metascore, Plot} =  this.state.movie
    return (<div>
        <ButtonBackToHome/>
          <h1>{Title}</h1>
          <img src={Poster} alt={Title}></img>
          <h3>{Actors}</h3>
          <span>{Metascore}</span>
          <p>{Plot}</p>
        </div>)
  }
}
