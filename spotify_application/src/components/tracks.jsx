import React, { Component } from "react";
import queryString from "query-string";
import axios from "axios";

export default class Tracks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            musics: []
        }
    }
    componentDidMount() {
        let access_token = localStorage.access_token;
        let userId = localStorage.id;
        const params = queryString.parse(this.props.location.search);
        //console.log(params.id)
        const config = {
            headers: {
                Autorization :`Bearer ${access_token}`
            },

        }
        axios.get("https://api.spotify.com/v1/playlists/" + params.id + "/tracks", config)
            .then((res) => {
            console.log(res.data)
        })
    }
    render() {
        return (
            <div>
                {this.state.musics.map((music, index) => {
                    return <div key={index}>{music}</div>
                })}
            </div>
        )
    }
}
