//! database add and call functions

import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";

export const BlogContext = createContext();

// const d = new Date();
// let year = d.getFullYear();
// let month = d.getMonth();
// let day = d.getDay();
// console.log(day, month, year);
const BlogContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  //!Add Blog
  const AddBlog = (info) => {
    const database = getDatabase();
    const blogRef = ref(database, "fireblogDb");
    const newBlogRef = push(blogRef);
    set(newBlogRef, {
      title: info.title,
      imageURL: info.imageURL,
      content: info.content,
      author: currentUser.email,
      // date: day,
      // month,
      // year,
    });
  };
  //!Call Blog
  const BlogFetch = () => {
    const [isLoading, setIsLoading] = useState();
    const [blogList, setBlogList] = useState();

    useEffect(() => {
      setIsLoading(true);
      const database = getDatabase();
      const blogRef = ref(database, "fireblogDb");

      onValue(blogRef, (snapshot) => {
        const data = snapshot.val();
        const blogArray = [];

        for (let id in data) {
          blogArray.push({ id, ...data[id] });
        }
        setBlogList(blogArray);
        setIsLoading(false);
      });
    }, []);
    return { isLoading, blogList };
  };
  return (
    <BlogContext.Provider value={{ BlogFetch, AddBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
export default BlogContextProvider;