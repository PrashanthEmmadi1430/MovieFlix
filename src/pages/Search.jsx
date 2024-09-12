import MovieSuggestions from "../components/MovieSuggestions";
import SearchBar from "../components/SearchBar";

const Search = () => {
  return (
    <>
      {/* Background image */}
      <div className="fixed -z-10 bg-black">
        {/* <img className="h-screen w-screen" src={BACKGROUND_IMG} alt="logo" /> */}
      </div>
      <div className="bg-black w-screen h-screen">
        {/* Search bar component */}
        <SearchBar />
        {/* Component to display movie suggestions based on search results */}
        <MovieSuggestions />
      </div>
    </>
  );
};

export default Search;
