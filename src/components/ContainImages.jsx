import { useEffect, useState } from 'react'

const ContainImage = ({redirectToDetail}) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
      const fetchMovies = async () =>{
          try{
              const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=ce0af01a28873ff7436eeacd3d3e4892')
              const data = await response.json()
              setMovies(data.results)
          } catch (error) {
              console.error('Error fetching movies:', error)
          }
      }
      fetchMovies()
    }, [])

    return (
        <div className='all'>
        <h1 className='latest'>Latest and Trending</h1>
        <div className='contain-image'>
          {movies.map((item, index) => (
            <div className='movie' key={item.id}>
              <p className='numbers'>{index + 1}</p>
              <img 
                src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`} 
                alt={item.title} 
                onClick={()=>redirectToDetail(item)}
                className='items'
              />
            </div>
          ))}
        </div>
        </div>
    )
}

export default ContainImage
