import './SmallInput.css'
import {useState} from 'react'
export default function Input(props){
    
    const [curValue, setValue] = useState(props.content);
    const handleChange = (event)=>{
        setValue(event.target.value)
    }
        if(props.last === 'false'){
    return(
    <>
    <label htmlFor={props.type}>{props.label}:</label>
    <input type="text" className="SmallInput" data-name={props.type} value={curValue} onChange={handleChange}/>
    </>
    )
        }
        else if(props.last == 'true'){
            return(
                <>
                <label className="Last" htmlFor={props.type}>{props.label}:</label>
                <input type="text" className="SmallInput Last" data-name={props.type} value={curValue} onChange={handleChange}/>
                </>
                )
        }
    
    }
