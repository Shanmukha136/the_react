// import { LOGO } from "../utils/constants";

// const Header = () =>{
//     return(
//       <div className="header">
//         <div className="logo">
//             <img id="logo" src={LOGO} alt="logo"/>
//         </div>
//         <div className="nav-items">
//           <ul>
//             <li>Home</li>
//             <li>About us</li>
//             <li>Contact Us</li>
//             <li>Cart</li>
//           </ul>
  
//         </div>
  
//       </div>
//     )
// }
// export default Header;

const Header = ()=>{
  return(
    <div className="header">
        <div className="logo">
          <img id="image" src="https://e7.pngegg.com/pngimages/854/415/png-clipart-recipe-cooking-chef-dish-food-cooking-food-recipe-thumbnail.png" alt="logo"/>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Contact us</li>
            <li>About</li>
            <li>Cart</li>
          </ul>
        </div>
    </div>
  )
}
export default Header