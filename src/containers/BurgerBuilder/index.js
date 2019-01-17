import React, { Component } from 'react';
import Model from '../../components/UI/Modal'
import Layout from './../../components/Layout';
class BurgerBuilder extends Component {
    constructor() {
        super();
        this.state = {
            ingredients: {
                cheese: 0,
                bacon: 0,
                salad: 0,
                meat: 0,
            },
            totalPrice: 0,
            showOrderModal: false,
            ordering: false
        }

    }
    render() {
        return (
            <>
            <Layout>

            </Layout>
            </>
        )
    }
}
export default BurgerBuilder;