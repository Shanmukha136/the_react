import React from "react";
import ReactDOM from "react-dom/client";

const data = api.fetch();
const Component2 = () =>{
    return (
        <div>
            {data}
            <h1>Component Composition</h1>
        </div>
    )
    
}
const Component1 =() =>{

   return(
    <div className="container">
        {100}
        <Component2/>
        {number}
    </div>

   )
   
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1/>)
