import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './Accordian.css'
class  Accordian extends React.Component{
    constructor(props){
        super(props)
        this.state={
            status:false,
            color:['Red','Green','Pink','Blue','Yellow'],
            data:[]
            
        }
    }
    handleClick = ()=>{
    
        this.setState({status: !this.state.status})
    }
    handleChange = (event)=>{
      let data=this.state.data;
      let value=event.target.value
      console.log(value)
      data.push(value)
      this.setState({data})
    }
    render(){
      
        
    return(
        <>
            <Accordion className="">
            <AccordionItem expanded={true}> 
                <AccordionItemTitle className="accordian-title"> 
                    <h5 className="nav-label"  onClick={this.handleClick}>Category
                    {this.state.status ?<span className="fas fa-chevron-up pull-right"></span>
                                : <span className="fa fa-chevron-down pull-right"></span>
                                }</h5>
                </AccordionItemTitle>
                <AccordionItemBody >
                    <Accordion className="Sub-title"> 
                        <AccordionItem  expanded={true}>
                            <AccordionItemTitle className="accordian-title">
                            <h5  onClick={this.handleClick} >Men
                                {this.state.status ?<span className="fas fa-chevron-up pull-right"></span>
                                : <span className="fa fa-chevron-down pull-right"></span>
                                }
                            </h5>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p className="sub-title">Shirt </p>
                                <p className="sub-title">T-Shirt</p>
                                <p className="sub-title">Jeans</p>
                            </AccordionItemBody>
                        </AccordionItem >
                    </Accordion>
                    <Accordion> 
                        <AccordionItem expanded={true}>
                            <AccordionItemTitle className="accordian-title">
                            <h5  onClick={this.handleClick}>Women
                               {this.state.status ?<span className="fa fa-chevron-up pull-right"></span> 
                               : 
                                 <span className="fa fa-chevron-down pull-right"></span>
                                }
                            </h5>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p className="sub-title">Shirt</p>
                                <p className="sub-title">T-Shirt</p>
                                <p className="sub-title">Jeans</p>
                            </AccordionItemBody>
                        </AccordionItem>
                    </Accordion>
                    <Accordion> 
                        <AccordionItem expanded={true}>
                            <AccordionItemTitle className="accordian-title">
                            <h5 onClick={this.handleClick}>Kids 
                                {this.state.status ?
                                   <span className="fa fa-chevron-up pull-right"></span> 
                                : <span className="fa fa-chevron-down pull-right"></span>
                                }
                            </h5>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p className="sub-title">Shirt</p>
                                <p className="sub-title">T-Shirt</p>
                                <p className="sub-title">Jeans</p>
                            </AccordionItemBody>
                        </AccordionItem>
                    </Accordion>
                </AccordionItemBody>
            </AccordionItem>
            </Accordion>
               
        </>

   )
}
}
export default Accordian;