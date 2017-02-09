import React, { Component } from 'react';
import Songs from './Songs';

export default class SinglePlaylist extends Component {

    componentDidMount(){
        const playlistId = this.props.routeParams.playlistId;
        this.props.selectPlaylist(playlistId);
    }

    render(){
        return (
    <div>
        <h3>{ this.props.selectedPlaylist.name }</h3>
        <Songs songs={this.props.selectedPlaylist.songs} />
        { this.props.selectedPlaylist.songs && !this.props.selectedPlaylist.songs.length && <small>No songs.</small> }
        <hr />
    </div>);
}
}
