import Button from "./Button"
const Header = ({name}) => {
  return (
    <header className="header">
        <h1 style={{color:'red'}}>Task Tracker  {name}</h1>
       <Button color='green' text='Add' onClick={()=> {alert('clicked button')}}/>
    </header>
  )
}

export default Header