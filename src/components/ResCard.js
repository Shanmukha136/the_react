import { RECIPE_IMAGE } from "../utils/constants";
const ResCard = (props) =>{
  const {data} =props
  // console.log("props are",props)
  const {name,cloudinaryImageId,locality,avgRating} = data?.info;
  // console.log("name is",name)
  return(
      <div className="rescard">
        <img id="resimg" src={`${RECIPE_IMAGE}${cloudinaryImageId}`}/>
        <h4>{name}</h4> 
        <p>{locality}</p>
        <p>{avgRating}</p>
      </div>
  )
}
export default ResCard
  