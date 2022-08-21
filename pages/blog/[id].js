import React from "react";
import BlogSlider from "../../components/BlogPageComponents/BlogSlider";

function Blog() {
  return (
    <div>
      <BlogSlider />
    </div>
  );
}

export async function getServerSideProps(context) {}

export default Blog;
