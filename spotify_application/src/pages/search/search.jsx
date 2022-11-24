import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchResult from '../../components/search/searchResult/SearchResult';
import AddTrackModal from '../../components/modal/AddTrackModal';
import './Search.scss';
import {
  selectplaylistsItems,
  addTrackToPlaylist,
} from '../../store/playlists/playlistsSlice';
import { getPlaylists } from '../../store/playlists/playlists.actions';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Search = () => {
  const accessToken = localStorage.getItem('accessToken');
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  // const [trackUri, setTrackUri] = useState("");
  const [track, setTrack] = useState('');
  const playlists = useSelector(selectplaylistsItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlaylists());
  }, []);

  const isModalOpen = (value) => {
    setTrack(value);
    return setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!search) return setSearchResults([]);

    let config = {
      headers: { Authorization: `Bearer ${accessToken}` },
      params: {
        q: search,
        type: 'track',
      },
    };
    axios.get('https://api.spotify.com/v1/search', config).then((res) => {
      setSearchResults(
        res.data.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            },
            track.album.images[0]
          );
          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          };
        })
      );
    });
  }, [search]);

  const addTrack = (track, checkedPlaylist) => {
    const { title, uri, ...trackRest } = track;
    const { id, name, ...playlistRest } = checkedPlaylist;

    dispatch(addTrackToPlaylist({ uri, id }))
      .then(() => {
        toast.success(`${title} a bien été ajouté à ${name} !`, {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((error) => {
        toast.error(`${error.message} !`, {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .finally(() => {
        isModalOpen();
      });
  };

  return (
    <div className="search">
      <input
        className="search__input"
        type="search"
        placeholder="Rechercher un titre"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchResult searchResults={searchResults} modalCallback={isModalOpen} />

      {isOpen && (
        <AddTrackModal
          setIsOpen={isModalOpen}
          playlists={playlists}
          // trackUri={trackUri}
          track={track}
          addTrackToPlaylist={addTrack}
        />
      )}
      {/* Tag below is necessary to display toast message*/}
      <ToastContainer />
    </div>
  );
};

export default Search;
