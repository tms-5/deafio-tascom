import React from 'react';
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Home extends React.Component {      
    constructor(props) {
        super(props)
      }    
      state = {
        inputValue: '',
        closeX: true,
      }    
      
    render (){
        return(
        <div>
            <div className="middle">
                 <div className="mid-page">
                    <h2><b>Find Reliable & Verifed Home Service Providers<span style={{color:" #008f47", fontSize: "40px"}}>.</span></b></h2>
                </div>
                <div className="search-bar">
                    <FontAwesomeIcon icon={faHome} className="icone-home"/>
                    <input type="text" placeholder="Type something" value={this.state.inputValue}/>
                    <FontAwesomeIcon icon={faTimes} className={`icone-close ${this.state.closeX ? "opacidade-0-bt" : "opacidade-1-bt"}`} onClick={() => {this.setState({closeX: true});this.setState({inputValue: ''})}}/>
                    <FontAwesomeIcon icon={faCrosshairs} className="icone-crosshairs"/>
                    <button>Find Service</button>
                </div>
                <div className="sugestao row">
                    <span onClick={() => {this.setState({inputValue: 'House Cleaning'}); this.setState({closeX: false})}}>House cleaning</span>
                    <span onClick={() => {this.setState({inputValue: 'Painting'}); this.setState({closeX: false})}}>Painting</span>
                    <span onClick={() => {this.setState({inputValue: 'Photography'}); this.setState({closeX: false})}}>Photography</span>
                    <span onClick={() => {this.setState({inputValue: 'Personal Training'}); this.setState({closeX: false})}}>Personal Training</span>
                    <span><FontAwesomeIcon icon={faEllipsisH} /></span>
                </div>
                </div>
        </div>
        )
    }
    
}