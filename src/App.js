import React,{useState,useEffect} from 'react'
import "./App.css"
import axios from "axios"
import Card from './Card'


const App = () => {

  const [advice, setadvice] = useState("")
  const [loading, setloading] = useState(true)

  useEffect(() => {
    return () => {
      
      fetchAdvice() 
    
      
    };
  }, [])

  // function fetchAdvice() {
  //   axios.get("https://api.adviceslip.com/advice").then((res)=>{
   
  //   setadvice( res.data.slip.advice)
  // })

  //-------modern way to fetch api using async----------
  
  async  function fetchAdvice() {
    try{
      setloading(true)
      const res=await axios.get("https://api.adviceslip.com/advice");
      setadvice( res.data.slip.advice)
      setloading(false)


    }catch(err){
      console.log(err);

    }
  }
 return (
    <div className='app'>
    <Card Advice={advice} FetchAdvice={fetchAdvice} loading={loading} /> 
    
   
    </div>
  )
}








export default App
