import HideButton from './Hide/HideButton';
import HideFrame from './Hide/HideFrame';
import {Component} from "react";
export default class Hide extends Component{
    constructor(props){
        super(props);
        this.state = {
            hided:false
        }
      this.toggle = this.toggle.bind(this);
      
    }
    toggle(){
        this.setState(state => ({
            hided: !state.hided,
            dark:state.dark
        }))
    }
    render(){
    return(
        <div>
            <HideFrame hided={this.state.hided}/>
        </div>
    )
    }
}