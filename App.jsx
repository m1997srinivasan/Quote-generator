import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {

 let quotes_api="https://api.quotable.io/random";

 let[data,setdata]=useState(null);


useEffect(()=>{
  fetch(quotes_api)
  .then((response)=>response.json())
  .then((quotesdata)=> {
   setdata(quotesdata);
    
  })
},[])

  return (
    <div>
      <h2>Quotes Generator</h2>
      <pre>{JSON.stringify(data)}</pre>
     
      
    </div>
  )
}

export default App
