import React from 'react';
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoTascom from '../img/logo_tascom.png';

export default class Topbar extends React.Component {   
    constructor(props) {
        super(props)
      }    
      state = {
        toolLang: false,
        navbarResp: false,
      }   
    render (){
        return(
        <div>
               <div className="navbar desktop row">
                    <img src={logoTascom} width="100"/> 
                        <a href="/#" className="link">How it works</a>
                        <a href="/#" className="link">Find a job</a>
                        <a href="/#" className="link">Login</a>
                        <a href="/#" className="link">Sing up</a>
                        <a href="/#" className="link" onClick={() => {this.setState({toolLang: !this.state.toolLang})}}>
                            <div className={`drop-tool ${this.state.toolLang ? "opacidade-1-bt" : "opacidade-0-bt"}`}>
                                <span className="tooltiptext">
                                    <a><FontAwesomeIcon icon={faGlobe} className="mr-1"/>Portuguese <hr className="hr-tool"/></a>
                                    <a><FontAwesomeIcon icon={faGlobe} className="mr-1"/>Espanish<br/><hr className="hr-tool"/></a>
                                    <a><FontAwesomeIcon icon={faGlobe} className="mr-1"/>French<br/><hr className="hr-tool"/></a> 
                                    <a><FontAwesomeIcon icon={faGlobe} className="mr-1"/>Japanese<br/><hr className="hr-tool"/></a>
                                    <a><FontAwesomeIcon icon={faGlobe} className="mr-1"/>Mandarin<br/><hr className="hr-tool"/></a>
                                    <a><FontAwesomeIcon icon={faGlobe} className="mr-1"/>German<br/><hr className="hr-tool"/></a>
                                    <a><FontAwesomeIcon icon={faGlobe} className="mr-1"/>Russian<br/></a>
                                    </span>
                            </div>
                            <FontAwesomeIcon icon={faGlobe} className="icone-globo"/>English <FontAwesomeIcon icon={faChevronDown} className="ml-1" style={{fontSize: "13px"}}/></a>  
                                        
                </div>

                <div className="navbar mobile row">
                    <img src={logoTascom} width="100"/>  
                    <div onClick={() => this.setState({navbarResp: !this.state.navbarResp})}>
                        <FontAwesomeIcon icon={faBars} className="icone-barra"/>
                        </div> 
                    <div className={`navbar-dropdown ${this.state.navbarResp ? "opacidade-1-slidein" : "opacidade-0-slideout"}`}>
                        <FontAwesomeIcon icon={faTimes} className="icone-close-top" onClick={() => {this.setState({navbarResp: !this.state.navbarResp})}}/>
                        <a href="/#" className="link">How it works</a>
                        <a href="/#" className="link">Find a job</a>
                        <a href="/#" className="link">Login</a>
                        <a href="/#" className="link">Sing up</a>
                        <a href="/#" className="link" onClick={() => {this.setState({toolLang: !this.state.toolLang})}}>
                            <div className={`drop-tool ${this.state.toolLang ? "opacidade-1-bt" : "opacidade-0-bt"}`}>
                                <span className="tooltiptext">
                                    <a><FontAwesomeIcon icon={faGlobe} className="mr-1"/>Portuguese <hr className="hr-tool"/></a>
                                    <a><FontAwesomeIcon icon={faGlobe} className="mr-1"/>Espanish<br/><hr className="hr-tool"/></a>
                                    <a><FontAwesomeIcon icon={faGlobe} className="mr-1"/>French<br/><hr className="hr-tool"/></a> 
                                    <a><FontAwesomeIcon icon={faGlobe} className="mr-1"/>Japanese<br/><hr className="hr-tool"/></a>
                                    <a><FontAwesomeIcon icon={faGlobe} className="mr-1"/>Mandarin<br/><hr className="hr-tool"/></a>
                                    <a><FontAwesomeIcon icon={faGlobe} className="mr-1"/>German<br/><hr className="hr-tool"/></a>
                                    <a><FontAwesomeIcon icon={faGlobe} className="mr-1"/>Russian<br/></a>
                                    </span>
                            </div>
                            <FontAwesomeIcon icon={faGlobe} className="icone-globo"/>English <FontAwesomeIcon icon={faChevronDown} className="ml-1" style={{fontSize: "13px"}}/></a>   
                        </div>   
                                                  
                </div>
        </div>
        )
    }
    
}