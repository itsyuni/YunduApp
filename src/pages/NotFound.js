let hstyles = {
    textAlign: 'center',
    color: 'white',
    padding: '20px',
    fontSize: '4em',
    background: 'var(--brand)',
    borderRadius: '20px',
    width: 'fit-content',
    margin: 'auto',
    marginTop: '0px'
};
let pstyles = {
    textAlign: 'center',
    marginTop: '10px'
}

document.title = 'Не найдено | Yundu'
export default function NotFound(props){
    if(!props.login()){
        window.location.href = 'https://yundu.co/login'
    }
    else{
    return(
        <>
        <h3 style={hstyles}>404</h3>
        <p style={pstyles}>Не найдено.</p>
        </>
    )}
}