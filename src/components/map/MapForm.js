import React, { Component } from 'react';


class MapForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            location: ''
        }
    }

    render() {
        return (
            <form className="ui form">
                <div className="equal width fields">
                    <div className="field">
                        <label for="location">Location</label>
                        <div className="ui input">
                            <input type="text"
                                   placeholder="Location"
                                   id="location"
                                   name="location"
                                   onChange={this.handleChange} />   
                        </div>    
                    </div>    
                </div>
            </form>
        )
    }
}

export default MapForm;





