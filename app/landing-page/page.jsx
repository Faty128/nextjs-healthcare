// app/landing-page/page.js
import RootLayout from "../layout";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { IoCaretForwardOutline } from "react-icons/io5";
import { BiToggleRight } from "react-icons/bi";

export const metadata = {
  title: "Landing Page Title",
  description: "Description for the landing page.",
};

const LandingPage = () => {
  return (
    <div className="bg-[#ECECEC]">
      <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
  <div className="p-4 flex flex-col">
    <div className="mt-14">
      <h2 className="text-2xl font-bold capitalize">
        <span className="text-[#333333] mr-2">Providing Quality</span>
        <span className="text-[#007E85] mr-2">Healthcare</span>
        <span className="text-[#333333] mr-2">for a</span> <br />
        <span className="text-green-400 mr-2">Brighter</span>
        <span className="text-[#333333] mr-2"> and </span>
        <span className="text-green-400 mr-2">Healthy</span>
        <span className="text-[#333333] mr-2">Future</span>
      </h2>
      <p className="mt-6 text-[#504f4f] font-medium text-lg leading-tight">
        At our hospital, we are dedicated to providing exceptional{" "}
        <br />
        medical care to our patients and their families. Our <br />
        experienced team of medical professionals, cutting-edge <br />
        technology, and compassionate approach make us a leader <br />
        in the healthcare industry.
      </p>
    </div>
    <div className="flex justify-start items-center mt-14 space-x-6 md:space-x-12">
      <div className="bg-[#007E85] text-white text-center rounded-lg p-3 font-bold text-lg max-w-full min-h-14">
        Appointments
      </div>
      <div className="flex justify-center items-center gap-2 md:gap-8">
        <div className="bg-[#007E85] w-[50px] h-[50px] rounded-full text-white p-3 text-3xl">
          <IoCaretForwardOutline />
        </div>
        <p className="font-semibold font-sans">Watch Video</p>
      </div>
    </div>
  </div>
  <div className="p-4 flex justify-center items-center">
    <div className="relative w-full max-w-[450px] h-[450px]">
      <Image
        src="/images/Vector (2).png"
        alt="Première Image"
        layout="fill"
        className="min-w-full h-full object-cover"
      />

      <Image
        src="/images/image 17.png"
        alt="Deuxième Image"
        width={360}
        height={360}
        className="absolute -top-12 left-10 object-cover"
      />
    </div>
  </div>
</div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-4 py-4">
  <div className="col-span-1 md:col-span-4 rounded-lg bg-[#FAFAFA] p-4">
    <h1 className="font-bold capitalize text-black text-3xl">Find a Doctor</h1>
    <div className="flex flex-col md:flex-row justify-around items-center py-4">
      <div className="flex-1 md:mr-2 md:mb-0 mb-2">
        <input
          type="text"
          className="w-full h-[66px] rounded-lg border-[#007E85] focus:outline-none hover:border-[#007E85]"
          placeholder="Name"
        />
      </div>
      <div className="flex-1 md:mr-2 md:mb-0 mb-2">
        <input
          type="text"
          className="w-full h-[66px] rounded-lg border-[#007E85] hover:border-[#007E85]"
          placeholder="Speciality"
        />
      </div>
      <div className="flex items-center gap-4">
        <p>Available</p>
        <BiToggleRight className="text-5xl bg-none text-[#007E85]" />
      </div>
      <div className="bg-[#007E85] w-full md:w-auto h-[66px] rounded-lg text-center py-4">
        <button className="text-xl text-white">Search</button>
      </div>
    </div>
  </div>
</div>

        
        <div className="py-10">
          <h2 className="text-3xl text-center text-[#007E85] font-bold mb-4">Our results in numbers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-8">
            <div className="flex items-center justify-center text-center">
              <div>
              <span className="text-[#007E85] text-3xl font-bold">99%</span>
              <p className="text-[#333333] text-xl font-sans font-semibold leading-loose">
              Customer satisfaction
              </p>
              </div>
            </div>
            <div className="flex  justify-center items-center text-center">
              <div>
              <span className="text-[#007E85] text-3xl font-bold">15k</span>
              <p className="text-[#333333] text-xl font-sans font-semibold leading-loose">
              Online Patients
              </p>
              </div>
            </div>
            <div className="flex items-center justify-center text-center">
              <div>
              <span className="text-[#007E85] text-3xl font-bold">12k</span>
              <p className="text-[#333333] text-xl font-sans font-semibold leading-loose">
              Patients Recovered
              </p>
              </div>
            </div>
            <div className="flex items-center justify-center text-center ">
            <div>
            <span className="text-[#007E85] text-3xl font-bold">240%</span>
              <p className="text-[#333333] text-xl font-sans font-semibold leading-loose">
              Company growth
              </p>
            </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-8 px-4">
          <div className="block items-center justify-center">
           <div className="pt-20">
           <h2 className="text-[#007E85] text-3xl font-sans font-bold">You have lots of reasons <br /> to choose us</h2>
            <p className="text-gray-600 text-xl  mt-4">
            Lorem ipsum dolor sit amet consectetur adipiscing eli <br /> mattis sit phasellus mollis sit aliquam sit nullam.
            </p>
           </div>
           <div className="flex pt-8 space-x-10">
              <div className="bg-[#007E85] text-white text-center font-bold text-md rounded-full w-[150px] h-[60px] p-4">
                <button>Get started</button>
              </div>
              <div className="bg-[#FFFFFF] text-[#007E85] text-center font-bold text-md rounded-full w-[150px] h-[60px] p-4">
                <button>Talk to sales</button>
              </div>
           </div>
          </div>
          <div className="flex items-center justify-center">
          <Image
                src="/images/Container.png"
                alt="Container Image"
                width={600}
                height={600}
                className="object-cover"
              />
          </div>
        </div>


      </div>
    </div>
  );
};

export default LandingPage;
