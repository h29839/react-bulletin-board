import {Link} from "react-router-dom";
function Header(){
  return(
    <header className="App-header">
      <h1>掲示板</h1>
      <Link to="/">Home</Link>
    </header>
  )
}

export default Header;