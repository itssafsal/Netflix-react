import React, { useEffect, useState } from 'react'
import { imageUrl, API_KEY } from '../../constants/constants'
import Youtube from 'react-youtube'
import "./RowPost.css"
import axios from '../../axios'
function RowPost(props) {
  const [movies,setmovies] = useState([])
  const [urlId, setUrlId] = useState()

  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      // console.log(response);
      setmovies(response.data.results)
    }).catch((err)=>{
      alert(err);
    })
  })

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.leangth!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('trailer not available')
      }
    })
  }

  return (
    <div className='row' >
      <h2 style={{marginLeft:'15px', marginTop:'5px'}}>{props.title}</h2>

      <div className="posters">
        {movies.map((movie)=>{
          return(
            <img onClick={()=>handleMovie(movie.id)} className={props.isSmall ? 'smallposter':'poster'} src={`${imageUrl+movie.backdrop_path}`} alt="poster"  />
          )
        })}
        
      </div>
        {urlId && <Youtube opts={opts}  videoId={urlId.key} />}
    </div>
  )
}

export default RowPost
