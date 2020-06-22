import React, { Component } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Input } from "@material-ui/core";
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
      search: e.target.value,
    });
    console.log(this.state.search);
  };
  addSearch() {
                this.setState({
                  searchActivated: true,
                });
                //Aut q= +keywords +type
                let access_token = localStorage.access_token;
                let config = {
                  headers: { Authorization: `Bearer ${access_token}` },
                  params: {
                    q: this.state.search,
                    type: "track,album,artist",
                  },
                };
                axios
                  .get("https://api.spotify.com/v1/search", config)
                  .then((res) => {
                    console.log(res.data);
                    this.setState({
                      artists: res.data.artists.items,
                      albums: res.data.albums.items,
                      tracks: res.data.tracks.items,
                    });
                  });
              }

  render() {
    let searchActivated = this.state.searchActivated;
    let button;
    if (!searchActivated) {
      return (
        <div style={{position:"relative"}}>
       
            <TextField
              id="outlined-basic"
              label="Album, Titre ou Artiste "
              value={this.state.search}
              onChange={this.handleChange}
              style={{marginRight:"20px"}}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={this.addSearch.bind(this)}
            style={{ position: "absolute", top: "50%", transform:"translateY(-50%)"}}
            >
              Rechercher
          </Button>
          

   
        </div>
      );
    } else {
       return (
         <div>
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
      

             

             <div style={{ display: "flex", width: "100%" }}>
               <div style={{ width: "30%", marginLeft: "5%",textAlign: "center", maxHeight: "600px", overflow: 'auto' }}>
                 <h2>Titres</h2>
                 {this.state.tracks.map((track, index) => {
                   return (
                     <List>
                       <ul>
                     <ListItem textAlign="center" key={index}>
                       <ListItemText primary={track.name}></ListItemText>
                         </ListItem>
                       </ul>
                         </List>
                         
                   );
                 })}
               </div>
               <div style={{ width: "30%" ,textAlign: "center", maxHeight: "600px", overflow: 'auto' }}>
                 <h2>Album</h2>
                 {this.state.albums.map((album, index) => {
                   return (
                     <List>
                     <ul>
                     <ListItem  key={index}>
                       <ListItemAvatar>
                         <Avatar alt="album image" src={album.images[2].url} />
                       </ListItemAvatar>
                       <ListItemText primary={album.name} />
                     </ListItem>
                     </ul>
                     </List>
                   )
  
                     
                     
                     
                     
                     
                   
                 })}
               </div>

               <div style={{ width: "30%", marginRight: "5%",textAlign: "center", maxHeight: "600px", overflow: 'auto' }}>
                 <h2>Artiste(s)</h2>
                 {this.state.artists.map((artist, index) => {
                   return (
                     <List>
                       <ul>
                     <ListItem textAlign="center" key={index}>
             
                       <ListItemText primary={artist.name} />
                         </ListItem>
                        
                       </ul>
                     </List>
                   );
                 })}
               </div>
             </div>
           </div>
         </div>
       );
    }
   
  }
}
