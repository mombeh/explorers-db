import { useState } from "react"

const SearchBar = ()=>{
    const [input, setinput] = useState()
    
    return (
        <div className="text">
          <input type="text" placeholder="Search Movies,Series..." />
          <img
            src="/images/search-interface-symbol.png"
            alt=""
            className="search"
          />
          <img src="/images/Ellipse 14.png" alt="
          " className="image" />
        </div>
    )
}
export default SearchBar