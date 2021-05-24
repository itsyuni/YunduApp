import ClassroomCard from '../components/Search/ClassroomCard'
import SchoolCard from '../components/Search/SchoolCard'
import {withRouter} from "react-router-dom";
import Offline from '../components/Offline'
import {Component} from 'react'
class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            result:null,
            loaded:false,

        }
    }
    componentDidMount(){
        if(navigator.onLine){
            let city = localStorage.getItem('city');
            let searchFor;
        let {school, classroom} = this.props.match.params;
        let options;
        if(!school){
            options = {
                city
            }
            searchFor = 'schools'
        }
        else if(school && !classroom){
options = {
    city,
    school
}

searchFor = 'schools'
        }
        else if(school && classroom){
options = {
    city,
    school,
    classroom
}
searchFor = 'classrooms'
        }
        console.log(options)
        fetch('https://api.yundu.co/search',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json;charset=utf-8",
              },
              body: window.JSON.stringify(options)
        }).then(response => response.json()).then(response =>{
            let mapRes;
            /*let response = {
                status:'ok',
                data:[{
                    number:'7g',
                    verified:true,
                    description:'fghjk',
                    avatar:'no'
                }]
            }*/
            if(response.status === 'ok'){
                if(searchFor === 'schools'){
                    let i = 0;
                    mapRes = response.data.map((type) =>{
                        let obj = response.data[i];
                        i++
                        let number;
                        if(obj.number.includes('k')){
                            let splitted = obj.number.split('k')
                            number = `Школа №${splitted[0]}, корпус ${splitted[1]}`
                        }
                        else{
                            number = `Школа №${obj.number}`
                        }
                            return(
                    <SchoolCard key={i} verified={obj.verified} number={number} description={obj.description}/>
                            )
                    });
                }
                else{
                    let i = 0;
mapRes = response.data.map((type) =>{
    let obj = response.data[i];
    let transliterateData = {"a":"А","b":"Б","v":"В","g":"Г","d":"Д","e":"Е","yo":"ё","gh":"ж","z":"з","i":"и","ik":"й","k":"к","l":"л","m":"м","n":"н","o":"о","p":"п","r":"р","s":"с","t":"т","y":"у","f":"ф","h":"х","c":"ц","ch":"ч","sh":"ш","shh":"щ","yy":"ы","ye":"э","u":"ю","ya":"я"}
let number;
        let res = obj.number.slice(0, -1) + transliterateData[obj.number.slice(obj.number.length - 1)]
        number = `${res} класс`
    i++
        return(
<ClassroomCard key={i} verified={obj.verified} number={number} description={obj.description} avatar={obj.avatar}/>
        )
});
                }
                
this.setState({
    result:mapRes,
    loaded:true
})
            }
            else{
                if(response.status == 'not found'){
                    this.setState({
                        result:<p style={{textAlign:'center',fontSize:'1.1em',marginTop:5}}>Не найдено.</p>,
                        loaded:true
                    })
                }
                else{
                this.setState({
                    result:<p style={{textAlign:'center',fontSize:'1.1em',marginTop:5}}>Неиззвестная ошибка.</p>,
                    loaded:true
                })
            }
            }
        })
    }
    else{
        this.setState({
            result:<Offline/>,
            loaded:true
        })
    }
    }
    render(){
    if(!this.props.login()){
        window.location.href = 'https://yundu.co/login'
    }
    else{
        let {school, classroom} = this.props.match.params;
        let searchType;
    if(school && classroom){
        searchType = 'классам'
    }
    else if(school && !classroom){
        searchType = 'школам'
    }
    else if(!school && !classroom){
        window.location.href = '/'
    }
    document.title = `Поиск по ${searchType} | Yundu`
        return(
            <>
            <h3 style={{fontSize:'1.3rem'}}>Поиск по {searchType}</h3>
            {!this.state.loaded ? searchType === 'классам' ? <><ClassroomCard loading/><ClassroomCard loading/></> : <><SchoolCard loading/><SchoolCard loading/></> : null}
            {this.state.result}
            </>
        )
    }
}
}
export default withRouter(Search)