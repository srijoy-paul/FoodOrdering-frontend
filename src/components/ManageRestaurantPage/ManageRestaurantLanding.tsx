import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import ManageRestaurantHero from "./ManageRestaurantHero";
import ManageRestaurantPage from "./ManageRestaurantPage";

function ManageRestaurantLanding() {
  return (
    <ManageRestaurantPage>
      <div className="flex flex-col h-full gap-3" style={{ height: "100%" }}>
        <ManageRestaurantHero />
        <div>Details about the offerings</div>
        <Button className="bg-saffron w-[250px]">
          <Link to="create-your-restaurant">
            Register / Manage your Restaurant
          </Link>
        </Button>
      </div>
    </ManageRestaurantPage>
  );
}

export default ManageRestaurantLanding;
