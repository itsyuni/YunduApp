import {useParams} from "react-router-dom";
export default function SaveCookies(){
    let {token} = useParams()
    fetch('https://api.yundu.co/me',{
      headers: {
    'Content-Type': 'application/json',
    'token':token
  }}).then(response => response.json()).then(text=>{
    if(text.data){
                localStorage.setItem('username',text.data.username);
                localStorage.setItem('email',text.data.email);
                localStorage.setItem('createdAt',text.data.createdAt);
                localStorage.setItem('name',text.data.name);
                localStorage.setItem('surname',text.data.surname);
                localStorage.setItem('avatar',text.data.avatar);
                localStorage.setItem('logged',true);
                window.parent.postMessage('success','*')
                return(
                  <div>
                    success
                  </div>
                )
            }
            else{
              
              window.parent.postMessage('error','*')
              return(
                <div>
                  error
                </div>
              )
            }
  })
  return(
    <div>
      error 2
    </div>
  )
}
