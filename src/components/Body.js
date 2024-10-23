
import { useState } from "react";
import data from "../utils/data";
import ResCard from "./ResCard"
const Body = () => {
    const [resdata,setResData]=useState(data)
    // let resdata = data;
    return(
      <div className="body">
        <div className="search">
          <h5>search</h5>
          <button
            onClick={()=>{
              console.log("before filter",resdata)
              setResData(resdata.filter((item)=>item.info.avgRating>4))
              // resdata=resdata.filter((item)=>item.info.avgRating<3.8)
              console.log("after filter",resdata)
            }}
          >
            Top Rated
          </button>
          <input type="text" className="searchbox"/>
        </div>
        <div className="res-container">
          {
            resdata.map((item)=>(
              <ResCard key = {item.info.id} data={item}/>
            ))
          }
        </div>
  
      </div>
    )
  }
export default Body  