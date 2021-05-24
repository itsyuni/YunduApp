import {withRouter} from "react-router-dom";

import Offline from '../components/Offline';
import {Component} from "react";
import BottomBox from '../components/User/BottomBox';
import Names from '../components/User/Names'
    let types = ['username','email']
    let infoButton = {
        border:'none',
        background:'none',
        marginTop:10
    }
    let labels = ['Никнейм','Почта']
class User extends Component {
    constructor(props){
        super(props)
        this.state = {
            offline:null,
            names:<Names data={null} loading="true"/>
        }
    }
    componentDidMount(){
        
    let {username} = this.props.match.params;
    
    if(navigator.onLine){
        fetch('https://api.yundu.co/user?username='+username).then(response => response.json()).then(response => {
            if(response.status === 'ok'){
                this.setState({offline:null,names:<Names data={response.data}/>})
            }
            else if(response.status === 'not found'){
                this.setState({offline:null,names:<Names data='not found'/>})
            }
            else{
                this.setState({offline:null,names:<Names data='error'/>})
            }
        })
    }
    else{
        
        this.setState({offline:<Offline/>,names:null})
    }
    }
    render(){
    if(!this.props.login()){
        window.location.href = 'https://yundu.co/login'
    }
    else{
       return(
           <>
           {this.state.names}
           {this.state.offline}
           </>
       )

}
    }}
    export default withRouter(User);
