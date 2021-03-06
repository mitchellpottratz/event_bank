import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MapForm from '../map/MapForm.js';
import GoogleMap from '../map/GoogleMap.js';
import { setUsersLocation } from '../../actions';


class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        this.getUsersLocation();
        console.log("users location in store:", this.props.usersLocation);
    }

    // gets the users latitude and longitude
    getUsersLocation = () => {
        navigator.geolocation.getCurrentPosition(position => {
            console.log("lat:", position.coords.latitude);
            console.log("lng:", position.coords.longitude);
            const usersLocationObj = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
            // sets the users location in the store
            this.props.setUsersLocation(usersLocationObj);

            this.setState({ isLoading: false });
        });    
    }

    render() {
        return (
            <div className="ui container">
                <h1 className="ui header">Home Page</h1>
                <MapForm />
                {
                this.state.isLoading 
                ? 
                <p>Loading</p>
                : 
                <GoogleMap usersLocation={this.props.usersLocation} />  
                }
            </div>    
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    usersLocation: {
        lat: state.location.lat,
        lng: state.location.lng
    }
})

export default connect(mapStateToProps, { setUsersLocation })(Home);


