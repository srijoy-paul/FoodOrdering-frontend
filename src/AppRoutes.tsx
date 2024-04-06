import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import AuthCallbackPage from "./Auth/AuthCallbackPage";
import UserProfileInfo from "./components/UserProfile Page/UserProfileInfo";
import UserProfileLanding from "./components/UserProfile Page/UserProfileLanding";
import ProtectedRoute from "./Auth/ProtectedRoute";
import ManageRestaurantPage from "./components/ManageRestaurantPage/ManageRestaurantPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="auth-callback" element={<AuthCallbackPage />}></Route>

      <Route element={<ProtectedRoute />}>
        <Route path="user-profile">
          <Route index element={<UserProfileLanding />}></Route>
          <Route path="info" element={<UserProfileInfo />} />
        </Route>

        <Route path="manage-restaurant" element={<ManageRestaurantPage />} />
      </Route>

      <Route path="*" element={<span>Error 404</span>}></Route>
    </Routes>
  );
};

export default AppRoutes;
