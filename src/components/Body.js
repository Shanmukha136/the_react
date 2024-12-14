
import React, {useEffect, useState} from 'react'
import ResCard from './ResCard'
import data from '../utils/data'
const Body = () =>{
  const [resData,setResData]= useState([])
  useEffect(()=>{
    console.log("use effect callback function is rendered")
    fetchData();
  },[]);
  const fetchData = async()=>{
    console.log("fetchdata is called")
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3724&lng=78.4378&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
    const json= await data.json();
    console.log("api json format",json.data.cards)
    // let cards = json.data.cards.map((item)=>(item.card).filter((card)=>card.info))
    let cards = json.data.cards
      .map((item) => item.card.card) // Access the nested `card.card`
      .filter((card) => card.info) // Keep only cards that have `info` property
      
    console.log("cards are",cards)
    setResData(cards)
  };
  console.log("BodyRendered")
  return(
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
          onClick={()=>setResData(resData)}
        >
          All Restaurant
        </button>
      </div>
      <div className='res-container'>
      {
    resData.map((item) => (
      item?.info ? (
        <ResCard 
          key={item.info.id}
          data={item}
        />
      ) : null
    ))
  }
        {/* {resData.map((item)=>(
            <ResCard 
              key={item.card.collectionId}
              data={item}
            />
        ))} */}
      </div>
    </div>
  )
}
export default Body
