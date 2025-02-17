import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

import './App.css'

function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () =>{
        try{
            const response =await fetch('https://api.themoviedb.org/3/discover/movie?api_key=ce0af01a28873ff7436eeacd3d3e4892')
            const data = await response.json()
            setMovies(data.results)
        }catch (error) {
            console.error('Error fetching movies:',error)
        }
    }
    fetchMovies()
},[])

  return (
    <>
    <Header />
    <h1 className='latest'>Latest and Tending</h1>
    <div className='contain-image'>
      {movies.map((item,index)=>{
        return(
          <>
          <div className='movie' key={item.id}>
            <p className='numbers'>{index + 1}</p>
            <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`} alt={item.title} className='items'/>
          </div>
          </>
        )
      })}
    </div>
    <Footer />

    </>
  )
}

export default App
