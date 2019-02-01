import React, { Component } from 'react';
import axios from 'axios';
import Productlist from '../../components/ProductList'
import './home.css';
import Loader from './Loader';
import Constant from '../../Config'; 
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products:[],
            viewDetails:false,
            currentActive:0,
            viewImage:'',
            intervalId: 0,
            scrollStepInPx:50,
            pageloaderImage:'display_block',
            delayInMs:16.66,
        }
        this.divRef = React.createRef();
        this.scrollStep=this.scrollStep.bind(this);
        this.myRef = React.createRef();
    }
    scrollStep() {
        console.log(window.pageYOffset+'   '+this.state.scrollStepInPx);
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        console.log(window.pageYOffset+'   '+this.state.scrollStepInPx);
        window.scroll(0, window.pageYOffset - this.state.scrollStepInPx);
    }
    scrollToTop() {
        let intervalId = setInterval(this.scrollStep, this.state.delayInMs);
        this.setState({ intervalId: intervalId });
    }
    componentDidMount()
    {
        this.setState({pageloaderImage:'display_block'});
        axios.get(Constant.backend_api+'/home/?auth=ExpediaFlow')
        .then(response=>(
            this.setState({
                products:response.data.favorite_incredible_places,
                viewImage:'',
                pageloaderImage:'display_none'
            })
        )).catch(error=>(
            this.setState({
                
                pageloaderImage:'display_none'
            })
        ));
    }
    handleClick=(e,index) =>{
       // this.scrollStep(this);
        
        if(this.state.currentActive===index)
            index=0;
        this.setState({
            currentActive:index,
            viewImage:'',
        })
        // console.log(index);
        // console.log(e.target);
        // var node = ReactDOM.findDOMNode(e.target);
        console.log(this.myRef.current)
        console.log(this.myRef.current.offsetTop)
        // console.log(node.clientHeight)
        // console.log(node.offsetTop)
        
    }
    removeClass=(index)=>{
        this.setState({
            currentActive:0,
            viewImage:'',
        })     
    }
    prevImage=(index)=>{
        this.setState({
            currentActive:index,
            viewImage:'',
        })
    }
    nextImage=(index)=>{
        this.setState({
            currentActive:index,
            viewImage:'',
        })
    }
    changeImage=(image)=>{
        this.setState({
            viewImage:image,
        })
    }
    render() {
        const productlist = this.state.products.map((product,index) => {
            let next=((this.state.products.length-1)!==index && this.state.products[index+1]['incredible_id']) ? this.state.products[index+1]['incredible_id'] : 0;
            let prev=(index!==0  && this.state.products[index-1]['incredible_id']) ? this.state.products[index-1]['incredible_id'] : 0;
            
           return (            
               <Productlist product={product} key={product.incredible_id} handleClick={(e)=>{this.handleClick(e,product.incredible_id)}} currentActive={this.state.currentActive} removeClass={this.removeClass.bind(this)} itemLegth={this.state.products.length} index={index} nextImage={()=>{this.prevImage(next)}} prevImage={()=>{this.nextImage(prev)}} viewImage={this.state.viewImage} changeImage={this.changeImage} myRef={this.myRef}  />
            ) }
        );
        return (
            <>
                <Loader pageloaderImage={this.state.pageloaderImage} />
                <div className="row text-center text-lg-left pictureView viewchange picflex" >
                    {productlist}
                    
                </div>
            </>
        )
    }
}
export default Home;