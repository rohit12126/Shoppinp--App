import React, { Component } from 'react';
import AboutView from '../../components/About/AboutView'
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <div className="row text-center text-lg-left">
                    <AboutView></AboutView>
                </div>
            </>
        )
    }
}
export default About;