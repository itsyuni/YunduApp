import './AvatarImg.css';
export default function AvatarImg(props){
    let avatarSrc = localStorage.getItem('avatar');
    
    if(avatarSrc === 'no'){
        return(
            <div className="AvatarImg" style={{background:'var(--primary)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path fill="#33d190" d="M12,12c2.8,0,5-2.2,5-5s-2.2-5-5-5S7,4.2,7,7S9.2,12,12,12z M21.3,20.8c-1.3-5.1-6.5-8.3-11.6-7c-3.4,0.9-6.1,3.5-7,7c-0.1,0.5,0.2,1.1,0.8,1.2c0.1,0,0.2,0,0.2,0h16.6c0.6,0,1-0.4,1-1C21.3,20.9,21.3,20.8,21.3,20.8z"/></svg>
            </div>
        )
    }
    else{
 
    return(
        <div className="AvatarImg" style={{background:`center / contain no-repeat url(https://api.yundu.co/avatars/${avatarSrc})`}}></div>
    )
} 
}