
// import { useState } from "react";
// import  data_lis  from "../utils/data";
// import ResCard from "./ResCard";
// const Body = () => {
//     const [resData,setResData]=useState(data_lis)
//     console.log('resdata-',resData)
//     return(
//       <div className="body">
//         <div className="top-res-btn">
//             <button
//                 onClick={()=>{
//                     const filterd_list = resData.filter(
//                         (res)=>res.info.avgRating > 4.3
//                     );
//                     console.log(filterd_list)
//                     setResData(filterd_list)
//                 }}
                
//             >
//                 Top Rated Restaurant
//             </button>

//         </div>
//         <div className="search">
//           <h5>search</h5>
//           <input type="text" className="searchbox"/>
//         </div>
//         <div className="res-container">
//           {
//             resData.map((item)=>(
//               <ResCard key = {item.info.id} data={item}/>
//             ))
//           }
//         </div>
  
//       </div>
//     )
// }
// export default Body;
import SearchIcon from '@mui/icons-material/Search';
import ResCard from './ResCard'
import data from '../utils/data'
const Body = () =>{
  
  return(
    <div className="body-container">
      <div className='search-container'>
        <input className="search-input"></input>
        <div id='search-logo'><SearchIcon/></div> 
      </div>
      <div className='res-container'>
        {data.map((item)=>(
            <ResCard 
              key={item.card.info.id}
              data={item}
            />
        ))}
        
        
      </div>
    </div>
  )
}
export default Body
