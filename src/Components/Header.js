import Button from "./Button"


const Header = ({title,onAdd,showAdd}) => {
   
  return (
    <header className='header'>

    <h1>{title}</h1>
      <Button text={showAdd ? 'close' :'Add'} color={ showAdd ?'red': 'white'} backgroundColor= {showAdd ? 'black' :'green'}onClick={onAdd}/>
     
      
    </header>
  )
}




export default Header




