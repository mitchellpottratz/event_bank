import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


export class GoogleMap extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Map 
                google={this.props.google}
                style={{
                    width: "80%",
                    height: "100%"
                }}
                zoom={14}  
                initialCenter={this.state.usersLocation} />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(GoogleMap);
