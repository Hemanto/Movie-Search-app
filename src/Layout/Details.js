import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {API_ID, APIkey }from '../config'

const Details = () => {
    const [details, setDetails] = useState({})
    const { data, id } = useParams()

 const fetchbyId = ()=>{
     axios.get(API_ID,{
         params:{
             i:id,
             apikey: APIkey,

         }
     }).then(
         (redponse)=>{
             var result = redponse.data;
             console.log(result);
             setDetails(result)
         }
     )
 }
    
    useEffect(() => {
        fetchbyId()
        console.log('in side details page ');

    }, [])

    return (
        <div>
       <h1>{details.Title}</h1>
       <img src={details.Poster} alt={details.Title}/>
       <p>{details.Plot}</p>
       <p>{details.Language}</p>
   
        </div>
    )
}

export default Details
