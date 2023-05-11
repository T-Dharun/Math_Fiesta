import React from "react";
const About = () => {
  return (
    <div >
      <div className=" text-2l py-10 bg-black  text-center h-full w-full bg-opacity-60 flex flex-col md:flex-row justify-evenly items-center flex-wrap">
        <div className=" w-5/6 md:w-2/6">
          
          <p className="text-3xl underline  pb-4 lg:whitespace-nowrap	 " >Srinivasa Ramanujan Mathematics Club</p>
          <p>
            Srinivasa Ramanujan Mathematics Club was started in the year 2014-15.
            The club is unique in its own way. This club aims students to be
            faster and accurate in their works and apply Math in daily life
            situations. The club is functioned by students representing as main
            bodies such as secretary, treasurer, chairman and executive members.
            The club conducts many events such as Quiz, Sudoko and puzzle solving, 
            Math Fiesta, Math pi-Thons and so on, to enhance the Student's Math and 
            Problem Solving skills. Math Fiesta, A National Level Mathemical Symposium 
            is one of the most popular event of the club,which is conducted each year.
          </p>
        </div>
       
        <div className="w-5/6 pt-10 md:p-0 md:w-2/6">
  
          
          <p className="text-3xl underline pb-4">Math Fiesta'23</p>
          <p>
            Math Fiesta is a National Level Mathematical Symposium conducted by Srinivasa
            Ramanujan Mathematics Club each year. The event mainly focuses on
            math related technical and non-technical areas that enlightens the
            youth generation to be more specific. Many of us study math as
            formulas and in written format, but we doesn't know where to apply
            it in daily life. Math Fiesta provides a wonderful opportunity to
            know how Math is applied in all Fields through the Events such as, 
            Paper presentation, Idea presentation, Quiz, Math Rangoli, Treasure 
            hunt and Skit.
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;
