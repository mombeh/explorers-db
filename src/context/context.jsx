import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const MovieContext = createContext();

export const MovieContextData = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <MovieContext.Provider value={{ selectedMovie, setSelectedMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

MovieContextData.propTypes = {
  children: PropTypes.node,
};

export default MovieContextData;
