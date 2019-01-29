import React, { Component } from 'react'
import Accordian from '../../containers/Accordian';
import './SideBar.css'
import Rangeslider from '../../containers/RangeSlider';
import CheckBox from './CheckBox';
import Autosuggestion from '../../containers/Autosuggest';
import Header from '../Header';
import Footer from '../Footer';
import ProductData from './../ProductData'
import * as qs from 'query-string';

class SideBar extends Component {
    constructor() {
        super();
        this.state = {
            productData: ProductData
        }
    }
    componentDidMount() {
        console.log(this.state.productData)
        console.log('this.state.productData')
        const parsed = qs.parse(this.props.location.search);
        console.log(parsed)
        if (parsed.max && parsed.min) {
            const data = ProductData.filter(ProductData => ProductData.price < parseInt(parsed.max) && ProductData.price > parseInt(parsed.min));
            this.setState({
                productData: data
            })
        }
    }
    componentDidUpdate(prevProps) {
        const parsed = qs.parse(this.props.location.search);
        const data = ProductData.filter(ProductData => ProductData.price < parseInt(parsed.max) && ProductData.price > parseInt(parsed.min));
        if(prevProps !== this.props){
        this.setState({
            productData: data
        })}
        console.log(data);
    }
    render() {
        console.log(this.state.productData)
        const data = this.state.productData.map((value, index) => (
            <div className={"col-md-4"} key={index}>
                <img src={value.imgUrl} alt="" width="200px" height="200px" />
                <p className={"text-center"}>{value.name}</p>
                <p className={"text-center"}>{value.price}</p>
            </div>
        ))
        const p = ProductData
        console.log(typeof p);

        return (
            <>
                <div className={"container"}>
                    <Header />
                    <div className={"wrapper"}>
                        <div className={"row"}>
                            <div className={"col-md-3 Sidebar"}>
                                <div>
                                    <Accordian />
                                </div>
                                <div>
                                    <Rangeslider />
                                </div>

                                <div>
                                    <CheckBox />
                                </div>

                            </div>
                            <div className={"col-md-9"}>

                                <Autosuggestion />
                                <div className="row product-row">
                                    {data}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }

}
export default SideBar;