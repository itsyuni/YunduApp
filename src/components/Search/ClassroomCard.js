import './ClassroomCard.css';

export default function ClassroomCard(props) {
    if(props.loading){
    return(
            <div className="ClassroomCard" data-loading="true">
            <div className="ClassroomCard-Img"></div>
            <div className="ClassroomCard-Text">
                <h3><span></span></h3>
                <p></p>
            </div>
            </div>
    )
    }
    else{
        return(
            <div className="ClassroomCard" data-verified={props.verified ? 'true' : 'false'}>
            <div className="ClassroomCard-Img" style={{backgroundImage:`url(https://api.yundu.co/cravatars/${props.avatar}.png`}}></div>
            <div className="ClassroomCard-Text">
                <h3>{props.number}</h3>
                <p>{props.description}</p>
            </div>
            </div>
    )
    }
}