import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import AuthCallbackPage from "./Auth/AuthCallbackPage";
import UserProfileInfo from "./components/UserProfile Page/UserProfileInfo";
import UserProfileLanding from "./components/UserProfile Page/UserProfileLanding";
import ProtectedRoute from "./Auth/ProtectedRoute";
import ManageRestaurantPage from "./components/ManageRestaurantPage/ManageRestaurantPage";
import ManageRestaurantLanding from "./components/ManageRestaurantPage/ManageRestaurantLanding";
import ManageRestaurantInfoPage from "./components/ManageRestaurantPage/ManageRestaurantInfoPage";
import Layout from "./layouts/Layout";
import SearchPage from "./components/SearchPage/SearchPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="auth-callback" element={<AuthCallbackPage />}></Route>
      <Route
        path="/search/:city"
        element={
          <Layout isAbsolute={false}>
            <SearchPage></SearchPage>
          </Layout>
        }
      ></Route>

      <Route element={<ProtectedRoute />}>
        <Route path="user-profile">
          <Route index element={<UserProfileLanding />}></Route>
          <Route path="info" element={<UserProfileInfo />} />
        </Route>

        <Route path="manage-restaurant">
          <Route index element={<ManageRestaurantLanding />}></Route>
          <Route
            path="create-your-restaurant"
            element={<ManageRestaurantInfoPage />}
          />
        </Route>
      </Route>

      <Route path="*" element={<span>Error 404</span>}></Route>
    </Routes>
  );
};

export default AppRoutes;
