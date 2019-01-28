import React ,{Component}from 'react'
class  CheckBox extends Component{
    constructor(props){
        super(props)
        this.state={
            status:false,
            color:['Red','Green','Pink','Blue','Yellow'],
            data:[],
            checked:[]
        }
    }
    handleClick = ()=>{
    
        this.setState({status: !this.state.status})
        
    }
    handleChange = (index,event)=>{
    console.log("hjdk")
    console.log(event)
    let data=this.state.data;
    let value=event.target.value
    let checked=this.state.checked
    checked[index]=!this.state.checked[index]
   data.push(value)
    
       this.setState({
        data,
        checked

    })
    }
    render(){
        return(
            <div className="">
                <h5 style={{paddingTop:"30px"}}>Color</h5>
                        { this.state.color.map ((value ,index)=> {
                           return <label className="container checkbox" key={index}> {value}
                            <input 
                                type="checkbox" value={value} 
                                checked={this.state.checked[index] ? this.state.checked[index]:false}
                                onChange={(e) =>this.handleChange(index, e)} 
                            />
                            <span className="checkmark"></span>
                            </label>
                        })
                    }
                
                </div>
        )
        
    }
}
    

    

export default CheckBox;