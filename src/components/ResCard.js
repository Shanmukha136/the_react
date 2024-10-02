// import { RECIPE_IMAGE } from "../utils/constants"
// const ResCard = (props) =>{
//     const {data} = props
//     console.log('props',props)
//     const {name,cuisines,avgRating,deliveryTime} = data?.info
    
//     return(
//       <div className="res-card">
//         <div className="image-container">
//           <img id="res-logo" src = {RECIPE_IMAGE+data.info.cloudinaryImageId}/>
//         </div>
//         <h3>{name}</h3>
//         <h5>{cuisines.join(", ")}</h5>
//         <h5>{avgRating}</h5>
//         <h5>{deliveryTime}</h5>
        
//       </div>
//     )
// }
// export default ResCard
import LocationOnIcon from '@mui/icons-material/LocationOn';
const ResCard = (props) =>{
  const {data} =props
  console.log("props are",props)
  const {name,cloudinaryImageId,locality,avgRating} = data?.card?.info;
  console.log("name is",name)
  return(
      <div className="rescard">
        <img id="resimg" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}/>
        <h4>{name}</h4> 
        <p>{locality}</p>
        <p>{avgRating}</p>
      </div>
  )
}
export default ResCard
  