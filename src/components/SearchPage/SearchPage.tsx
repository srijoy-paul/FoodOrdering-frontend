import { useSearchRestaurants } from "@/Api/SearchRestaurantApi";
import { Restaurant } from "@/types";
import { useParams } from "react-router-dom";
import SearchResultInfo from "./SearchResultInfo";
import SearchResultCard from "./SearchResultCard";
import { useState } from "react";
import { SearchForm } from "../SearchBar/SearchBar";

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
  searchQuery: string;
};

function SearchPage() {
  const { city } = useParams();
  const [SearchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
  });
  const { results } = useSearchRestaurants(city);
  console.log(city, typeof city);

  console.log("Found Restaurants-->", results);
  if (!city && results.data == undefined) {
    return <span>No results Found</span>;
  }

  return (
    <div className="container grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div id="cuisines-list" className="border-2 border-red-100">
        Cuisines List here
      </div>
      <div id="restrauants-list" className=" flex flex-col gap-5">
        <SearchResultInfo
          total={results?.pageParameters.total}
          city={city}
          country={results?.data[0].country}
        />
        <div className="flex flex-wrap gap-5 place-content-center">
          {results?.data.map((restaurant: Restaurant) => (
            <SearchResultCard restaurant={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
