import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import AuthCallbackPage from "./Auth/AuthCallbackPage";
import UserProfileForm from "./forms/user-profile-form/UserProfileForm";
import UserProfilePage from "./components/UserProfile Page/UserProfilePage";
import UserProfileInfo from "./components/UserProfile Page/UserProfileInfo";
import UserProfileLanding from "./components/UserProfile Page/UserProfileLanding";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="auth-callback" element={<AuthCallbackPage />}></Route>

      <Route path="user-profile">
        <Route index element={<UserProfileLanding />}></Route>
        <Route path="info" element={<UserProfileInfo />} />
      </Route>

      <Route path="*" element={<span>Error 404</span>}></Route>
    </Routes>
  );
};

export default AppRoutes;
