import React, { Component } from 'react';
import MapForm from '../map/MapForm.js';
import GoogleMap from '../map/GoogleMap.js';


class Home extends Component {

    constructor(props) {
        super(props);
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


