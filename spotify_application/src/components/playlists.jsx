import React, { Component } from "react";
import queryString from "query-string";
import axios from "axios";
import NewPlaylist from "./newPlaylist"


export default class Playlists extends Component {
                 constructor(props) {
                   super(props);
                   this.state = {
                     musics: [],
                     artist:"",
                     playListId: null,
                   };
                 }
                 componentDidMount() {
                   let access_token = localStorage.access_token;
                   const config = {
                     headers: {
                       Authorization: `Bearer ${access_token}`,
                     },
                   };
                   const params = queryString.parse(this.props.location.search);
                   this.setState({ playListId: params.id });
                   console.log("PARAMS", params);
                   axios
                     .get(
                       "https://api.spotify.com/v1/playlists/" +
                         params.id +
                         "/tracks",
                       config
                     )
                     .then((res) => {
                       console.log(res.data.items);
                       console.log(res.data.items[0].track.artists[0].name);
                       this.setState({ musics: res.data.items });
                       this.setState({
                         artist: res.data.items[0].track.artists[0].name,
                       });
                     });
                 }

                 // <div>{this.state.musics[0].track.artists[0].name}</div>

                 render() {
                   return (
                     <div>
                       <h1>{this.state.artist}</h1>
                       <div>
                         <NewPlaylist playListId={this.state.playListId} />

                         <div>
                           {this.state.musics.map((music, index) => {
                             return (
                               <div
                                 key={index}
                                 style={{
                                   display: "flex",
                                   flexDirection: "column",
                                   justifContent: "space-between",
                                   height: "50px",
                                 }}
                               >
                                 {music.track.name}
                               </div>
                             );
                           })}
                         </div>
                       </div>
                     </div>
                   );
                 }
               }
