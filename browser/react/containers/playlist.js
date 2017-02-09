import React, { Component } from 'react';
import NewPlaylist from '../components/NewPlaylist';


export default class Playlist extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: ''
    }
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(event){
    const value = event.target.value;
    this.setState({
      inputValue: value
    })
  }

  render(){
    console.log('formval', this.state.inputValue);
    return <NewPlaylist formSubmit={this.formSubmit}/>
  }

}
