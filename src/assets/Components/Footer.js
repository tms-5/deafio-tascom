import React from 'react';
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faTheaterMasks } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Footer extends React.Component {      
    render (){
        return(
        <div>
                <footer>
                    <a className="a-footer active"><FontAwesomeIcon icon={faTh} />All categories</a>
                    <a className="a-footer"><FontAwesomeIcon icon={faHome} />Home</a>
                    <a className="a-footer"><FontAwesomeIcon icon={faBriefcase} />Business</a>
                    <a className="a-footer"><FontAwesomeIcon icon={faCamera} />Photography</a>
                    <a className="a-footer"><FontAwesomeIcon icon={faFile} />Lessons</a>
                    <a className="a-footer"><FontAwesomeIcon icon={faTheaterMasks} />Entertrainment</a>
                </footer>
        </div>
        )
    }
    
}