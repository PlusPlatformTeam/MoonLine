import React from 'react';
import Navbar from './../../components/navbar/Navbar';
import "./home.css";
import Cards from "../../assets/images/homeCards.png";


const Home = () => {
  return (
      <>
        <Navbar/>
        <div className='flex flex-row w-full'>

            <div className='w-4/12'>
                <h2 className='text-white font-bold text-3xl mt-16 mx-12'>طراحی مدرن با <span className='font-bold text-5xl blue-base-color'>مون لاین</span></h2>
                <h2 className='text-white font-noraml text-xl mt-10 mx-12'>تیم مون لاین با ارائه خدمات<span className='blue-base-color'>طراحی وبسایت، دیزاین، توسعه اپ</span>توسط بهترین و بروزترین متدهای طراحی و برنامه نویسی، آماده رشد برند و کسب و کار شماست.</h2>
            </div>

            <div className='w-8/12 hidden lg:block text-end justify-center mt-5'>
                <img className='w-full p-20' src={Cards} alt="home cards image" />


            </div>



        </div>
      </>
    


   
    
  )
}

export default Home;