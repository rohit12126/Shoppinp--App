import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
const FullContainer = props => (
    <div className="">  
      <Header {...props}/> 
        <div className="container">
          {props.children}
        </div>
      <Footer />
    </div>
  );
export default FullContainer;