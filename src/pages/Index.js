import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './indexCss.css';
import Footer from '../assets/Components/Footer.js';
import Topbar from '../assets/Components/Topbar.js';
import Home from '../assets/Components/Home.js';
import imgBg from '../assets/img/escritorio-cropped.png';

export default class Index extends React.Component { 
    constructor(props) {
        super(props);    
        this.state = {
        };   
    }    
    render (){
        return(
        <div>
        <img className="imagem-bg" src={imgBg}/>
            <div className="container">       
                <Topbar />
               <Home />
               <Footer />
            </div>  
        </div>
        )
    }
    
}