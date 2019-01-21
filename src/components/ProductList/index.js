import React from 'react';
import Constant from '../../Config';
import MappleToolTip  from 'reactjs-mappletooltip'
const Productlist =(props)=>{ 
    const image=props.product.photo_thumbnail.split(',');
    let active='';
    let currentImage=image[0];

    if(props.currentActive===props.product.incredible_id){
        active='active';
        if(props.viewImage!=='')
            currentImage=props.viewImage;

    }
    
    return(
        
        <div className={"col-lg-3 col-md-3 col-xs-6 resultitem "+active}  >
           <div className="box thumbnailurl"> 
                <a href="javascript:void(0)" className="d-block mb-4 h-100" onClick={props.handleClick} ref={props.myRef}>
                    <img className="img-fluid img-thumbnail" src={Constant.img_url+image[0]} alt={props.product.name}  />
                    <MappleToolTip float={true} direction={'bottom'} mappleType={'success'} shadow={true} fadeInAnimation={true}>
                    <h4>{props.product.name}{" "}({image.length})</h4><div>{props.product.name}{" "}({image.length})</div></MappleToolTip>
                </a>
            </div>
                <div className="main-silder">

                    <div className="single-img-warp flexbox-container">
                        
                        <div className="col-sm-6">
                            
                            <div className="col-sm-12">
                            {(props.index!==0)? (
                            <a className="move-arrow left detailPrev" href="javascript:;" onClick={props.prevImage}>
                                <img alt="Icon_Basic_Left.svg" className="" width="25" src={Constant.img_url+'assets/img/icons/left-arrow.svg'} />
                            </a>) : null }
                            <img className="img-fluid img-div-main img-thumbnail" src={Constant.img_url+currentImage} alt={props.product.name} /></div>
                        </div>
                        <div className="col-sm-6 small">
                            <div className="col-sm-12"> 
                                <a className="detailClose" href="javascript:void(0)" onClick={props.removeClass}>
                                    <img alt="Icon_Basic_Close.svg" width="20" src={Constant.img_url+'assets/img/close.svg'}></img>
                                </a>
                                <h4>{props.product.name}{" "}({image.length})</h4>
                                <div className="small-div">
                                {image.map((img,index)=>(
                                    <img className={"img-fluid img-thumbnail "+((currentImage===img) ? 'activeTham': '') } key={index} src={Constant.img_url+img} alt={props.product.name} onClick={()=>{props.changeImage(img)}} />
                                ))}
                                </div> 
                                {(props.index!==(props.itemLegth-1)) ? (
                                <a className="move-arrow right detailNext" href="javascript:;" onClick={props.nextImage}>
                                    <img alt="Icon_Basic_Right.svg" className="" width="25" src={Constant.img_url+'assets/img/icons/right-arrow.svg'} />
                                </a>) : null }  
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
            
        </div> 
     )};
export default Productlist;