import React, { Component } from 'react';
import Artists from '../components/Artists';
import FilterInput from '../components/FilterInput';

export default class FilterableArtistsContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const value = event.target.value;
    this.setState({
      inputValue: value
    })
  }

  render(){
    const artists = this.props.artists;
    const inputValue = this.state.inputValue;
    const filteredArtist = artists.filter(artist => {
      const name = artist.name.toLowerCase()
      return name.match(inputValue.toLowerCase())
    });

    return (
      <div>
        <FilterInput handleChange={ this.handleChange } />
        <Artists artists={ filteredArtist } />
      </div>
    )
  }
}
