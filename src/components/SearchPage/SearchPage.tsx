import { useSearchRestaurants } from "@/Api/SearchRestaurantApi";
import { Restaurant } from "@/types";
import { useParams } from "react-router-dom";
import SearchResultInfo from "./SearchResultInfo";
import SearchResultCard from "./SearchResultCard";
import { useState } from "react";
import SearchBar, { SearchForm } from "../SearchBar/SearchBar";
import PaginationSelector from "../Pagination/PaginationSelector";
import CuisineFilter from "./CuisineFilter";

// type typeresults = {
//   results: {
//     data: Restaurant[];
//     pageParameters: {
//       total: number;
//       page: number;
//       pages: number;
//     };
//   };
//   isLoading: boolean;
// };

export type SearchState = {
  searchquery: string;
  page: number;
  selectedcuisines: string[];
};

function SearchPage() {
  const { city } = useParams();
  const [SearchState, setSearchState] = useState<SearchState>({
    searchquery: "",
    page: 1,
    selectedcuisines: [],
  });

  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { results } = useSearchRestaurants(SearchState, city);
  console.log(city, typeof city);

  console.log("Found Restaurants-->", results);
  if (!city && (results.data == undefined || results.data.length === 0)) {
    console.log("hi");

    return <span>No results Found</span>;
  }

  const setSelectedCuisines = (selectedcuisines: string[]) => {
    setSearchState((prevState) => ({
      ...prevState,
      selectedcuisines,
      page: 1,
    }));
  };

  const setPage = (page: number) => {
    setSearchState((prevState) => ({
      ...prevState,
      page,
    }));
  };

  const setSearchQuery = (searchFromData: SearchForm) => {
    setSearchState((prevState) => ({
      ...prevState,
      searchquery: searchFromData.searchquery,
      page: 1,
    }));
  };

  const resetSearch = () => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: "",
      page: 1,
    }));
  };

  return (
    <div className="container grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5 mb-5">
      <div id="cuisines-list" className="">
        <CuisineFilter
          selectedCuisines={SearchState.selectedcuisines}
          onChange={setSelectedCuisines}
          isExpanded={isExpanded}
          onExpandedClick={() => setIsExpanded((prevState) => !prevState)}
        />
      </div>
      <div id="restrauants-list" className=" flex flex-col gap-5">
        <SearchBar
          searchquery={SearchState.searchquery}
          placeholder="Search by cuisines or Restaurant name"
          onSubmit={setSearchQuery}
          onReset={resetSearch}
        />
        <SearchResultInfo
          total={results?.pageParameters?.total}
          city={city}
          country={results?.data[0]?.country}
        />
        <div className="flex flex-wrap gap-5 place-content-center">
          {results?.data.map((restaurant: Restaurant) => (
            <SearchResultCard restaurant={restaurant} />
          ))}

          <PaginationSelector
            page={results?.pageParameters?.page}
            pages={results?.pageParameters?.pages}
            onPageChange={setPage}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
