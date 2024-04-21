import manageRestaurantPageHero from "../../assets/Cover-image-1.jpeg";

function ManageRestaurantHero() {
  return (
    <div id="img" className=" h-80">
      <img
        src={manageRestaurantPageHero}
        className="w-full h-full object-cover"
        alt="image"
      />
    </div>
  );
}

export default ManageRestaurantHero;
