
const Button = ({color,text,backgroundColor,onClick }) => {

  
  return (
    <button onClick={onClick} style={{color,backgroundColor}}className='btn'>{text}</button>
  )
}

Button.defaultProps={
    color:'white',
    backgroundColor:'black'
}

export default Button
