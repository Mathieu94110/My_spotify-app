import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SongRow from '../../components/playlists/PlaylistDetails/SongRow/SongRow';
import { connect } from 'react-redux';
import { getPlaylistItems } from '../../store/actions';
import {
  getPlaylistsIsLoadingSelector,
  getPlaylistsItemsListSelector,
} from '../../store/selectors';
import Loading from '../../utils/Loading';
import './PlaylistDetails.scss';

const PlaylistDetails = (props) => {
  const { id, name } = useParams();

  useEffect(() => {
    props.getPlaylistItems(id);
  }, []);

  return (
    <div className="playlistDetails">
      <h1>{name}</h1>
      {props.isLoading ? (
        <Loading />
      ) : (
        <div className="playlistDetails__tracks">
          {props.userPlaylistTracks?.map((item) => (
            <SongRow key={item.track.id} track={item.track} />
          ))}
        </div>
      )}
    </div>
  );
};
export default connect(
  (state) => ({
    isLoading: getPlaylistsIsLoadingSelector(state),
    userPlaylistTracks: getPlaylistsItemsListSelector(state),
  }),
  {
    getPlaylistItems,
  }
)(PlaylistDetails);
