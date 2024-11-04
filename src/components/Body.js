
import React, {useState} from 'react'
import ResCard from './ResCard'
import data from '../utils/data'
const Body = () =>{
  // const [resData,setResData]= useState(data)
  const arr = useState(data)
  const resData = arr[0];
  const setResData = arr[1];
  return(
    <div className="body-container">
      <div>
        <button  className='top-res'
          onClick={()=>setResData(data.filter((item)=>
            item.card.info.avgRating>4
          ))}
        >
          Top Rated Restaurant
        </button>
        <button className='top-res'
          onClick={()=>setResData(data)}
        >
          All Restaurant
        </button>
      </div>
      <div className='res-container'>
        {resData.map((item)=>(
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
