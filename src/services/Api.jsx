import { useState, useEffect } from "react";

const Api = () => {
    const [movies, setMovies] = useState(0)

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
    },0)

    return (
        <div>
            <h1>Popular Movies</h1>
            <ul>
                {movies.map((movie)=>(
                    <li key ={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default Api