import React from "react";
import BlogSlider from "../../components/BlogPageComponents/BlogSlider";
import NewArticles from "../../components/BlogPageComponents/NewArticles";
import Footer from "../../components/IndexPageComponents/Footer";
import Navbar from "../../components/IndexPageComponents/Navbar";

function Blog() {
  return (
    <div>
      <Navbar />
      <BlogSlider />
      <NewArticles />
      <Footer />
    </div>
  );
}

export default Blog;
