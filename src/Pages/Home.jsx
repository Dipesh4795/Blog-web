import React from 'react'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className=" flex flex-col  items-center  w-[100vw] h-[100vh]  ">
            <Header />
             <Blogs />
            <Pagination />
        
    </div>
  )
}

export default Home