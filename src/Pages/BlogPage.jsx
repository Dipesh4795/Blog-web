import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";
import BlogDetails from "../components/BlogDetails";
import { baseUrl } from "../baseUrl";

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedblog, setRelatedblog] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const {blogId}=useParams();
  console.log(useParams());
  const { loading, setLoading } = useContext(AppContext);
  // const blogId = location.pathname.split("/").at(-1);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setBlog(data.blog);
      setRelatedblog(data.relatedBlogs);
    } catch (err) {
      console.log(err);
      setBlog(null);
      setRelatedblog([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div className="w-full flex flex-col items-center ">
      <Header className="w-full "  />
      <div className="flex w-7/12  flex-col my-[80px]">
      <div >
        <button onClick={() => navigation(-1)} className="outline border-black rounded-md px-3 py-2" >Back</button>
      </div>
      <div className="mt-4">
        {loading ? (
          <p>Loading...</p>
        ) : blog ? (
          <div className="flex flex-col gap-y-4">
            <BlogDetails post={blog} />
            <h2>Releated Blogs</h2>
            {relatedblog.map((post) => (
              <div key={post.id}>
                <BlogDetails post={post} />
              </div>
            ))}
          </div>
        ) : (
          <p>No Blog Found</p>
        )}
      </div>
      </div>
      
    </div>
  );
};

export default BlogPage;
