import './HideFrame.css'
let visibility;
    let opacity;
export default function HideFrame(props){
    
if(props.hided === false){
visibility = 'hidden';
opacity = 0;
    }
    else{
visibility = 'visible';
opacity = 1;
    }
    return(
        <div className="HideFrame" style={{visibility:visibility,opacity:opacity}}></div>
    )
}