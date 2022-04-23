import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import NewBlog from "../Pages/NewBlog";
import Profile from "../Pages/Profile";
import Register from "../Pages/Register";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/newBlog" element={<NewBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
