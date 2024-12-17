import { useState } from "react";
import { LOGO } from "../utils/constants";
const Header = ()=>{
  const [login,setLogin] = useState("Login")
  return(
    <div className="header">
        <div className="logo">
          <img id="image" src={LOGO} alt="logo"/>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Contact us</li>
            <li>About</li>
            <li>Cart</li>
            <button className="login-btn"
              onClick={()=>(
                login=="Login"?setLogin('Logout'):setLogin('Login')
                
              )}
            >
              {login}
            </button>
          </ul>
          
        </div>
    </div>
  )
}
export default Header