import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


export class GoogleMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usersLocation: {
                lat: 0,
                lng: 0
            },
            isLoading: true
        }
    }

    componentDidMount() {
        this.getUsersLocation();
    }

    // uses the google api to get the users current location so it can 
    // be marked on the map
    getUsersLocation = () => {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                usersLocation: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                },
                isLoading: false
            })
        })    
    }

    render() {
        if (this.state.isLoading) {
            return null;
        } 

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
