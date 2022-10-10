import React, { useState, useEffect } from 'react';
import axios from "axios";
import Search from "./search";
import Card from "@material-ui/core/Card";
import CreatePlaylist from "./createPlaylist";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import background_img1 from './images/spotify_homepage_img.jpg';
import {
  setAccessToken,
} from './authentication/authentication';
import {
  selectDisplayName,
  userId
} from './user/userSlice';
import { useSelector } from 'react-redux';
import {
  Navigate,
} from "react-router-dom";

const Home = () => {
  const [playlists, setPlaylists] = useState({});
  const [playlistsLoading, setPlaylistsLoading] = useState(false);


  const userName = useSelector(selectDisplayName);

// const accessToken = tokenObject.payload.authorization.accessToken;

  useEffect(() => {

    const loadData = async () => {
      setPlaylistsLoading(true);
     const result = getUserPlaylists();
     setPlaylists(result);
     setPlaylistsLoading( false);
    }
    loadData();
 
  },[]);

 const getUserPlaylists = () => {
  const user = localStorage.getItem('userId');
  const token = localStorage.getItem('accessToken');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get(
        "https://api.spotify.com/v1/users/" + user + "/playlists",
        config
      )
      .then((response) => {
        setPlaylists(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }


    return (<div>
 
      {playlistsLoading && <div>Loading...</div>}
   
      { playlists && <div> <h1 style={{margin:"2vh auto", color:"gold"}}>Bienvenue {userName}, vous êtes bien connecté sur votre plateforme Spotify</h1>
      <div style={{ display: "flex",justifyContent:"space-around", width: "100%", height:"600px"}}>
            <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
   
  }}>
      <GridList cellHeight={180} style={{width: 500,
    height: 450,}}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Playlists actuelles</ListSubheader>
        </GridListTile>
        {playlists?.items ? playlists.items.map((playlist, index) => (
           <GridListTile key={index}>
                   {playlist.images[0] && (
            <img src={playlist.images[0].url} alt={playlist.title} />)}
            <GridListTileBar
         title={playlist.name}
     
              actionIcon={
                <IconButton aria-label={`Voir titres`} style={{    color: 'rgba(255, 255, 255, 0.54)',}}>
                  <InfoIcon onClick={() =>
                    (window.location =
                      "/playlists?id=" +
                      playlist.id +
                      "&artist=" +
                      playlist.name)} />
                </IconButton>
              }
            />
          </GridListTile>
        )) : null}
      </GridList>

    </div>
        <div style={{ display: "flex", width: "20%", height:"600px" }}>
              <CreatePlaylist />
          </div>
        <div style={{ display: "flex", width: "40%", height:"600px"  }}>
                 <Search />
          </div>
     </div>  

      </div>
    }
    </div>
    )
  }

export default Home;