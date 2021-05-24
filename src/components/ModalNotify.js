import './ModalNotify.css'
import {Component} from 'react'
import Offline from './Offline';
export default class ModalNotify extends Component {
    constructor(props){
        super(props);
        this.state = {
            notifications:null,
            loaded:false,
            offline:null
        }
    }
    componentDidMount(){
        if(navigator.onLine){
        let notifications = [];
fetch('https://api.yundu.co/notifications',{
    method:'POST', 
    headers: {
  'Content-Type': 'application/json',
  'token':localStorage.getItem('token')
}
}).then(response => response.json()).then(response =>{

})
if(notifications.length === 0){
    notifications = <li>Уведомлений пока нет.</li>
}
else{
let i = 0;
notifications = notifications.map((text) =>{
    i++
    return(
<li key={i}>{text}</li>
    )
});
this.setState({loaded:true,notifications,offline:null})
}
    }
    else{
            this.setState({
            notifications:null,
            loaded:true,
            offline:<Offline/>
            })
        }
    }
    render(){
let visibility, opacity, zIndex, zIndex2;
    if(this.props.visible === false){
        visibility = 'hidden'
      opacity = 0
      zIndex = -1;
      zIndex2 = -1;
    }
    else{
        visibility = 'visible';
        opacity = 1
        zIndex = 6
        zIndex2 = 4;
    }
    return(
        <>
        <div className="ModalNotifyWall" style={{visibility:visibility,opacity:opacity,zIndex:zIndex2}} onClick={this.props.wall}></div>
        <div className="ModalNotify" data-loading={!this.state.loaded} style={{visibility:visibility,opacity:opacity,zIndex:zIndex}}>
            <div className="ModalNotify-Header"><h3>Уведомления</h3></div>
            <ul>{navigator.onLine ? this.state.loaded ? this.state.notifications : <><li><div></div></li><li><div></div></li><li><div></div></li></> : null}</ul>
            {this.state.offline}
        </div>
        </>
    )
}}