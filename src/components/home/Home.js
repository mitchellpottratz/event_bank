import React, { Component } from 'react';
import MapForm from '../map/MapForm.js';
import GoogleMap from '../map/GoogleMap.js';


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            usersLocation: {
                lat: 0,
                lng: 0
            }
        }
    }

    componentDidMount() {
        this.getUsersLocation();
    }

    // gets the users latitude and longitude
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
        return (
            <div className="ui container">
                <h1 className="ui header">Home Page</h1>
                <MapForm />
                <GoogleMap />
            </div>    
        )
    }
}

export default Home;


