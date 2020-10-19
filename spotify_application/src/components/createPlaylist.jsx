import React, { Component } from 'react'
import axios from 'axios'
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

export default class createPlaylist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: ''
        }
    }


    create = () => {
        let access_token = localStorage.access_token;
        let userId = localStorage.id;
        if (access_token && userId) {
            const config = {
                headers: { Authorization: `Bearer ${access_token}` },
            };
            axios.post('https://api.spotify.com/v1/users/' + userId + '/playlists', {
                name: this.state.name,
                description: this.state.description
            }, config).then(res => {
                console.log(res)
            }).catch(e => {
                console.log(e)
            })
        }



    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    render() {
        return (
            <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",margin:'100px auto'}}>
                <TextField
                    id="outlined-basic"
                    label="Nom de la playlist"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    style={{ }}
                />
                <TextField
                    id="outlined-basic"
                    name="description"
                    label="Description de la playlist"
                    value={this.state.description}
                    onChange={this.handleChange}
                    style={{ }}
                />
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={this.create}

                >
                    Créer la playlist
          </Button>
            </div>
        )
    }
}