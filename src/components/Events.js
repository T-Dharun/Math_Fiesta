import React from "react";
// import img1 from "./../assets/owl.jpg"
import img2 from "./../assets/paper.jpg";
import img3 from "./../assets/gears.jpg";
import img4 from "./../assets/quiz.jpg";
import img6 from "./../assets/treasurehunt.jpg";
import img7 from "./../assets/skit-transformed.jpeg";
import img8 from "./../assets/rang.jpeg";

const Events = () => {
  return (
    <div>
    <br/>
    <marquee className=" font-bold text-2xl sm:text-3xl ">Pay the General Registration Fee <span className="text-3xl sm:text-4xl">Rs.150</span> Once and Get Access to all the Exciting Events.</marquee>
    <div className=" pt-20 text-black">
      <p className="text-4xl sm:text-5xl text-center text-pink-100 font-semibold underline underline-offset-8 mb-12">
        Technical Events
      </p>

      <div className="flex mx-32 justify-between events flex-wrap gap-4">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow w-2/5 relative">
            <img alt="event"
              src={img2}
              className="h-48 w-full rounded-lg object-cover"
            ></img>
          <div className="p-5">
            <h1 className="text-xl font-extrabold" >PAPER'S CORNER</h1>
            <ul className="list-disc">
             
              <li>
                Individual or team participation ( max 2 members per team)
              </li>
              <li>Last Date for Abstract submission.(22/04/23)</li>
              <li>
              The selected participants will be intimated through E-mail.
              </li>
              <br></br>
           
              <a
                href="https://forms.gle/RszFw4eph8Fidjgo9"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center  bg-blue-700 text-white rounded-lg  absolute right-5 bottom-5 "
              >
                Register
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </ul>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow w-2/5 relative">
          
            <img alt = "event"
              src={img3}
              className="h-48 w-full rounded-lg object-cover"
            ></img>
          <div className="p-5">
            <h1 className="text-xl font-extrabold" >IDEOVANZA</h1>
            <ul  className="list-disc">
              <li>Maximum of 2 members per team.</li>
              <li>Five minutes will be given for each presentation.</li>
              <li>The Project can be of both hardware and software.</li>
              <li>Last Date for Abstract submission.(22/04/23)</li>
              <li>
              The selected participants will be intimated through E-mail.
              </li>
              <br></br>
            </ul>
              <a
                href="https://forms.gle/77mom2ZkLMdPvxVSA"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center  bg-blue-700 text-white rounded-lg absolute right-5 bottom-5 "
              >
                Register
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow w-2/5 relative">
          
            <img alt = "event"
              src={img4}
              className="h-48 w-full rounded-lg object-cover"
            ></img>
          <div className="p-5">
            <h1 className="text-xl font-extrabold" >TECH TRIVIA</h1>
            <ul  className="list-disc">
              <li>Maximum of 2 participants per team.</li>
              <li>
              Participants will be shortlisted through prelims.
              </li>
              <li>The Event consists of 3 Rounds.</li>
              
              <br></br>
              <br></br>
              <a
                href="https://forms.gle/Kqphe3VGw4osXWAz9"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center  bg-blue-700 text-white rounded-lg  absolute right-5 bottom-5 "
              >
                Register
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-4xl sm:text-5xl text-center text-pink-100 font-semibold underline underline-offset-8 my-12">
        Non Technical Events
      </p>

      <div className="flex events flex-wrap mx-32 justify-between">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow w-2/5 relative">
          
            <img alt="event"
              src={img6}
              className="h-48 w-full rounded-lg object-cover"
            ></img>
          <div className="p-5">
            <h1 className="text-xl font-extrabold" >TURFHUNT</h1>
            <ul  className="list-disc">
              <li>A team should have 3 members.</li>
              <li>Participants will be shortlisted through Prelims.(Offline)</li>
              
             <br></br>
              <a
                href="https://forms.gle/5pFCYqcq7BSezMCq7"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center  bg-blue-700 text-white rounded-lg  absolute right-5 bottom-5 "
              >
                Register
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </ul>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow w-2/5 relative">
          
            <img alt="event"
              src={img7}
              className="h-48 w-full rounded-lg object-cover"
            ></img>
          <div className="p-5">
          <h1 className="text-xl font-extrabold" >DRAMATIZERZ</h1>
          <ul  className="list-disc">
            <li>A Team should consist of 5-8 members.</li>
            <li>The time duration for each event is 5-7 mins.</li>
            <li>Teams are requested to come with Mathematicians or scientists related dramas or depict any Mathematical concepts.</li>
            <li>Jury's decision is final.</li>
        
            <br></br>
            </ul>
          <a
                href="https://forms.gle/2iJMotqXPwzqLEAX9"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center  bg-blue-700 text-white rounded-lg absolute right-5 bottom-5 "
              >
                Register
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow w-2/5 relative">
          
            <img alt="event"
              src={img8}
              className="h-48 w-full rounded-lg object-cover"
            ></img>
          <div className="p-5">
            <h1 className="text-xl font-extrabold" >MUGGU</h1>

            <ul  className="list-disc">
              <li>Maximum 3 members per team.</li>
              <li>Time Duration: 2 hrs.</li>
              <li>Jury's decision will be final.</li>
              <li>Rangoli can be of your choice but it should convey any Math concept.</li>
              <br></br>
              <a
                href="https://forms.gle/73ijxk2yXHmGoxov8"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center  bg-blue-700 text-white rounded-lg  absolute right-5 bottom-5 "
              >
                Register
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Events;
