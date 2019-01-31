import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
class Loader extends Component {
    constructor(props){
        super(props);
        this.state={
        }       
    } 
    render() {
        return (
          
            <div className={this.props.pageloaderImage+" main-loader"}>
              <div className="loader">
                 <svg className="circular-loader" viewBox="25 25 50 50">
                    <circle className="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#ffa500" strokeWidth="2.5"></circle>
                 </svg>
              </div>
            </div>
        );
    }
}

export default withRouter(Loader);

