import React from 'react'
import { useLocation, useNavigate,useParams } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import Header from '../components/Header';
const CategoryPage = () => {
    const res=useParams();
  console.log("resuoi",res);
    const location = useLocation();
    const navigation = useNavigate();
    const category = location.pathname.split('/').at(-1);
    return (
        <div className="w-full flex flex-col items-center ">
        <Header  className="w-full"/>
        <div className="flex w-7/12  flex-col  mt-[80px]">
            <div>
                <button onClick={() => navigation(-1)} className="outline border-black rounded-md px-3 py-2">Back</button>
            </div>
            <h2  className='mt-7'>
                Blog On <span>{category}</span>
            </h2>
            
          
        </div>
        <div className='-mt-8  w-full flex justify-center'>
               <Blogs />
          </div>
        <Pagination className="w-full"/>
    </div>
    )
}

export default CategoryPage