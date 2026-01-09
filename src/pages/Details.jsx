import Title from "../components/Title";
import Hero from "../components/Hero";
import Watch from "../components/Watch";
import Footer from "../components/Footer";
import Space from "../components/Space";
import Action from "../components/Action";
import Dates from "../components/Dates";
import Drama from "../components/Drama";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { MovieContext } from "../context/context";
import TopCast from "../components/TopCast";
import SearchBar from "../components/SearchBar";

const Details = () => {
  const { selectedMovie } = useContext(MovieContext);
  const { id } = useParams();

  const { setSelectedMovie } = useContext(MovieContext);
  const navigate = useNavigate();

  const handleNavigation = (item) => {
    setSelectedMovie(item);
    navigate(`/detail/${item.id}`);
  };

  return (
    <>
      <div className="heros" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path})` ,  backgroundColor: 'linear-gradient(#1a1a1b77, #111)'}}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Hero />
        <SearchBar />
        </div>
        <div className="space">
            <Title  title={selectedMovie.title}/>
          <Dates />
          <Watch />
          <Space desciption={selectedMovie.overview}/>
        </div>
      </div>
      <TopCast />
      <Action redirectToDetail={handleNavigation}/>
      <Drama redirectToDetail={handleNavigation}/>
      <Footer />
    </>
  );
};
export default Details;
