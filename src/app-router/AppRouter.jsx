import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import NewBlog from "../Pages/NewBlog";
import Profile from "../Pages/Profile";
import Register from "../Pages/Register";
import Details from "../Pages/Details";
import PrivateRouter from "./PrivateRouter";
const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRouter />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/newBlog" element={<NewBlog />} />
            <Route path="/details/" element={<Details />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
