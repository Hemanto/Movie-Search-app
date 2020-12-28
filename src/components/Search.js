import React, { useState, useEffect } from 'react'
import axios from "axios"
import {Link, useParams} from 'react-router-dom'
// http://www.omdbapi.com/?apikey=bbb5e59b&t=tenet

// const initialState = {
    //     film_data: {},
    //     inputText: ""
    // }
// const [state, setState] = useState(initialState)
// setState({...state, inputText: e.target.value})
// setState({...state, film_data: data, intputText: data.Title})

const URL = 'https://www.omdbapi.com'
const APIkey = 'bbb5e59b'

const Search = (props) => {
    const [state, setstate] = useState({})
    const [inputText, setInputText] = useState('')

    const {movieName}= useParams()
    console.log('q',movieName);


    
    const fetchbysearch = async (movieName) => {
        const { data } = await axios.get(URL, {
            params: {
                t: movieName,
                apikey: APIkey,
            }
        })
        return data
    }
    
    const search = (movName) => {
        fetchbysearch(movName)
        .then((data)=>{
            setstate(data)
            console.log('after serach',data);
            setInputText(data.Title)
        })
    }
    
    useEffect(() => {
         if (movieName) {
            setInputText(movieName)
            search(movieName)
            console.log('after set',movieName);
           
        }
    }, [movieName])

    return (
        <div style={{ textAlign: 'center' }} >
            <h1>Search you movie</h1>
            <input onChange={(e) => { setInputText(e.target.value) }} value={inputText} />
            <Link to={'/q='+inputText}>
            <button onClick={() => search(inputText)}>Find</button>
            </Link>
            <br/>
            <br/>
            
            {state?
            <div>{state.Poster?
                <Link to={"/details/"+state.Title+ "/"+state.imdbID}>
                <div><img src={state.Poster} alt={state.Title} /><p>{state.Title}</p><p>{state.Plot}</p></div></Link>
                    :<p>{state.Error}</p>}
            </div>
            :<p>Loading..</p>}
        </div>
    )
}

export default Search
