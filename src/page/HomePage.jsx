import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Trending from "../components/Trending";
import FoundSection from "../components/FoundSection";
import ContentSection from "../components/ContentSection";
import { useUser } from "../components/Context/UserContext";
import { useNavigate } from "react-router";

const HomePage = ({ movies }) => {
  const [searchText, setSearchText] = useState("");
  const { user } = useUser();
  const navigate = useNavigate();

  const trendingMovies = movies.filter((movie) => movie.isTrending);

  let filteredMovies = [];

  if (searchText.length > 2) {
    filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  if (user.role == "") navigate("/login");

  if (!movies) return <p>Loading data...</p>;
  return (
    <div className="bg-movie-secondary flex flex-col gap-[1.5rem] md:gap-0">
      <div className="mt-[1.5rem] md:my-[2.125rem]">
        <SearchBar
          placeholderText="Search for movies or TV series"
          setValue={setSearchText}
        />
      </div>
      {searchText.length > 2 ? (
        <FoundSection movies={filteredMovies} searchText={searchText} />
      ) : (
        <div>
          <div className="mb-[22px] md:mb-[2.44rem]">
            <Trending data={trendingMovies} />
          </div>
          <ContentSection movies={movies} heading={"Recommended for you"} />
        </div>
      )}
    </div>
  );
};
export default HomePage;
