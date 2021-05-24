import ThemeSwitcher from '../components/Settings/ThemeSwitcher'
import Switch from '../components/Switch'
import {Component} from 'react'
let lineP = {
    display:'flex',
    marginBottom:10,
    justifyContent:'space-between',
    alignItems:'center'
}
let lineSpan = {
    marginRight:10
}
export default class Settings extends Component {
    constructor(){
        super();
        let switchedTheme, switchedAutoTheme;
        if(!localStorage.getItem('theme')){
            switchedTheme = false;
            switchedAutoTheme = false;
        }
        else if(localStorage.getItem('theme') == 'light'){
            switchedTheme = false;
            switchedAutoTheme = false;
        }
        else if(localStorage.getItem('theme') == 'auto'){
            switchedAutoTheme = true;
           let preffered = getPrefferedTheme();
           if(preffered === 'light'){
               switchedTheme = false;
           }
           else if(preffered === 'dark'){
               switchedTheme = true;
           }
        }
        else if(localStorage.getItem('theme') == 'dark'){
            switchedTheme = true;
            switchedAutoTheme = false;
        }
        else{
            switchedTheme = false;
            switchedAutoTheme = false;
        }
        this.state = {
            switchedTheme,
            switchedAutoTheme
        }
        this.toggleTheme = this.toggleTheme.bind(this)
        this.toggleAutoTheme = this.toggleAutoTheme.bind(this)
    }
    toggleTheme(){
        let theme = this.state.switchedTheme;
        document.body.classList.toggle('darkmode')
            if(theme){
                localStorage.setItem('theme','light');
            }
            else{
                localStorage.setItem('theme','dark');
            }
            this.setState({switchedTheme:!theme,switchedAutoTheme:this.state.switchedAutoTheme})
    }
    toggleAutoTheme(){
        
        let prefferedTheme = getPrefferedTheme();
        if(localStorage.getItem('theme') == 'auto'){
            if(prefferedTheme === 'dark'){
                localStorage.setItem('theme','dark');
            document.body.classList.add('darkmode')
        this.setState({switchedTheme:true,switchedAutoTheme:false})
            }
            else{
                localStorage.setItem('theme','light');
            document.body.classList.remove('darkmode')
        this.setState({switchedTheme:false,switchedAutoTheme:false})
            }
            
        }
        else{
        localStorage.setItem('theme','auto');
            if(prefferedTheme == 'dark'){
                if(!document.body.classList.contains('darkmode')){
                document.body.classList.add('darkmode')
                }
                this.setState({switchedTheme:true,switchedAutoTheme:true})
            }
            else if(prefferedTheme == 'light'){

                if(document.body.classList.contains('darkmode')){
                    document.body.classList.remove('darkmode')
                }
                
                this.setState({switchedTheme:false,switchedAutoTheme:true})
            }
    }}
    render(){
    document.title = 'Настройки | Yundu'
    return(
        <>
        <p style={lineP}><span style={lineSpan}>Тема:</span><ThemeSwitcher switched={this.state.switchedTheme} click={this.toggleTheme}/></p>
        <p style={lineP}><span style={lineSpan}>Автоматическая смена темы:</span><Switch switched={this.state.switchedAutoTheme} click={this.toggleAutoTheme} for="theme"/></p>
            </>   
    )
    }
}
function getPrefferedTheme(){
    let date = new Date();
    let hour = date.getHours();
            if((hour >= 17 && hour <= 23) || (hour >= 0 && hour <= 6)){
                return 'dark'
            }
            else{
                return 'light'
            }
        }