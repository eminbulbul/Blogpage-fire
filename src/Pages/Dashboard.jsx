import React from "react";
import BlogCard from "../components/BlogCard";
import "./Dashboard.css";
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const Dashboard = () => {
  const { BlogFetch } = useContext(BlogContext);
  const { blogList } = BlogFetch();

  return (
    <div>
      <h1 className="dash-text">──── Dashboard ────</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          // margin: "3rem",
          justifyContent: "center",
        }}
      >
        {blogList?.map((item, index) => (
          <BlogCard item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
