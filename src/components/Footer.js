import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "./../assets/cheesyy1.png";
import img2 from "./../assets/sentin.jpg";
import img3 from "./../assets/SGS DESIGNS 3.png";
import img4 from "./../assets/horcrux.png";
const Footer = () => {
  return (
    <div /*className="bg-pink-900"*/>
      <div className="max-w-[1240px] mx-auto py-16 px-4 flex flex-wrap justify-between  text-gray-300 relative footer">
        <div className="">
        <div className="col-span-2">
          <h1 className="w-full text-4xl font-bold">Contact Us</h1>
          <br></br>
          <div className="mt-1">
          <div className="flex">
            <ul >
              <a
                href="https://chat.whatsapp.com/BQCgQBAIHdHIxM4yW65jtm"
                rel="noopener noreferrer "
                target={"_blank"}
              >
                <li className=" px-2 text-sm ">
                  {" "}
                  <FaWhatsapp size={30} className="inline-block" />{" "}
                </li>
              </a>
            </ul>
            <br />
            <ul >
              <a
                href="https://instagram.com/kec_mathematics_club?igshid=YmMyMTA2M2Y="
                rel="noopener noreferrer "
                target={"_blank"}
              >
                <li className="px-2 text-sm">
                  {" "}
                  <FaInstagram size={30} className="inline-block" />{" "}
                </li>
              </a>
            </ul>
          </div>
        </div>
        </div>
        <br></br>

          <div className="pl-15 flex flex-wrap text-sm ">
          <div><p className="py-4  font-bold  text-2xl ">
           Staff Co-ordinator
          </p>

          <div className="grid gap-4 grid-cols-3">
            <p className=" col-span-2 " >Dr. M. DHAVAMANI Assc. Prof </p>
            <p> 9842740601</p>
            <p className=" col-span-2 ">Dr. A.L. NACHAMMAI Asst. Prof (Sr. G) </p>
            <p> 9095059729</p>
          </div>

          </div>
                    
          <div>
  
          <p className=" py-4 font-bold text-2xl  ">
                Student Co-ordinator
          </p>

          <div className="grid gap-4 grid-cols-3">
          <p className=" col-span-2 ">K.A. THAMIZHINI </p>
          <p> 9994061719</p>
          <p className=" col-span-2 ">S. VISHNUGILANAND </p>
          <p> 9994231304</p>
          <p className=" col-span-2 ">S. PRANESH </p>
          <p> 9659222849</p>
        </div>
          </div>

        </div>
        </div>
        <br></br>
     
       
      </div>
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-2 text-gray-300 relative">
        <hr />
        <div className="flex justify-center allign-center ">
          <p className="px-4">Developed By</p>{" "}
          <Link to="" className="underline underline-offset-2">
            {" "}
            <p>dreamimbue</p>
          </Link>
        </div>
        <hr />
      </div>
      
      <footer>
        
        <div className="mt-1 flex social justify-center items-center">
          <p className="py-4 font-bold justify-center text-2xl ">
           <center className="pb-4" >Social Media Team</center> 
            <ul className="social flex justify-center w-1/2 m-auto">
              <li  className="w-3/12 text-center">
            <a href="https://instagram.com/horcrux._.creations?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">
                <img src={img4} alt="Media Parter" />
            </a></li>
            <li className="w-3/12">
            <a href="" target="_blank" rel="noopener noreferrer">
                <img src={img3} alt="Media Parter" />
            </a>
            </li>
            <li className="w-3/12">
            <a href="https://instagram.com/kec_sentinels?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">
                <img src={img2} alt="Media Parter" />
            </a></li>
            <li className="w-3/12">
            <a href="" target="_blank" rel="noopener noreferrer">
                <img src={img1} alt="Media Parter"/>
            </a>
            </li>
            </ul>
          </p>
        </div>
       
        </footer>
    </div>
  );
};

export default Footer;
