import React, { Component } from 'react';


class MapForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            location: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }


    render() {
        return (
            <form className="ui form" onSubmit={this.handleSubmit}>
                <div className="equal width fields">
                    <div className="field">
                        <label htmlFor="location">Location</label>
                        <div className="ui input">
                            <input type="text"
                                   placeholder="Location"
                                   id="location"
                                   name="location"
                                   value={this.state.location}
                                   onChange={this.handleChange} />   
                        </div>    
                    </div>    
                </div>
                <input type="submit"
                       className="ui button"
                       value="Search" /> 
            </form>
        )
    }
}

export default MapForm;





