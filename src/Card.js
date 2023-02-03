import React from 'react'
import "./Card.css"
import { ColorRing } from  'react-loader-spinner'



const Card = ({Advice,FetchAdvice,loading}) => {
  return (
    <div className='Card'>
    <ColorRing
    visible={loading}
    height="80"
    width="80"
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
    {
     !loading && <h1>{Advice}</h1>
   }
    
    <button onClick={FetchAdvice}>Click Her To Next Advice</button>
      
    </div>
  )
}

export default Card
