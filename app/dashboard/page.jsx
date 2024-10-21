"use client"
import React from "react";
import { FaRegComments } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
import Sidebar from "@/components/Sidebar";
import Image from "next/image";


const DashboardPage = () => {

  const [currentDate, setCurrentDate] = useState(new Date());

    const monthNames = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", 
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];

    const changeMonth = (direction) => {
        const newDate = new Date(currentDate);
        newDate.setMonth(currentDate.getMonth() + direction);
        setCurrentDate(newDate);
    };

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const today = currentDate.getDate();

  return (
    <Sidebar>
  
    <div className="container mx-auto p-4 bg-white  h-screen rounded-tl-[3rem] rounded-bl-[3rem] overflow-y-scroll">
      <header className="flex">
        <form className="max-w-md p-2">
          <div className="relative">
            <div className="absolute inset-y-0 end-0 flex items-center pe-4 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-3 ps-5 text-sm text-gray-500 border border-gray-300 rounded-[1rem] bg-gray-50 focus:ring-gray-400 focus:border-gray-100 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-200 dark:focus:border-gray-300"
              placeholder="Search"
              required
            />
          </div>
        </form>
        <div className="flex justify-start items-center gap-6 ms-auto p-2">
          <div className="flex gap-6 text-2xl relative">
            <FaRegComments />
            <div className="relative">
              <IoMdNotifications />
              <span className="absolute top-0 right-0 block w-2 h-2 bg-orange-500 rounded-full"></span>
            </div>
          </div>
          <div className="flex text-md justify-around items-center w-40 p-1 text-gray-500 border border-gray-300 rounded-[1rem]">
            <Image
              src="/images/Ellipse 38.png" 
              alt="ellipse"
              width={40} // Spécifiez la largeur de l'image (en pixels)
              height={40} // Spécifiez la hauteur de l'image (en pixels)
              className="rounded-full" // Classe Tailwind pour rendre l'image ronde
            />
            Dr. Kim
          </div>
        </div>
      </header>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-8/12 px-2 py-2">
          <h2 className="p-4 text-lg">
            Good Morning{" "}
            <span className="text-teal-600 font-bold">Dr. Kim!</span>
          </h2>
          <div className="w-full flex relative bg-gradient-to-r from-teal-100 to-teal-500 h-50 p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
              <div className="pt-4 -mt-8 font-bold">
                <p>Visits for Today</p>
                <span className="text-3xl">104</span>
              </div>
              <div className="flex pt-5 gap-4">
                <div className="p-3 w-[160px] h-[95px] bg-teal-100  opacity-1 rounded-3xl shadow-2xl border border-green-200 font-bold">
                  <p>New Patients</p>
                  <div className="flex flex-wrap pt-2">
                    <span className="text-xl">40</span>
                    <div
                      className="w-[80px] h-[30px] bg-green-200 border border-[#a1e9a1] opacity-0.5 shadow-[0px_27.49px_27.49px_0px_#00000026] absolute rounded-lg"
                      style={{ top: "8.5rem", left: "7rem" }}
                    >
                      <span className="flex justify-center items-center gap-3 text-[#7fdb7f]">
                        51%
                        <FaArrowTrendUp />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-2 mt-1 w-[160px] h-[85px] bg-teal-100  opacity-1 rounded-3xl shadow-xl border border-green-200 font-bold">
                  <p>Old Patients</p>
                  <div className="flex flex-wrap pt-2">
                    <span className="text-xl">64</span>
                    <div
                      className="w-[65px] h-[25px] bg-red-200 border border-[#e4a9a1] opacity-0.5 shadow-[0px_27.49px_27.49px_0px_#00000026] absolute rounded-lg"
                      style={{ top: "8.5rem", left: "18rem" }}
                    >
                      <span className="flex justify-center items-center gap-1 text-[#e0402a]">
                        20%
                        <FaArrowTrendDown />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pt-10 -mt-28 absolute">
              <Image
                src="/images/unsplash_7bMdiIqz_J4.png"
                alt="Dr-Kim"
                width={290} 
                height={258} 
                className="ms-[440px]"
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/12 px-2">
                <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Calendrier</h2>
            <div className="flex justify-between items-center mb-4">
                <span className="font-bold">{`${monthNames[month]} ${year}`}</span>
                <div>
                    <button onClick={() => changeMonth(-1)} className="text-gray-600 hover:text-blue-500">&lt;</button>
                    <button onClick={() => changeMonth(1)} className="text-gray-600 hover:text-blue-500 ml-2">&gt;</button>
                </div>
            </div>
            <div className="grid grid-cols-7 border-t gap-1">
                {["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"].map((day) => (
                    <div key={day} className="font-bold text-center">{day}</div>
                ))}

                {/* Jours vides avant le premier jour du mois */}
                {[...Array(firstDay)].map((_, index) => (
                    <div key={index} className="day"></div>
                ))}

                {/* Jours du mois */}
                {[...Array(daysInMonth)].map((_, index) => {
                    const day = index + 1;
                    return (
                        <div key={day} className="relative day text-center">
                            {day}
                            {day === today && (
                                <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 bg-red-500 rounded-full w-2.5 h-2.5"></span>
                            )}
                        </div>
                    );
                })}
            </div>

            <div className="mt-4 pt-4">
              <div className="flex justify-between items-center mb-4 font-bold">
                <h3 className="font-bold">Upcoming</h3>
                <span className="text-sm underline text-teal-500">View All</span>
              </div>
              <div className="flex justify-start items-center gap-4 rounded-lg bg-[#F0F9FD] p-2"
              >
                <div className="w-[50px] h-[50px] p-3 text-center text-white rounded-full shadow-md" style={{ background: 'linear-gradient(66.15deg, #57B4DE -5.25%, #58B6DD 35.43%, #3B29AB 98.77%)' }}>M</div>
              <p>Montly doctor meet<br />8 Avril 2021 | 16:00</p>
              </div>
            </div>
        </div>

        </div>
      </div>

      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-8/12 px-3 -mt-20">
          <div class="w-full p-4 text-around bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
              <div className="w-full md:w-4/8">
                <div className="flex justify-between items-center">
                  <h6 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                    Patient List
                  </h6>
                  <p className="flex justify-start items-center gap-1">
                    Today
                    <IoIosArrowDown className="text-2xl pt-1" />
                  </p>
                </div>
                <div className=" h-[350px] pt-14 space-y-1 gap-0">
                  <div className="flex justify-around items-center">
                        <div className="flex gap-8">
                        <div class="relative left-8 top-2">
                          <div class="w-[55.3px] h-[55.3px] top-[0px] right-[0rem]  border-[0.82px] border-[#F6208899] rounded-full absolute"></div>
                          <div className="w-[47.11px] h-[47.11px] top-[0.3rem] right-[4px] bg-[#f8aed299] rounded-full absolute p-[7px] text-xl">
                            SM
                          </div>
                        </div>
                        <div className="p-3 font-bold">
                          <h6 className="text-md ">Stacy Mitchell</h6>
                          <p className="text-[#F6208899] text-sm">Weekly Visit</p>
                        </div>
                        </div>
                        <div className="w-[60px] h-[30px] rounded-md bg-[#f8aed299] border-gray-700">
                          <span className="text-xs text-[#F6208899] p-2">9:15AM</span>
                        </div>
                  </div>

                  <div className="flex justify-around items-center ">
                      <div className="flex gap-8">
                      <div class="relative left-8 top-2">
                        <div class="w-[55.3px] h-[55.3px] top-[0px] right-[0rem]  border-[0.82px] border-[#0000FF99] rounded-full absolute"></div>
                        <div className="w-[47.11px] h-[47.11px] top-[0.3rem] right-[4px] bg-[#b9b9f799] rounded-full absolute p-[7px] text-xl">
                          AD
                        </div>
                      </div>
                      <div className="p-3 font-bold">
                        <h6 className="text-md ">Amy Dunham</h6>
                        <p className="text-[#0000FF99] text-sm">Routine Checkup</p>
                      </div>
                      </div>
                      <div className="w-[60px] h-[30px] rounded-md bg-[#b9b9f799] border-gray-700">
                        <span className="text-xs text-[#0000FF99] p-2">9:30AM</span>
                      </div>
                  </div>

                  <div className="flex justify-around items-center ">
                      <div className="flex gap-8">
                      <div class="relative left-7 top-2">
                        <div class="w-[55.3px] h-[55.3px] top-[0px] right-[0rem]  border-[0.82px] border-[#12898399] rounded-full absolute"></div>
                        <div className="w-[47.11px] h-[47.11px] top-[0.3rem] right-[4px] bg-[#c4eeec99] rounded-full absolute p-[9px] text-xl">
                          DJ
                        </div>
                      </div>
                      <div className="p-3 font-bold">
                        <h6 className="text-md ">Demi Joan</h6>
                        <p className="text-[#12898399] text-sm">Report</p>
                      </div>
                      </div>
                      <div className="w-[60px] h-[30px] rounded-md bg-[#c4eeec99] border-gray-700 py-2">
                        <span className="text-xs text-[#12898399] p-2">9:50AM</span>
                      </div>
                  </div>

                  <div className="flex justify-around items-center">
                      <div className="flex gap-8">
                      <div class="relative left-8 top-1">
                        <div class="w-[55.3px] h-[55.3px] top-[0px] right-[0rem]  border-[0.82px] border-[#F6208899] rounded-full absolute"></div>
                        <div className="w-[47.11px] h-[47.11px] top-[0.3rem] right-[4px] bg-[#f8aed299] rounded-full absolute p-[7px] text-xl">
                          SM
                        </div>
                      </div>
                      <div className="p-3 font-bold">
                        <h6 className="text-md ">Susan Myers</h6>
                        <p className="text-[#F6208899] text-sm">Weekly Visit</p>
                      </div>
                      </div>
                      <div className="w-[60px] h-[30px] rounded-md bg-[#f8aed299] border-gray-700">
                        <span className="text-xs text-[#F6208899] p-2">10:15AM</span>
                      </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/8 relative">
                <h5 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                  Consultation
                </h5>

                <div className=" h-[350px]  gap-0 rounded-[16.39px] rounded-l-[16.39px] border-[1.02px] border-[#58B6DE80] relative">
                  <div className="flex justify-around items-center pb-4">
                    <div className="flex justify-start items-center gap-5 m-0 ">
                      <div class="relative left-8 bottom-7">
                        <div class="w-[55.3px] h-[55.3px] top-[0px] right-[0rem]  border-[0.82px] border-[#23d1c8] rounded-full absolute"></div>
                        <div className="w-[47.11px] h-[47.11px] top-[0.3rem] right-[4px] bg-[#23d1c8] rounded-full absolute p-[7px] text-xl">
                          DW
                        </div>
                      </div>
                      <div className="pl-6 text-sm p-4">
                        <h6>Denzel White</h6>
                        <p>Male-28 Years 3 Months</p>
                      </div>
                      <div className="w-[26px] h-[26px] rounded-full bg-gray-300 border-gray-700 relative">
                        <span className="p-1 text-gray-600  text-2xl absolute -top-4 left-0">...</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex absolute bottom-48 justify-center items-center gap-7 p-4 text-center">
      <div>
        <Image
          src="/images/Group.png" 
          alt="fever"
          width={45} 
          height={45} 
        />
        <p>Fever</p>
      </div>
      <div>
        <Image
          src="/images/Group 48095511.png" 
          alt="cough"
          width={45} 
          height={45} 
        />
        {/* <p>Cough</p> */}
      </div>
      <div>
        <Image
          src="/images/Group (1).png" 
          alt="heart burn"
          width={45} 
          height={45} 
          className="ms-4" // Classes Tailwind CSS
        />
        <p>Heart Burn</p>
      </div>
    </div>
                <div class="border-t border-[#58B6DE80] absolute bottom-44 min-w-72 m-4 border-[1.25px]"></div>
                <div className="absolute bottom-6 text-xs justify-center items-start m-3  space-y-4">
                  <div className="flex justify-start items-start gap-3">
                    <h6 className="font-bold">LastChecked</h6>
                    <p>
                      <span className="font-bold">Dr Everly</span> on 21 April
                      2021 Prescription{" "}
                      <span className="text-teal-500 underline">#2J983KTO</span>
                    </p>
                  </div>
                  <div className="flex justify-start items-start gap-3">
                    <h6 className="font-bold">Observation</h6>
                    <p>High fever and cough at normal hemoglobin levels.</p>
                  </div>
                  <div className="flex justify-start items-start gap-3">
                    <h6 className="font-bold">Description</h6>
                    <p>
                      Paracetmol-2times a day Dizopam-Day and Night before meal
                      wikoryl
                    </p>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/12 py-2 pt-4">
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a
              href="#"
              class="flex justify-start items-center transform -translate-y-1"
            >
              <span class="text-green-300 text-3xl mr-3">•</span>
              <p className="text-gray-600 font-light">DAILY READ.</p>
            </a>

            <p class="mb-3 font-bold text-gray-700 dark:text-gray-400">
              Equitable medical education with efforts toward real change.
            </p>
            <div>
            <Image
            src="/images/Rectangle 39896.png" 
            alt="img-pharmaci"
            width={500} 
            height={300} 
          />
            </div>
          </div>
        </div>
      </div>
    </div>
    </Sidebar>
  );
};

export default DashboardPage;
