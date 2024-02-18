// import '../App.css';

// eslint-disable-next-line react/prop-types
function Button({name, textColor="black", callback}){
    return (
        <button onClick={callback}  className='btn outline-none px-4 py-1 rounded-full' style={{backgroundColor: name, color: textColor} }>{name}</button>
    );
}

export default Button;