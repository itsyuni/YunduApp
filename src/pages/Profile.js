import AvatarImg from '../components/Profile/AvatarImg';
import Input from '../components/Inputs/Input';

import SmallInput from '../components/Inputs/SmallInput';
    let types = ['username','email']
    let labels = ['Никнейм','Почта']
export default function Profile(props){
    if(!props.login()){
        window.location.href = 'https://yundu.co/login'
    }
    else{
document.title = 'Профиль | Yundu'
let i = 0;
let inputs = types.map((type) =>{
    i++
    let labelNumber = i - 1;
    console.log(labels[labelNumber])
    let value = localStorage.getItem(type);
    if(value == ''){
        value = 'error'
    }
        return(
<Input key={i} label={labels[labelNumber]} type={type} content={value}/>
        )
});

    return(
        <>
        <AvatarImg/>
        <div style={{display:'flex'}}>
            <div><SmallInput label="Имя" type="name" last="false" content={localStorage.getItem('name')}/></div>
            <div><SmallInput label="Фамилия" type="surname" last="true" content={localStorage.getItem('surname')}/></div>
        </div>
        {inputs}
        </>
    )
}}