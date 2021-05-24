import './Switch.css'
export default function Switch(props){
    if(props.for && props.for === 'theme'){
        return(
            <label className="Switch" data-switched={props.switched} onClick={props.click}></label>
        )
    }
    return(
        <label className="Switch" data-switched={props.switched}></label>
    )
}