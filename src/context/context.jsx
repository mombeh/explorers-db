import { createContext, useState, useRef } from "react"
import PropTypes from "prop-types"

export const MovieContext = createContext()

const MovieContextData = ({chidren}) => {

    const [selectedMovie, setSelectedMovie] = useState(null)


    return (
        <MovieContext.Provider value={{selectedMovie, setSelectedMovie}}>
           {chidren}
        </MovieContext.Provider>
    )
}
export default MovieContextData

MovieContextData.PropTypes= {
    chidren: PropTypes.node
}