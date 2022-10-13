import { useState } from "react";
import axios from "axios";
import "./createPlaylist.scss";

const initialFormValues = {
  name: "",
  description: "",
  image: "",
};
export default function createPlaylist({ handleClick }) {
  const [albums, setAlbums] = useState([]);
  const [values, setValues] = useState(initialFormValues);

  const searchImage = () => {
    let accessToken = localStorage.getItem("accessToken");
    let config = {
      headers: { Authorization: `Bearer ${accessToken}` },
      params: {
        q: description,
        type: "album",
        limit: 3,
      },
    };
    axios.get("https://api.spotify.com/v1/search", config).then((res) => {
      console.log("create Playlists =", res.data);
      setAlbums(res.data.albums.items[0].images[0].url);
      alert(JSON.stringify(this.state.albums));
    });
  };

  const create = () => {
    let accessToken = localStorage.getItem("accessToken");
    let userId = localStorage.getItem("userId");
    if (accessToken && userId) {
      const config = {
        headers: { Authorization: `Bearer ${accessToken}` },
      };
      axios
        .post(
          "https://api.spotify.com/v1/users/" + userId + "/playlists",
          {
            name: name,

            description: description,
            images: [
              {
                KEY: "image_description",
                height: 640,
                url: `${JSON.stringify(albums)}`,
                width: 640,
              },
            ],
          },
          config
        )
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (e.target.name === "image") {
      handleClick(e.target.value);
    }
  };
  return (
    <div className="create-playlists-container">
      <div className="create-playlist-title">
        {" "}
        <h2>Créer une playlist</h2>
      </div>
      <div className="create-playlist-form-container">
        <form>
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
            Image:
            <textarea
              type="text"
              id="outlined-basic"
              name="image"
              placeholder="Rechercher par artiste"
              value={values.image}
              onChange={handleInputChange}
            />
            handleInputChange
          </label>
          <button variant="contained" color="secondary" onClick={searchImage}>
            Valider l'album
          </button>
          <button variant="contained" color="secondary" onClick={create}>
            Créer la playlist
          </button>
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
