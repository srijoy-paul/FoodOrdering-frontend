import { useParams } from "react-router-dom";

function SearchPage() {
  const { city } = useParams();
  return <div className="container">User Searched for {city}</div>;
}

export default SearchPage;
