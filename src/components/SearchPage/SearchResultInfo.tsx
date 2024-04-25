import { Link } from "react-router-dom";

type Props = {
  total: number;
  city: string;
  country: string;
};

function SearchResultInfo({ total, city, country }: Props) {
  return (
    <div className=" container text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row ">
      {/* //px-16 */}
      <span>
        {total} Food Delivery Restaurants in {city},{country}
        <Link
          to="/"
          className="ml-2 text-sm font-semibold underline cursor-pointer text-saffron"
        >
          Change Location ?
        </Link>
      </span>
      <span>Sort Options here</span>
    </div>
  );
}

export default SearchResultInfo;
