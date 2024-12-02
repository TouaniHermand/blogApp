import React, { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const posts = [{ title: "Blog Post #1" }, { title: "Blog Post #2" }];
  const [blogPosts, setBlogPosts] = useState(posts);

  const addBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      { title: `blogpost #${blogPosts.length + 1}` },
    ]);
  };
  return (
    <BlogContext.Provider value={{ blogPosts, setBlogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};
