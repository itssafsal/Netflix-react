import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../constants/constants'
import "./Banner.css"

function Banner() {
  const [movie,setMovie] = useState()
  

  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      const randomNum = Math.floor(Math.random() * 20)
      const randomMovie = response.data.results[randomNum]

      // console.log(randomMovie);
      setMovie(randomMovie)
    });
  },[])


  return (
    <div
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? (movie.name||movie.title) : ""}</h1>
        <div className='banner-btns'>
            <button className='button'>Play</button>
            <button className='button'>My List</button>
        </div>
        <h1 className='discription'>{movie ? movie.overview: ""}</h1>
      </div>

      <div className="fade-bottom">
        
      </div>
    </div>
  )
}

export default Banner
