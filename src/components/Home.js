import React, { useEffect, useState } from 'react'
import axios from "axios"
import OnTheater from './OnTheater'

const Home = (props) => {
  // const API = 'https://www.omdbapi.com/?i=tt3896198&'
  // const apikey = 'bbb5e59b'
  // const key ='k_1dnxafx4'
  // const URl = 'https://imdb-api.com'
  //const intheater = 'https://imdb-api.com/en/API/InTheaters/k_1dnxafx4'


  // http://www.omdbapi.com/?t=te&y=2020&plot=full


  const [state, setstate] = useState(JSON.parse(localStorage.getItem('movie')) || [])

  //localStorage.getItem('movie')

  function makeGetRequest(path) {
    axios.get(path).then(
      (response) => {
        var result = response.data;
        console.log(result);
        setstate(result.items)
      },
      (error) => {
        console.log(error);
      }
    );
  }


  useEffect(() => {
    if (state.length === 0) {
      makeGetRequest("https://imdb-api.com/en/API/InTheaters/k_1dnxafx4")
    }
  }, [state])


  return (
    <div>
      {state[0] ? <div className="list-movie">{state.map(movies =>
        <OnTheater
        movId = {movies.id}
          img={movies.image}
          alt={movies.title}
          key={movies.id}
        />)}</div> : <p>loading..</p>}

    </div>

  )

}

export default Home