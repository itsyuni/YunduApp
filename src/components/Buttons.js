import './Buttons.css'
import ModalOptions from './ModalOptions'
import ModalNotify from './ModalNotify'
import {Component} from 'react';
import NotifyButton from './NotifyButton'
import AvatarSmall from './AvatarSmall'
export default class Buttons extends Component{
    constructor(props){
        super(props)
        this.state = {
            optionsVisible:false,
            notifyVisible:false
        }
        this.toggleModal = this.toggleModal.bind(this)
    }
    closeModal1(){
            this.setState({
                optionsVisible:false,
                notifyVisible:this.state.notifyVisible
            })
    }
    closeModal2(){
        this.setState({
            optionsVisible:this.state.optionsVisible,
            notifyVisible:false
        })
    }
    toggleModal(number){
        if(number == 1){
            if(this.state.notifyVisible){
                this.setState({
                    optionsVisible:true,
                    notifyVisible:false
                })  
            }
            else{
            this.setState({
                optionsVisible:!this.state.optionsVisible,
                notifyVisible:this.state.notifyVisible
            })
        }
        }
        else{
            if(this.state.optionsVisible){
                this.setState({
                    optionsVisible:false,
                    notifyVisible:true
                })  
            }
            else{
            this.setState({
                optionsVisible:this.state.optionsVisible,
                notifyVisible:!this.state.notifyVisible
            })
        }
        }
    }
    render(){
    return(
        <div className="Buttons">
           <NotifyButton data-clicked={this.state.notifyVisible} click={()=>{this.toggleModal(2)}}/>
           <AvatarSmall clicked={this.state.optionsVisible} click={()=>{this.toggleModal(1)}}/>
            <ModalOptions visible={this.state.optionsVisible} wall={this.toggleModal}/>
            <ModalNotify visible={this.state.notifyVisible} wall={this.toggleModal}/>
        </div>
    )
    }
}