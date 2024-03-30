import profilePageHero from "../../assets/ProfilepageHero.jpeg";

function UserProfileHero() {
  return (
    <div id="img" className=" h-80">
      <img
        src={profilePageHero}
        className="w-full h-full object-cover"
        alt="image"
      />
    </div>
  );
}

export default UserProfileHero;
