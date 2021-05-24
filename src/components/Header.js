import {
    Link
  } from "react-router-dom";
import './Header.css';
import logo from '../assets/logo.svg'
export default function Header(){
  
        return(
<div className="Header">
    <div className="Logo">
        <Link to="/">
            <img alt="logo" src={logo}/>
        </Link>
    </div>
</div>
    )
}