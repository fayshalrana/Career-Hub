import React, { useEffect, useState } from "react";

const JobCatagory = () => {
    const [catagory, setCatagory] = useState([]);
    useEffect(()=>{
      fetch("catagori.json")
      .then(res => res.json())
      .then(data => setCatagory(data));
    },[])
  return (
    <section className="py-20">
      <div className="mx-12">
        <div className="pb-4 text-center">
          <h2 className="text-5xl font-bold">Job Category List</h2>
          <p className="text-xl pt-5">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5 mt-10">
          {catagory.map((catagoriItm) => 
            <div className="bg-gray-300 p-10 rounded-md" key={catagoriItm.id}>
              <div className="w-16 h-16 bg-gray-200 flex justify-center items-center rounded-md "><img src={catagoriItm.image} alt="" /></div>
              <h3 className="pt-5 pb-3 text-xl font-bold">{catagoriItm.title}</h3>
              <p>{catagoriItm.subTitle}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobCatagory;
