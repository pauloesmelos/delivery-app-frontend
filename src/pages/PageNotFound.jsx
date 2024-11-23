import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="w-ful h-screen flex justify-center items-center bg-slate-800 relative">
      <div className="absolute top-10 left-10">
        <Link to="/" className="px-4 py-2 w-[200px] bg-orange-600 text-white font-medium text-sm rounded-md">
           GO TO HOME
        </Link>
      </div>
      <div className="p-2">
        <h1 className="font-bold text-3xl text-center text-orange-600">
           * ERROR 404, PAGE NOT FOUND
        </h1>
      </div>
    </div>
  )
}

export default PageNotFound;