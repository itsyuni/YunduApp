import './ModalOptions.css'
import {Link} from 'react-router-dom'
import {Component} from 'react'

let visibility;
    let opacity;
export default class ModalOptions extends Component{
    constructor(props){
        super(props);
        this.state = {
            iframe:null
        }
        this.logOut = this.logOut.bind(this)
    }
    logOut(){
        localStorage.setItem('logged',false);
        localStorage.removeItem('avatar');
        localStorage.removeItem('surname');
        localStorage.removeItem('name');
        localStorage.removeItem('username');
        localStorage.removeItem('email')
        this.setState({
            iframe:<iframe title="none" key="1" style={{display:'none'}} src="https://yundu.co/signout" onLoad={(function(){window.location.href = "https://yundu.co/"})()}></iframe>
        })
    }
    render(){
    if(this.props.visible === false){
        visibility = 'hidden'
      opacity = 0
    }
    else{
        visibility = 'visible';
        opacity = 1
    }
    return(
        <>
        <div className="ModalWall" style={{visibility:visibility}} onClick={()=>{this.props.wall(1)}}></div>
        <div className="ModalOptions" style={{visibility:visibility,opacity:opacity}}>
            <Link to="/profile" onClick={()=>{this.props.wall(1)}}><p>Профиль</p></Link>
           <div style={{width:1,height:2}}></div>
            <Link to="/settings" onClick={()=>{this.props.wall(1)}}><p>Настройки</p></Link>
            <hr/>
            <p className="Quit" onClick={this.logOut}>Выйти</p>
            {this.state.iframe}
        </div>
        </>
    )
    
}
}
