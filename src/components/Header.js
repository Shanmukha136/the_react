// import { HEADER_IMAGE } from "../utils/constants"
import { HEADER_IMAGE } from "../utils/constants"
const Header = () =>{
    return(
      <div className="header">
        <div className="logo">
            <img id="logo" src={HEADER_IMAGE} alt="logo"/>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
  
        </div>
  
      </div>
    )
  }
export default Header