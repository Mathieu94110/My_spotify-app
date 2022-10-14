import { useState, useEffect } from "react";
import axios from "axios";
import "./createPlaylist.scss";

const initialFormValues = {
  title: "",
  description: "",
  image: "",
};
export default function createPlaylist({
  handleClick,
  createPlayList,
  playlistImage,
  cancelPlaylistCreation,
  isCreateButtonDisabled,
}) {
  const [albums, setAlbums] = useState([]);
  const [values, setValues] = useState(initialFormValues);
  const [isPlaylistCreated, setIsPlaylistCreated] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (e.target.name === "image") {
      handleClick(e.target.value);
    }
    const { title, description, image } = value;
    console.log("name =", title !== "");
    console.log("dessc =", description === "");
    console.log("image =", image);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const createdPlaylist = { ...values, image: playlistImage };
    createPlayList(createdPlaylist);
    setIsPlaylistCreated(true);
  };

  const reset = () => {
    cancelPlaylistCreation();
    setIsPlaylistCreated(false);
  };

  return (
    <div className="create-playlists-container">
      <div className="create-playlist-title">
        <h2>Créer une playlist</h2>
      </div>
      <div className="create-playlist-form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Nom:
            <input
              type="text"
              id="outlined-basic"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Description:
            <textarea
              type="text"
              id="outlined-basic"
              name="description"
              value={values.description}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Avatar:
            <textarea
              type="text"
              id="outlined-basic"
              name="image"
              placeholder="Rechercher par artiste"
              value={values.image}
              onChange={handleInputChange}
            ></textarea>
          </label>
          {isPlaylistCreated ? (
            <>
              <input
                className="validate-button"
                type="button"
                value="Valider la playlist"
              />
              <input
                className="cancel-button"
                type="button"
                value="Annuler"
                onClick={() => reset()}
              />
            </>
          ) : (
            <input
              className="create-button"
              type="submit"
              value="Créer la playlist"
              disabled={isCreateButtonDisabled}
            />
          )}
        </form>
      </div>
    </div>
    //   <div style={{ height: "480px" }}>

    //     {this.state.albums.map((album, index) => {
    //       return (
    //         <div>
    //           <ul>
    //             <li key={index}>
    //               <div>
    //                 <img alt="album image" src={album.images[2].url} />
    //               </div>
    //               <p>{album.name}</p>
    //             </li>
    //           </ul>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
  );
}

/*
state et api call /


const app = {};

app.getArists = (artist) => $.ajax({
    url: 'https://api.spotify.com/v1/search',
    method: 'GET',
    dataType: 'json',
    data: {
        type: 'artist',
        q: artist
    }
});

app.getAristsAlbums = (id) => $.ajax({
    url: `https://api.spotify.com/v1/artists/${id}/albums`,
    method: 'GET',
    dataType: 'json',
    data: {
        album_type: 'album',
    }
});

app.getAlbumTracks = (id) => $.ajax({
    url: `https://api.spotify.com/v1/albums/${id}/tracks`,
    method: 'GET',
    dataType: 'json'
});

app.getAlbums = function(artists) {
    let albums = artists.map(artist => app.getAristsAlbums(artist.id));
    $.when(...albums)
        .then((...albums) => {
            let albumIds = albums
                .map(a => a[0].items)
                .reduce((prev,curr) => [...prev,...curr] ,[])
                .map(album => app.getAlbumTracks(album.id));

            app.getTracks(albumIds);
        });
};

app.getTracks = function(tracks) {
    $.when(...tracks)
        .then((...tracks) => {
            tracks = tracks
                .map(getDataObject)
                .reduce((prev,curr) => [...prev,...curr],[]);   
            const randomPlayList = getRandomTracks(50,tracks);
            app.createPlayList(randomPlayList);
        })
};

app.createPlayList = function(songs) {
    const baseUrl = 'https://embed.spotify.com/?theme=white&uri=spotify:trackset:My Playlist:';
    songs = songs.map(song => song.id).join(',');
    $('.loader').removeClass('show');
    $('.playlist').append(`<iframe src="${baseUrl + songs}" height="400"></iframe>`);
}

app.init = function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        let artists = $('input[type=search]').val();
        $('.loader').addClass('show');
        artists = artists
            .split(',')
            .map(app.getArists);
        
        $.when(...artists)
            .then((...artists) => {
                artists = artists.map(a => a[0].artists.items[0]);
                console.log(artists);
                app.getAlbums(artists);
            });
    });

}

const getDataObject = arr => arr[0].items;

function getRandomTracks(num, tracks) {
    const randomResults = [];
    for(let i = 0; i < num; i++) {
        randomResults.push(tracks[ Math.floor(Math.random() * tracks.length) ])
    }
    return randomResults;
}

$(app.init);

*/
