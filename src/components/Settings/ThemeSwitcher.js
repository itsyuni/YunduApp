import './ThemeSwitcher.css'
export default function ThemeSwitcher(props){
    if(localStorage.getItem('theme') == 'auto'){
    return(
        <label data-disabled data-switched={props.switched} className="ThemeSwitcher"></label>
    )
    }
    else{
    return(
        <label data-switched={props.switched} className="ThemeSwitcher" onClick={props.click} ></label>
    )
    }
}