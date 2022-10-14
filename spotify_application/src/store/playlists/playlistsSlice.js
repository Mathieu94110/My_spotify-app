// import { createSlice } from "@reduxjs/toolkit";

// const initialPlaylistState = {
//   playlistsItems: [],
//   total: 0,
// };

// const initialCreatedPlaylist = {
//   name: "",
//   description: "",
//   uri: "",
// };

// export const playlistsSlice = createSlice({
//   name: "playlists",
//   initialPlaylistState,
//   reducers: {
//     setPlaylistsItem: (state, action) => {
//       state.playlistsItems = action.payload;
//     },
//     setTotal: (state, action) => {
//       state.total = action.payload;
//     },
//   },
// });

// export const createdPlaylistsSlice = createSlice({
//   name: "createdPlaylists",
//   initialCreatedPlaylist,
//   reducers: {
//     setPlaylistName: (state, action) => {
//       state.name = action.payload;
//     },
//     setPlaylistDescription: (state, action) => {
//       state.description = action.payload;
//     },
//     setPlaylistUri: (state, action) => {
//       state.uri = action.payload;
//     },
//   },
// });

// export const { setPlaylistsItem, setTotal } = playlistsSlice.actions;

// export const { setPlaylistName, setPlaylistDescription, setPlaylistUri } =
//   createdPlaylistsSlice.actions;

// export const selectplaylistsItems = (state) => state.playlists.playlistsItems;
// export const selectplaylistsTotal = (state) => state.playlists.total;

// // export const selectCreatedplaylistName = (state) => state.createdPlaylists.playlistsItems;
// // export const selectCreatedplaylistDescription = (state) => state.createdPlaylists.total;
// // export const selectCreatedplaylistUri = (state) => state.created-playlistsPlaylistsItems;

// export const getUserPlaylists = () => (dispatch) => {
//   const accessToken = localStorage.getItem("accessToken");
//   const userId = localStorage.getItem("userId");

//   const myHeaders = new Headers();
//   myHeaders.append("Authorization", "Bearer " + accessToken);

//   fetch("https://api.spotify.com/v1/users/" + userId + "/playlists", {
//     method: "GET",
//     headers: myHeaders,
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       dispatch(setPlaylistsItem(data.items));
//       dispatch(setTotal(data.total));
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// export const CreatePlaylist = (value) => (dispatch) => {
//   console.log(value);
//   let accessToken = localStorage.getItem("accessToken");
//   let userId = localStorage.getItem("userId");
//   const config = {
//     headers: { Authorization: `Bearer ${accessToken}` },
//   };

//   fetch("https://api.spotify.com/v1/users/" + userId + "/playlists", {
//     method: "Post",
//     headers: myHeaders,
//   });
//   axios
//     .post(
//       "https://api.spotify.com/v1/users/" + userId + "/playlists",
//       {
//         name: name,
//         description: description,
//         images: [
//           {
//             KEY: "image_description",
//             height: 640,
//             url: `${JSON.stringify(albums)}`,
//             width: 640,
//           },
//         ],
//       },
//       config
//     )
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// };

// export default playlistsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlistsItems: [],
  total: 0,
};

export const playlistsSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    setPlaylistsItem: (state, action) => {
      state.playlistsItems = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const { setPlaylistsItem, setTotal } = playlistsSlice.actions;

export const selectplaylistsItems = (state) => state.playlists.playlistsItems;
export const selectplaylistsTotal = (state) => state.playlists.total;

export const getUserPlaylists = () => (dispatch) => {
  const accessToken = localStorage.getItem("accessToken");
  const userId = localStorage.getItem("userId");

  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer " + accessToken);

  fetch("https://api.spotify.com/v1/users/" + userId + "/playlists", {
    method: "GET",
    headers: myHeaders,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      dispatch(setPlaylistsItem(data.items));
      dispatch(setTotal(data.total));
    })
    .catch((error) => {
      console.log(error);
    });
};

export default playlistsSlice.reducer;
