import React, { useEffect, useState } from 'react'
import axios from "axios"
// http://www.omdbapi.com/?apikey=bbb5e59b&t=tenet



const URL = 'https://www.omdbapi.com'
const APIkey = 'bbb5e59b'

const Search = () => {

    const [state, setstate] = useState({})


    const fetchbysearch = async (movieName) => {
        const { data } = await axios.get(URL, {
            params: {
                t: movieName,
                apikey: APIkey,
            }
        })
        return data
    }

    const search = async() => {
        await fetchbysearch(state)
         .then((data)=>{
             setstate(data)
             
         })
    }



    useEffect(() => {

    }, [])

    return (
        <div style={{ textAlign: 'center' }} >
            <h1>Search you movie</h1>
            <input onChange={(e) => { setstate(e.target.value) }} value={state.Title} />
            <button onClick={search}>Find</button>
            <br/>
            <br/>
            
            {state?<div>{state.Poster?<img src={state.Poster}/>:<p>{state.Error}</p>}</div>:<p>Loading..</p>}
        </div>
    )
}

export default Search
