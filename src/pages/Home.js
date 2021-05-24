import './Home.css'
import Apps from '../components/Home/Apps';
import {Link} from 'react-router-dom'
let welcomes = ['Привет👋','Здравствуй😊'];
let welcomesTime = {morning:'Доброе утро🌅',afternoon:'Добрый день🌄',evening:'Добрый вечер🌇',night:'Доброй ночи🌙'}
let greeting;
if(Math.floor(Math.random() * 2) == 1){
greeting = welcomes[Math.floor(Math.random() * 2)]
}
else{
    let date = new Date();
    let hour = date.getHours();
    switch(true){
        case hour >= 4 && hour < 12:
            greeting = welcomesTime.morning
            break;
        case hour >= 12 && hour < 17:
            greeting = welcomesTime.afternoon
        break;
        case hour >= 17 && hour < 22:
            greeting = welcomesTime.evening
        break;
        case (hour >= 22 && hour <=24) || (hour >= 0 && hour < 4):
            greeting = welcomesTime.night
            break;
    }
}
let number = Math.floor(Math.random() * welcomes.length)
let months = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря']
let date = new Date();
let string = date.getDate() + ' ' + months[date.getMonth()];
export default function Home(props){
    if(!props.login()){
        window.location.href = 'https://yundu.co/login'
    }
    else{
        document.title = 'Главная | Yundu'
    return(
        <>
            <p className="Welcome">{greeting}, сегодня <span style={{color:'var(--brand)'}}>{string}</span></p>
            <Apps/>
        </>
    )
}
}
