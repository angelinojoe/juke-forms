import React from 'react';
import { Link } from 'react-router';


const Sidebar = (props) => {
  //console.log('sidebar:', props.playlists);
  const playlists = props.playlists;
  console.log('playlists', playlists);
  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item">
          <Link to='/albums'>ALBUMS</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to='/artists'>ARTISTS</Link>
        </h4>
      </section>
      <hr />
      <section>
        <h4 className="text-muted">PLAYLISTS</h4>
        <h4>
          <Link className="btn btn-primary btn-block" to={'/playlist'}>
            <span className="glyphicon glyphicon-plus"></span> PLAYLIST
          </Link>
        </h4>
      </section>
      <hr />
      <ul className="list-unstyled">
        { playlists && playlists.map((playlist) => (
          <li className="playlist-item menu-item" key={playlist.id}>
            <Link to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
          </li>
        ))}
      </ul>
    </sidebar>
  );
}

export default Sidebar;
