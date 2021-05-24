import './Input.css'
import {useState} from 'react'
export default function Input(props){
    
    const [curValue, setValue] = useState(props.content);
    const handleChange = (event)=>{
        setValue(event.target.value)
    }
    return(
        <>
        <label htmlFor={props.type}>{props.label}:</label>
        <input type="text" className="Input" id={props.type} data-name={props.type} value={curValue} onChange={handleChange}/>
        </>
    )
}