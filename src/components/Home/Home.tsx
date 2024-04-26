import Layout from "../../layouts/Layout";
import Hero from "./Hero";
import moblieDisplayTransparent from "../../assets/moblieDisplayTransparent.png";
import googlePlay from "../../assets/getOnGooglePlay.png";
import iosAppStore from "../../assets/getOnIosAppStore.png";
import SearchBar, { SearchForm } from "../SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchquery}`,
    });
  };

  return (
    <Layout isAbsolute={true}>
      <Hero />

      <div className="bg-white rounded-lg shadow-md py-8  flex flex-col gap-5 text-center -mt-16 z-40 container mx-auto border-5 border-purple-800 relative md:px-30">
        <h1 className="text-5xl text-saffron">Tuck into a takeway today</h1>
        <span className="text-xl">Food is just a clickway</span>
        <SearchBar
          placeholder="Search by City or Town"
          onSubmit={handleSearchSubmit}
          searchquery=""
        />
      </div>

      <div className="container grid md:grid-cols-2 gap-5 sm:items-center ">
        <div className="flex place-content-center ">
          <img src={moblieDisplayTransparent} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the BengalBiteExpress App for the faster ordering and
            personalized recommendations
          </span>
          <span className="flex ">
            <span className="cursor-pointer">
              <img
                src={googlePlay}
                style={{ height: "100%", width: "100%" }}
                alt=""
              />
            </span>
            <span className="cursor-pointer flex items-center justify-center ">
              <img
                className=""
                style={{ height: "84%", width: "100%" }}
                src={iosAppStore}
                alt=""
              />
            </span>
          </span>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
