import React, { Component } from 'react';

export default class SinglePlaylist extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const playlistId = this.props.routeParams.playlistId;
        this.props.selectPlaylist(playlistId);
    }

    render(){
    <div>
        <h3>{ this.props.selectedPlaylist.name }</h3>
        <Songs songs={this.props.selectedPlaylist.songs} /> {/** Hooray for reusability! */}
        { this.props.selectedPlaylist.songs && !this.props.selectedPlaylist.songs.length && <small>No songs.</small> }
        <hr />
    </div>
}
}
