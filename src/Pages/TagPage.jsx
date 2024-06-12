import React from "react";
import Header from "../components/Header";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useEffect } from "react";

import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
const TagPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  console.log(location);
  console.log(location.pathname);
  console.log(useParams());
  const [searchparams, setsearchparams] = useSearchParams();

  console.log(searchparams.get("page"));
  const tag = location.pathname.split("/").at(-1);

  return (
    <div className="w-full flex flex-col items-center ">
      <Header className="w-full" />
      <div className="flex w-7/12  flex-col  mt-[80px]">
        <div>
          <button
            onClick={() => navigation(-1)}
            className="outline border-black rounded-md px-3 py-2"
          >
            Back
          </button>
        </div>
        <h2 className="mt-7">
          Blog Tagged <span>#{tag}</span>
        </h2>
      </div>
      <div className="-mt-8  w-full flex justify-center">
        <Blogs />
      </div>
      <Pagination className="w-full" />
    </div>
  );
};

export default TagPage;
