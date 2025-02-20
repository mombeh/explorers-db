import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { MovieContext } from "../context/context";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchedMovie, setSearchedMovie] = useState([]);
  const navigate = useNavigate();
  const { setSelectedMovie } = useContext(MovieContext);

  const fetchData = async (event) => {
    const searchTerm = event.target.value;
    setQuery(searchTerm);

    if (searchTerm.length > 1) {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=ce0af01a28873ff7436eeacd3d3e4892&query=${searchTerm}`
      );

      const data = await response.json();
      setSearchedMovie(data.results || []);
    } else {
      setSearchedMovie([]);
    }
  };

  const handleNavigation = (item) => {
    console.log(item)
    setSelectedMovie(item);
    navigate(`/detail/${item.id}`);
  };

  return (
    <div className="text">
      <input
        type="text"
        placeholder="Search Movies,Series..."
        value={query}
        onChange={fetchData}
      />

      {searchedMovie.length > 0 && (
        <div className="search-result">
          {searchedMovie.map((item) => (
            <div key={item.id} className="search-item">
              <img
                src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${item.poster_path}`}
                alt={item.title}
                onClick={() => handleNavigation(item)}
              />
            </div>
          ))}
        </div>
      )}
      <img
        src="/images/search-interface-symbol.png"
        alt=""
        className="search"
      />
      <img
        src="/images/Ellipse 14.png"
        alt="
          "
        className="image"
      />
    </div>
  );
};
export default SearchBar;
