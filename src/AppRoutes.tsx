import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<span>Home</span>}></Route>
      <Route path="/user-profile" element={<span>User</span>}></Route>
      <Route path="*" element={<span>Error 404</span>}></Route>
    </Routes>
  );
};

export default AppRoutes;
