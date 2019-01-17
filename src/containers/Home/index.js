import React, { Component } from 'react';
import axios from 'axios';
import Productlist from '../../components/ProductList'
import './home.css';
import Constant from '../../Config'; 
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products:[],
        }

    }
    componentDidMount()
    {
        axios.get(Constant.backend_api+'/home/?auth=ExpediaFlow')
        .then(response=>(
            this.setState({
                products:response.data.favorite_incredible_places
            })
        )).catch(error=>(
            console.log(error)
        ));
    }
    render() {
        const productlist = this.state.products.map(product => (
               <Productlist product={product} key={product.incredible_id}/>
            )
        )
        return (
            <>
                <div className="row text-center text-lg-left">
                    {productlist}
                    
                </div>
            </>
        )
    }
}
export default Home;