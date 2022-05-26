import React , {Component} from 'react';
import {GoLocation} from "react-icons/go";
import {MdCall} from "react-icons/md";
import {FiFacebook} from "react-icons/fi";
import {BsTwitter} from "react-icons/bs";
import {BsInstagram} from "react-icons/bs";
import './info.css';
import { IconName } from "react-icons/bs";
class Info extends Component{
    render(){
        return(
            <div className="info" >
                   <div className=" col-12 row">
                <div className="data col-sm-10 "> 
          <p> 
          <MdCall/> 
          <span>+9999999</span>
          </p>

          <p> 
          <GoLocation/>
          <span>المملكه العربيه السعوديه  </span>
          </p>
          
                </div>
                <div className="icons col-sm-2 ">
                   <li> <FiFacebook/> </li>
                   <li> <BsTwitter/> </li>
                   <li> <BsInstagram/> </li>
                </div>
                  </div>
            </div>
        )
    }
}
export default Info;