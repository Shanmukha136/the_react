
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
  