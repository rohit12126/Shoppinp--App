import React from 'react'
import './SideBar.css'
import Autosuggestion from './../../Container/Autosuggest'
import Accordian from './../../Container/Accordian';
import RangeSlider from './../../Container/RangeSlider'
import Header from './../Header';
import Footer from './../Footer'
    const  SideBar = () =>{
            return(
                <>
                <Header />
                <div style={{minHeight:"1000px"}} >
                    <div className="nav-side-menu">
                        <div className="brand">Press Curing Control</div>
                        <div className="menu-list">
                            <Accordian />
                        </div>
                    <div>
                        <RangeSlider />
                    </div>
                    </div>
                    <div className="row">
                        <Autosuggestion/>
                    </div>
                </div>
                <Footer />
                </>
                
            )
        }
    
    
    export default SideBar;