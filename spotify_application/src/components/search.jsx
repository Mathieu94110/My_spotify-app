import React, { Component } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import List from '@material-ui/core/List';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchActivated: false,
      tracks: [],
      albums: [],
      artists:[]
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    this.setState({
         searchActivated: false,
      search: e.target.value,
    });
 
  };
  addSearch() {
  
                this.setState({
                  searchActivated: true,
               
                });
               
                let Token = localStorage.accessToken;
                let config = {
                  headers: { Authorization: `Bearer ${Token}` },
                  params: {
                    q: this.state.search,
                    type: "track,album,artist",
                  },
                };
                axios
                  .get("https://api.spotify.com/v1/search", config)
                  .then((res) => {
                    console.log("Search data=",res.data);
                    this.setState({
                      artists: res.data.artists.items,
                      albums: res.data.albums.items,
                      tracks: res.data.tracks.items,
                    });
                  });
              }

  render() {
    let searchActivated = this.state.searchActivated;
 
    if (!searchActivated || this.state.search.length === 0) {
      return (
        <div style={{ position: "relative",textAlign:"center",margin:"auto" }}>
       
          <TextField
            id="outlined-basic"
            label="Album, Titre ou Artiste "
            value={this.state.search}
            onChange={this.handleChange}
          //   style={{marginRight:"20px"}}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={this.addSearch.bind(this)}
          // style={{ position: "absolute", top: "50%", transform:"translateY(-50%)"}}
          >
            Rechercher
          </Button>
          

   
        </div>
      );
    } else if (searchActivated && this.state.search.length >0 ) {
       return (
         <div>
           <div >
  <div>
               <TextField
                 id="outlined-basic"
                 label="Album, Titre ou Artiste "
                 value={this.state.search}
                 onChange={this.handleChange}
                 style={{ marginRight: "20px" }}
               />
               <Button
                 variant="contained"
                 color="secondary"
                 onClick={this.addSearch.bind(this)}
                 
               >
                 Rechercher
             </Button>
      </div>

             

             <div style={{ display: "flex", width: "100%" , height:"80%",overflow: "auto",padding:"25px 0" }}>
               <div style={{height:"480px" }}>
                 <h2>Titres</h2>
                 {this.state.tracks.map((track, index) => {
                   return (
                     <div>
                       <ul>
                     <ListItem textAlign="center" key={index}>
                       <ListItemText primary={track.name}></ListItemText>
                         </ListItem>
                       </ul>
                         </div>
                         
                   );
                 })}
               </div>
               <div style={{ height:"480px" }}>
                 <h2>Album</h2>
                 {this.state.albums.map((album, index) => {
                   return (
                     <div>
                     <ul>
                     <ListItem  key={index}>
                       <ListItemAvatar>
                         <Avatar alt="album image" src={album.images[2].url} />
                       </ListItemAvatar>
                       <ListItemText primary={album.name} />
                     </ListItem>
                     </ul>
                     </div>
                   )
  
                     
                     
                     
                     
                     
                   
                 })}
               </div>

             
             </div>
           </div>
         </div>
       );
    }
   
  }
}
