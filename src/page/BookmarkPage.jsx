import SearchBar from "../components/SearchBar";
import FoundSection from "../components/FoundSection";
import ContentSection from "../components/ContentSection";
import { useSearchParams } from "react-router";
import { useUser } from "../components/Context/UserContext";

const BookmarkPage = ({ movies }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = searchParams.get("search") || "";
  const { user } = useUser();

  if (!movies || Object.keys(user).length == 0) return <p>Loading data...</p>;
  const content = movies.filter((movie) => user.bookmarks.includes(movie.id));

  let filteredMovies = [];

  if (searchValue.length > 2) {
    filteredMovies = content?.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  return (
    <div className="bg-movie-secondary flex flex-col gap-[1.3rem] md:gap-0">
      <div className="mt-[1.4rem]  md:my-[1.99rem]">
        <SearchBar
          placeholderText="Search for bookmarked shows"
          value={searchValue}
          setSearchParams={setSearchParams}
        />
      </div>
      {searchValue.length > 2 ? (
        <FoundSection movies={filteredMovies} searchText={searchValue} />
      ) : (
        <>
          <div className=" md:pb-[43px] desktop:pb-[37px]">
            <ContentSection movies={content} heading={"Bookmarked Movies"} />
          </div>
          <div>
            <ContentSection movies={content} heading={"Bookmarked TV Series"} />
          </div>
        </>
      )}
    </div>
  );
};
export default BookmarkPage;
