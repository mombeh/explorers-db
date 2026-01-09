import Header from "../components/Header";
import Hero from "../components/Hero";
import Adventure from "../components/Adventure";
import Footer from "../components/Footer";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import ContainImage from "../components/ContainImages";
import TopSearch from "../components/TopSearch";
import Action from "../components/Action";
import Drama from "../components/Drama";
import Comedy from "../components/Comedy";
import { MovieContext } from "../context/context";
import { useContext } from "react";
import { useNavigate } from "react-router";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const { setSelectedMovie } = useContext(MovieContext);
  const navigate = useNavigate();

  const handleNavigation = (item) => {
    setSelectedMovie(item);
    navigate(`/detail/${item.id}`);
  };

  return (
    <div className="contain-all-movies">
      <div className="header">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Hero />
        <SearchBar />
        </div>
        <Header />
        <Adventure />
        <Paragraph />
        <Button />
        <ContainImage redirectToDetail={handleNavigation}/>
      </div>
      <TopSearch redirectToDetail={handleNavigation} />
      <Action redirectToDetail={handleNavigation} />
      <Drama redirectToDetail={handleNavigation} />
      <Comedy redirectToDetail={handleNavigation} />
      <Footer />
    </div>
  );
};
export default Home;
