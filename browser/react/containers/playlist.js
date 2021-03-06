import React, { Component } from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';


export default class Playlist extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      hasChanged: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

//PASS IN
  handleSubmit(event){
    this.props.postPlaylist(this.state.inputValue);
    this.setState({
      inputValue: '',
      hasChanged: false
    })
    event.preventDefault();
  }

  handleChange(event){
    const value = event.target.value;
    this.setState({
      inputValue: value,
      hasChanged: true
    })
  }




  render(){
    const empty = this.state.hasChanged && this.state.inputValue.length === 0;
    const tooLong = this.state.inputValue.length > 16;
    const validation = empty || tooLong;
    return (
      <div>
        { empty ? <h5>Playlist name cannot be empty!</h5> : null }
        { tooLong ? <h5>Playlist name cannot be  longer than 16 characters!</h5> : null }
      <NewPlaylist
        handleSubmit={ this.handleSubmit }
        handleChange={ this.handleChange }
        startingValue={ this.state.inputValue }
        isLengthValid={ validation }
        />
    </div>
    )
  }

}
