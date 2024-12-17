
import React, {useEffect, useState} from 'react'
import ResCard from './ResCard'
import data from '../utils/data'
import Shimmer from './Shimmer'
const Body = () =>{
  const [resData,setResData]= useState([])
  const [search,setSearch]=useState('')
  const [filterdRestaurant,setFilteredRestaurant]= useState([])
  const [topRated,setTopRated]=useState([])
  useEffect(()=>{
    console.log("use effect callback function is rendered")
    fetchData();
  },[]);
  const fetchData = async()=>{
    console.log("fetchdata is called")
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json= await data.json();
    console.log("api json format",json.data.cards)
    let cards = json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    console.log("cards are",cards)
    setResData(cards)
    setFilteredRestaurant(cards)
  };
  console.log("BodyRendered")
  return resData.length===0?<Shimmer/>:(
    <div className="body-container">
      <div>
        {console.log("return is printed")}
        <button  className='top-res'
          onClick={()=>
            setResData(
              resData.filter((item) => item.info && item.info.avgRating > 4)
            )
        }
        >
          Top Rated Restaurant
        </button>
        <button className='top-res'
          onClick={()=>setFilteredRestaurant(resData)}
        >
          All Restaurant
        </button>
        <div>
          <input
            type='text'
            value={search}
            onChange={(e)=>{
              
              setSearch(e.target.value)
            }}
            
          />
          <button
            onClick={()=>{
              console.log("search",search)
              const search_filters =resData.filter((item)=>item?.info?.name?.toLowerCase().includes(search.toLowerCase()))
              console.log("search_filters",search_filters)
              console.log("setResData",resData)
              setFilteredRestaurant(search_filters)
              console.log("setResData",resData)
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className='res-container'>
        {
          filterdRestaurant.map((item) => (
            item?.info ? (
              <ResCard 
                key={item.info.id}
                data={item}
              />
            ) : null
          ))
        }
      </div>
    </div>
  )
}
export default Body
