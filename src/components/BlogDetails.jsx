import React from "react";
import { NavLink } from "react-router-dom";

const BlogDetails = ({post}) => {
  return (
    <div className="w-full">
      <NavLink to={`/blog/${post.id}`}>
        <span className="font-bold text-xl">{post.title}</span>
      </NavLink>
      <p>
        By
        <span className="px-2">{post.author}</span>
        On
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="font-bold text-md pl-2">{post.category}</span>
        </NavLink>
      </p>
      <p>Posted on {post.date}</p>
      <p>{post.content}</p>
      <div className="flex  flex-wrap gap-x-3 " >
        {post.tags.map((tag, index) => 
        (
           <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
              <span className="text-blue-800"> {`#${tag}`} </span>
           </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
