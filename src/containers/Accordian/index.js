import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-accessible-accordion/dist/minimal-example.css';
import './Accordian.css'
class  Accordian extends React.Component{
    constructor(props){
        super(props)
        this.state={
            status:false,
            color:['Red','Green','Pink','Blue','Yellow'],
            data:[],
            accordion:true
        }
    }
    handleClick = ()=>{
    //    accordion=false
    this.setState({status:true})
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
            <Accordion>
            <AccordionItem expanded={true}> 
                <AccordionItemTitle className="accordian-title"> 
                    <h5 >Category</h5>
                    {/* <div className="accordion__arrow" role="presentation" />      */}
                </AccordionItemTitle>
                <AccordionItemBody >
                    <Accordion> 
                        <AccordionItem  expanded={true}>
                            <AccordionItemTitle>
                            <h5 >Men </h5>
                            <div className="accordion__arrow" role="presentation" />
                           
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
                            <AccordionItemTitle>
                            <h5  >Women</h5>
                            <div className="accordion__arrow" role="presentation" />
                            
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p className="sub-title">Shirt</p>
                                <p className="sub-title">T-Shirt</p>
                                <p className="sub-title">Jeans</p>
                            </AccordionItemBody>
                        </AccordionItem>
                    </Accordion>
                    <Accordion accordion={true}> 
                        <AccordionItem expanded={true}>
                            <AccordionItemTitle>
                            <h5 >Kids  </h5>
                            <div className="accordion__arrow" role="presentation" />
                           
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