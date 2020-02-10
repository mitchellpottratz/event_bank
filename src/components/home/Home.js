import React, { Component } from 'react';
import GoogleMap from '../map/GoogleMap.js';


class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ui container">
                <h1 className="ui header">Home Page</h1>
                <GoogleMap />
            </div>    
        )
    }
}

export default Home;


