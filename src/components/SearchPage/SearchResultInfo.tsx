import { Link } from "react-router-dom";

type Props = {
  total: number;
  city: string;
  country: string;
};

function SearchResultInfo({ total, city, country }: Props) {
  return (
    <div className="text-lg md:text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
      {/* //px-16 */}
      <span className="flex flex-row">
        {total} Food Delivery Restaurants in {city},{country}
        <Link
          to="/"
          className="ml-2 text-xs md:text-sm font-semibold underline cursor-pointer text-saffron  break-keep flex items-center"
        >
          Change Location ?
        </Link>
      </span>
    </div>
  );
}

export default SearchResultInfo;
