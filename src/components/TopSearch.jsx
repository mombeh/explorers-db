import { useEffect, useState } from 'react'

function TopSearch({redirectToDetail}) {
    const [movies, setMovies] = useState([])
  
    useEffect(() => {
      const fetchMovies = async () =>{
          try{
              const response =await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=ce0af01a28873ff7436eeacd3d3e4892')
              const data = await response.json()
              setMovies(data.results)
          }catch (error) {
              console.error('Error fetching movies:',error)
          }
      }
      fetchMovies()
  },[])
  
    return (
      <div className='all'>
       <div className='view'>
        <h1>Top Searches</h1>
        <button className='arrors'>View More</button>
        </div>
      <div className='movie-hold'>
        {movies.map((item)=>{
          return(
            <>
            <div className='movies' key={item.id}>
              <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`} alt={item.title} className='items' onClick={()=>redirectToDetail(item)}/>
            </div>
            </>
          )
        })}
      </div>

  
      </div>
    )
  }
  export default TopSearch