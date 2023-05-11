import React from "react";
// import staff from "./../assets/gallery/staff.JPG";
import img1 from "./../assets/gallery/dharshan.jpeg";
import img2 from "./../assets/gallery/kevin.jpeg";
import img3 from "./../assets/gallery/tamil.jpeg";
import img4 from "./../assets/gallery/vg.jpeg";
import img5 from "./../assets/gallery/pranesh.jpeg";
import img6 from "./../assets/gallery/nishanth.jpeg";
import img7 from "./../assets/gallery/priya.jpeg";
import img8 from "./../assets/gallery/gk.jpeg";

const OBList = () => {
  return (
    <div className=" flex flex-col justify-center items-center pt-10">
      <div className="text-center">
        <p className=" text-2xl underline underline-offset-5 pb-4 ">
          FACULTY COORDINATORS
        </p>
        {/* <div className="image">
        <img src={staff} alt="Staff" className="h-96 w-150" rounded-full />
        </div> */}
        <div className="flex-col justify-between px-10 py-2">
          <p>Dr. M. DHAVAMANI<br></br> Assc. Prof</p><br></br>
          <p>Dr. A.L. NACHAMMAI<br></br> Asst. Prof (Sr. G) </p>
        </div>
      </div>
      <div className="text-center">
        <p className=" text-2xl underline underline-offset-4 pb-3 pt-20">
          STUDENT COORDINATORS
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 px-20 gap-6">
          <div className=" h-96 ">
            <img src={img1} alt="" className=" object-cover h-5/6 w-full " />
            <p className="text-2xl">CHAIRMAN</p>
            <p>S. DHARSAN</p>
          </div>
          <div className=" h-96">
            <img
              src={img2}
              alt="Office Bearer"
              className=" object-cover h-5/6 w-full "
            />
            <p className="text-2xl">CO-CHAIRMAN</p>
            <p> K.V. KEVIN</p>
          </div>
          <div className=" h-96">
            <img
              src={img3}
              alt="Office Bearer"
              className=" object-cover h-5/6 w-full"
            />
            <p className="text-2xl">PRESIDENT</p>
            <p>K.A. THAMIZHINI</p>
          </div>
          <div className=" h-96">
            <img
              src={img4}
              alt="Office Bearer"
              className=" object-cover h-5/6 w-full"
            />
            <p className="text-2xl">SECRETARY</p>
            <p>S. VISHNUGILANAND</p>
          </div>
          <div className=" h-96">
            <img
              src={img5}
              alt="Office Bearer"
              className=" object-cover h-5/6 w-full"
            />
            <p className="text-2xl">JOINT SECRETARY</p>
            <p>S. PRANESH</p>
          </div>
          <div className=" h-96">
            <img
              src={img6}
              alt="Office Bearer"
              className=" object-cover h-5/6 w-full"
            />
            <p className="text-2xl">JOINT SECRETARY</p>
            <p>P. NISAANTH</p>
          </div>
          <div className=" h-96">
            <img
              src={img7}
              alt="Office Bearer"
              className=" object-cover h-5/6 w-full"
            />
            <p className="text-2xl">TREASURER</p>
            <p>R. PRIYADHARSHINI</p>
          </div>
          <div className=" h-96">
            <img
              src={img8}
              alt="Office Bearer"
              className=" object-cover h-5/6 w-full"
            />
            <p className="text-2xl">JOINT TREASURER</p>
            <p>R. GOKULKRISHNA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OBList;
