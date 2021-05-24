import './SchoolCard.css'
export default function SchoolCard(props){
    if(props.loading){
        return(
                <div className="SchoolCard" data-loading="true">
                <div className="SchoolCard-Text">
                    <h3><span></span></h3>
                    <p></p>
                </div>
                </div>
        )
        }
        else{
            return(
                <div className="SchoolCard" data-verified={props.verified ? 'true' : 'false'}>
                <div className="SchoolCard-Text">
                    <h3>{props.number}</h3>
                    <p>{props.description}</p>
                </div>
                </div>
        )
        }
}