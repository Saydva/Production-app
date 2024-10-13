function ButtonSend({OnSend , OnSet}) {
const handleClick =()=>{
    if(OnSend !== "Send data"){
    OnSet(OnSend)};    
}

    return (   <>
        <button onClick={handleClick}>Send data</button>
        </>
     );
}

export default ButtonSend ;