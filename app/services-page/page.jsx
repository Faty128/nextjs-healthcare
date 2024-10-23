import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiToggleRight } from "react-icons/bi";
import { FaStar, FaRegStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const ServicesPage = () => {
  return (
    <div className="bg-[#ECECEC]">
      <div className="relative bg-[url('/images/Rectangle-1548.png')] bg-cover bg-center h-[100%] flex items-center justify-center py-8">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-4 py-4 gap-80">
          <div className="flex flex-col items-start mb-2 pt-14">
            <h1 className="text-white text-5xl font-bold font-sans leading-tight">
              Meet the Best <br /> Hospital
            </h1>
            <p className="text-white font-sans mt-4">
              We know how large objects will act, <br />
              but things on a small scale.
            </p>
            <div className="mt-5">
              <button className="mr-2 bg-[#007E85] text-white py-3 px-4 rounded-full">
                Get Quote Now
              </button>
              <button className="border-[#007E85] border text-white py-3 px-4 rounded-full">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex flex-col rounded-lg bg-[#FAFAFA] h-70 p-4 mt-8">
            <h1 className="text-black font-bold mt-3">Book Appointment</h1>
            <div className="mt-2">
              <label htmlFor="name" className="block">
                Name *
              </label>
              <input
                type="text"
                name="nom"
                id="full-name"
                placeholder="Full Name *"
                className="border-l-0 border-gray-300 p-2 rounded-lg mb-3 focus:outline-none focus:ring-0"
              />

              <label htmlFor="email" className="block">
                Email address *
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                className="border-l-0 border-gray-300 p-2 rounded-lg mb-3 focus:outline-none focus:ring-0"
              />

              <label htmlFor="departement" className="block">
                Department *
              </label>
              <select
                name="departement"
                id="departement"
                className="border border-gray-300 p-2 rounded-lg mb-3focus:outline-none focus:ring-0 "
              >
                <option>Please Select</option>
                {/* Ajoute des options ici */}
              </select>

              <label htmlFor="departement" className="block">
                Time *
              </label>
              <select
                name="time"
                id="time"
                className="border border-gray-300 p-2 rounded-lg mb-3 focus:outline-none focus:ring-0"
              >
                <option>4:00 Available</option>
                {/* Ajoute des options ici */}
              </select>
            </div>
            <button className="mr-2 bg-[#007E85] text-white py-2  rounded-lg mt-3">
              Book Appointement
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-4 py-4">
        <div className="col-span-1 md:col-span-4 rounded-lg bg-[#FAFAFA] p-4">
          <h1 className="font-bold capitalize text-black text-3xl">
            Find a Doctor
          </h1>
          <div className="flex flex-col mx-auto justify-between md:flex-row items-center py-4">
            <div className="md:w-1/1 md:mr-2 md:mb-0 mb-2">
              <input
                type="text"
                className="w-full h-[66px] rounded-lg border-[#007E85] hover:border-[#007E85] focus:outline-none focus:ring-0"
                placeholder="Name"
              />
            </div>
            <div className="md:w-1/1 md:mr-2 md:mb-0 mb-2">
              <input
                type="text"
                className="w-full h-[66px] rounded-lg border-[#007E85] hover:border-[#007E85] focus:outline-none focus:ring-0"
                placeholder="Speciality"
              />
            </div>
            <div className="flex md:w-1/1 items-center gap-4">
              <p>Available</p>
              <BiToggleRight className="text-5xl bg-none text-[#007E85]" />
            </div>
            <div className="bg-[#007E85] md:w-1/1 w-[100px]  h-[66px] rounded-lg text-center py-4">
              <button className="text-xl text-white">Search</button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8">
        <h2 className="text-3xl font-bold text-center mb-5 text-[#007E85]">
          Services we provide
        </h2>
        <p className="text-center mb-8 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
          <br /> elementum tempus hac tellus libero accumsan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
          <div className="p-4 bg-[#FAFAFA] rounded-3xl shadow-md">
            <Image
              src="/images/Container (1).png"
              alt="Dental Image"
              width={360}
              height={360}
              className="object-cover mb-5"
            />
            <div>
              <h6 className="text-xl font-bold mb-4 text-[#007E85]">
                Dental treatments
              </h6>
              <p className="text-gray-700 mb-5">
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est velitolm.
              </p>
              <Link href="#" className="text-[#007E85] font-semibold">
                Learn more →
              </Link>
            </div>
          </div>

          <div className="p-4 bg-[#FAFAFA] rounded-lg shadow-md">
            <Image
              src="/images/Container (2).png"
              alt="Bones treatments"
              width={360}
              height={360}
              className="object-cover mb-5"
            />
            <div>
              <h6 className="text-xl font-bold mb-4 text-[#007E85]">
                Bones treatments
              </h6>
              <p className="text-gray-700 mb-5">
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est velitolm.
              </p>
              <Link href="#" className="text-[#007E85] font-semibold">
                Learn more →
              </Link>
            </div>
          </div>

          <div className="p-4 bg-[#FAFAFA] rounded-lg shadow-md">
            <Image
              src="/images/Container (3).png"
              alt="Diagnosis"
              width={360}
              height={360}
              className="object-cover mb-5"
            />
            <div>
              <h6 className="text-xl font-bold mb-4 text-[#007E85]">
                Diagnosis
              </h6>
              <p className="text-gray-700 mb-5">
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est velitolm.
              </p>
              <Link href="#" className="text-[#007E85] font-semibold">
                Learn more →
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
          <div className="p-4 bg-[#FAFAFA] rounded-3xl shadow-md">
            <Image
              src="/images/Container (4).png"
              alt="Cardiology"
              width={360}
              height={360}
              className="object-cover mb-5"
            />
            <div>
              <h6 className="text-xl font-bold mb-4 text-[#007E85]">
                Cardiology
              </h6>
              <p className="text-gray-700 mb-5">
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est velitolm.
              </p>
              <Link href="#" className="text-[#007E85] font-semibold">
                Learn more →
              </Link>
            </div>
          </div>
          <div className="p-4 bg-[#FAFAFA] rounded-3xl shadow-md">
            <Image
              src="/images/Container (5).png"
              alt="Surgery"
              width={360}
              height={360}
              className="object-cover mb-5"
            />
            <div>
              <h6 className="text-xl font-bold mb-4 text-[#007E85]">Surgery</h6>
              <p className="text-gray-700 mb-5">
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est velitolm.
              </p>
              <Link href="#" className="text-[#007E85] font-semibold">
                Learn more →
              </Link>
            </div>
          </div>

          <div className="p-4 bg-[#FAFAFA] rounded-3xl shadow-md">
            <Image
              src="/images/Container (6).png"
              alt="Eye care"
              width={360}
              height={360}
              className="object-cover mb-5"
            />
            <div>
              <h6 className="text-xl font-bold mb-4 text-[#007E85]">
                Eye care
              </h6>
              <p className="text-gray-700 mb-5">
                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                dalaracc lacus vel facilisis volutpat est velitolm.
              </p>
              <Link href="#" className="text-[#007E85] font-semibold">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8">
        <h2 className="text-3xl font-bold text-center mb-5 text-[#007E85]">
          What our customers say
        </h2>
        <p className="text-center mb-8 text-gray-700">
          Problems trying to resolve the conflict between the two major realms
          of <br />
          Classical physics: Newtonian mechanics
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
          <div className="p-6 bg-[#FAFAFA] text-start rounded-3xl shadow-md">
            <div className="flex justify-start items-center gap-2 text-[#F3CD03] mb-5">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
            <p className="text-gray-700 mb-5">
              Slate helps you see how many <br />
              more days you need to work to <br />
              reach your financial goal.
            </p>
            <Image
              src="/images/imag (1).jpg"
              alt="img-1"
              width={100}
              height={100}
              className="object-cover mb-5"
            />
          </div>

          <div className="p-6 bg-[#FAFAFA] text-start rounded-3xl shadow-md">
            <div className="flex justify-start items-center gap-2 text-[#F3CD03] mb-5">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
            <p className="text-gray-700 mb-5">
              Slate helps you see how many <br />
              more days you need to work to <br />
              reach your financial goal.
            </p>
            <Image
              src="/images/img (2).jpg"
              alt="img-2"
              width={100}
              height={100}
              className="object-cover mb-5"
            />
          </div>

          <div className="p-6 bg-[#FAFAFA] text-start rounded-3xl shadow-md">
            <div className="flex justify-start items-center gap-2 text-[#F3CD03] mb-5">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
            <p className="text-gray-700 mb-5">
              Slate helps you see how many <br />
              more days you need to work to <br />
              reach your financial goal.
            </p>
            <Image
              src="/images/img (3).jpg"
              alt="img-3"
              width={100}
              height={100}
              className="object-cover mb-5"
            />
          </div>
        </div>
      </div>

      <div className="py-8">
        <h2 className="text-4xl font-bold text-center mb-5 text-gray-700">
          FAQ
        </h2>
        <p className="text-gray-700 mb-5 text-center">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
          <div className="p-4 bg-[#FAFAFA] rounded-3xl shadow-md">
            <div className="flex items-start justify-start gap-4">
              <IoIosArrowForward className="text-2xl text-teal-500" />
              <div>
                <h5 className="text-gray-900 font-bold font-sans">
                  The quick fox jumps over the <br /> lazy dog
                </h5>
                <p className="text-gray-700 mb-5">
                  Things on a very small scale <br /> behave like nothing.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#FAFAFA] rounded-3xl shadow-md">
            <div className="flex items-start justify-start gap-4">
              <IoIosArrowForward className="text-2xl text-teal-500" />
              <div>
                <h5 className="text-gray-900 font-bold font-sans">
                  The quick fox jumps over the <br /> lazy dog
                </h5>
                <p className="text-gray-700 mb-5">
                  Things on a very small scale <br /> behave like nothing.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#FAFAFA] rounded-3xl shadow-md">
            <div className="flex items-start justify-start gap-4">
              <IoIosArrowForward className="text-2xl text-teal-500" />
              <div>
                <h5 className="text-gray-900 font-bold font-sans">
                  The quick fox jumps over the <br /> lazy dog
                </h5>
                <p className="text-gray-700 mb-5">
                  Things on a very small scale <br /> behave like nothing.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
          <div className="p-4 bg-[#FAFAFA] rounded-3xl shadow-md">
            <div className="flex items-start justify-start gap-4">
              <IoIosArrowForward className="text-2xl text-teal-500" />
              <div>
                <h5 className="text-gray-900 font-bold font-sans">
                  The quick fox jumps over the <br /> lazy dog
                </h5>
                <p className="text-gray-700 mb-5">
                  Things on a very small scale <br /> behave like nothing.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#FAFAFA] rounded-3xl shadow-md">
            <div className="flex items-start justify-start gap-4">
              <IoIosArrowForward className="text-2xl text-teal-500" />
              <div>
                <h5 className="text-gray-900 font-bold font-sans">
                  The quick fox jumps over the <br /> lazy dog
                </h5>
                <p className="text-gray-700 mb-5">
                  Things on a very small scale <br /> behave like nothing.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#FAFAFA] rounded-3xl shadow-md">
            <div className="flex items-start justify-start gap-4">
              <IoIosArrowForward className="text-2xl text-teal-500" />
              <div>
                <h5 className="text-gray-900 font-bold font-sans">
                  The quick fox jumps over the <br /> lazy dog
                </h5>
                <p className="text-gray-700 mb-5">
                  Things on a very small scale <br /> behave like nothing.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
          <div className="p-4 bg-[#FAFAFA] rounded-3xl shadow-md">
            <div className="flex items-start justify-start gap-4">
              <IoIosArrowForward className="text-2xl text-teal-500" />
              <div>
                <h5 className="text-gray-900 font-bold font-sans">
                  The quick fox jumps over the <br /> lazy dog
                </h5>
                <p className="text-gray-700 mb-5">
                  Things on a very small scale <br /> behave like nothing.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#FAFAFA] rounded-3xl shadow-md">
            <div className="flex items-start justify-start gap-4">
              <IoIosArrowForward className="text-2xl text-teal-500" />
              <div>
                <h5 className="text-gray-900 font-bold font-sans">
                  The quick fox jumps over the <br /> lazy dog
                </h5>
                <p className="text-gray-700 mb-5">
                  Things on a very small scale <br /> behave like nothing.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#FAFAFA] rounded-3xl shadow-md">
            <div className="flex items-start justify-start gap-4">
              <IoIosArrowForward className="text-2xl text-teal-500" />
              <div>
                <h5 className="text-gray-900 font-bold font-sans">
                  The quick fox jumps over the <br /> lazy dog
                </h5>
                <p className="text-gray-700 mb-5">
                  Things on a very small scale <br /> behave like nothing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8">
        <h2 className="text-center mb-6 font-semibold text-xl">
          Subscribe to our newsletter
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="bg-[#FFFFFF] border-none rounded-full w-[320px] focus:outline-none focus:ring-0"
          />
          <button className="bg-[#007E85] border-teal-400 rounded-full w-32 h-14 text-white font-semibold">
            Suscribe
          </button>
        </div>
      </div>

      <footer className="bg-[#007E85] text-white py-8 px-4">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="col-span-4">
            <div className="flex items-center">
              <Image
                src="/images/image 16.png"
                alt="Votre entreprise"
                width={60}
                height={40}
                className="rounded-lg"
              />
              <h1 className="py-2 text-2xl font-bold leading-3 text-[#FFFFFF]">
                Healthcare
              </h1>
            </div>
            <p className="py-2 px-2">
              Copyright &copy; {new Date().getFullYear()} BRIX Templates <br />|
              All Rights Reserved
            </p>
          </div>
          <div className="col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <h5 className="mb-4 font-semibold font-sans text-xl">
                  Product
                </h5>
                <div className="mb-2">
                  <Link href="#">Features</Link>
                </div>
                <div className="mb-2">
                  <Link href="#">Pricing</Link>
                </div>
                <div className="mb-2">
                  <Link href="#">Case studies</Link>
                </div>
                <div className="mb-2">
                  <Link href="#">Reviews</Link>
                </div>
                <div className="mb-2">
                  <Link href="#">Updates</Link>
                </div>
              </div>
              <div>
                <h5 className="mb-4 font-semibold font-sans text-xl">
                  Company
                </h5>
                <div className="mb-2">
                  <Link href="#">About</Link>
                </div>
                <div className="mb-2">
                  <Link href="#">Contact us</Link>
                </div>
                <div className="mb-2">
                  <Link href="#">Careers</Link>
                </div>
                <div className="mb-2">
                  <Link href="#">Culture</Link>
                </div>
                <div className="mb-2">
                  <Link href="#">Blog</Link>
                </div>
              </div>
              <div>
                <h5 className="mb-4 font-semibold font-sans text-xl">
                  Support
                </h5>
                <div className="mb-2">
                  <Link href="#">Getting started</Link>
                </div>
                <div className="mb-2">
                  <Link href="#">Help center</Link>
                </div>
                <div className="mb-2">
                  <Link href="#">Server status</Link>
                </div>
                <div className="mb-2">
                  <Link href="#">Report a bug</Link>
                </div>
                <div className="mb-2">
                  <Link href="#">Chat support</Link>
                </div>
              </div>
              <div>
                <h5 className="mb-4 font-semibold font-sans text-xl">
                  Follow us
                </h5>
                <div className="flex items-center mb-2">
                  <div className="w-[30px] h-[30px] p-2 rounded-lg bg-[#F2F1FA] text-gray-600">
                    <FaFacebookF />
                  </div>
                  <Link href="#" className="ml-2">
                    Facebook
                  </Link>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-[30px] h-[30px] p-2 rounded-lg bg-[#F2F1FA] text-gray-600">
                    <FaTwitter />
                  </div>
                  <Link href="#" className="ml-2">
                    Twitter
                  </Link>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-[30px] h-[30px] p-2 rounded-lg bg-[#F2F1FA] text-gray-600">
                    <RiInstagramFill />
                  </div>
                  <Link href="#" className="ml-2">
                    Instagram
                  </Link>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-[30px] h-[30px] p-2 rounded-lg bg-[#F2F1FA] text-gray-600">
                    <FaLinkedinIn />
                  </div>
                  <Link href="#" className="ml-2">
                    LinkedIn
                  </Link>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-[30px] h-[30px] p-2 rounded-lg bg-[#F2F1FA] text-gray-600">
                    <FaYoutube />
                  </div>
                  <Link href="#" className="ml-2">
                    YouTube
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;
