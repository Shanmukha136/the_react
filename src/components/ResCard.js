
import { CLOUDINARY_IMAGE } from "../utils/constants"
const ResCard = (props) =>{
    const {data} = props
    console.log('props',props)
    const {name,cuisines,avgRating,deliveryTime} = data?.info
    
    return(
      <div className="res-card">
        <div className="image-container">
          <img id="res-logo" src = {CLOUDINARY_IMAGE+data.info.cloudinaryImageId}/>
        </div>
        <h3>{name}</h3>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{avgRating}</h5>
        <h5>{data.info.sla.deliveryTime} min</h5>
        
      </div>
    )
  }
  export default ResCard
