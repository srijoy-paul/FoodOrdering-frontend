import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/user-profile" element={<span>User</span>}></Route>
      <Route path="*" element={<span>Error 404</span>}></Route>
    </Routes>
  );
};

export default AppRoutes;
