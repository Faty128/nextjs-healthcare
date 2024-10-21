// app/landing-page/page.js
import RootLayout from "../layout";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { IoCaretForwardOutline } from "react-icons/io5";
import { BiToggleRight } from "react-icons/bi";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

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
                At our hospital, we are dedicated to providing exceptional
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
              <div className="absolute p-3 top-14 right-2 object-cover rounded-lg bg-[#FFFFFF] w-[150px] shadow-md">
                <div className="flex justify-center items-center gap-2">
                  <span className="text-[#007E85] text-xl font-semibold">24/7</span>
                  <p className="text-lg">service</p>
                </div>
              </div>
              <Image
                src="/images/Group 8.png"
                alt="Deuxième Image"
                width={180}
                height={180}
                className="absolute bottom-8 -left-16 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-4 py-4">
          <div className="col-span-1 md:col-span-4 rounded-lg bg-[#FAFAFA] p-4">
            <h1 className="font-bold capitalize text-black text-3xl">
              Find a Doctor
            </h1>
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
          <h2 className="text-3xl text-center text-[#007E85] font-bold mb-4">
            Our results in numbers
          </h2>
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
              <h2 className="text-[#007E85] text-3xl font-sans font-bold">
                You have lots of reasons <br /> to choose us
              </h2>
              <p className="text-gray-600 text-xl  mt-4">
                Lorem ipsum dolor sit amet consectetur adipiscing eli <br />
                mattis sit phasellus mollis sit aliquam sit nullam.
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

        <div className="py-8">
          <h2 className="text-3xl font-bold text-center mb-5 text-[#007E85]">
            Services we provide
          </h2>
          <p className="text-center mb-8 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
            <br /> elementum tempus hac tellus libero accumsan.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                alt="Dental Image"
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
                alt="Dental Image"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
            <div className="p-4 bg-[#FAFAFA] rounded-3xl shadow-md">
              <Image
                src="/images/Container (4).png"
                alt="Dental Image"
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
                alt="Dental Image"
                width={360}
                height={360}
                className="object-cover mb-5"
              />
              <div>
                <h6 className="text-xl font-bold mb-4 text-[#007E85]">
                  Surgery
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
                src="/images/Container (6).png"
                alt="Dental Image"
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
            Meet our team members
          </h2>
          <p className="text-center mb-8 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipiscing elit volutpat
            gravida <br /> malesuada quam commodo id integer nam.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-[#FAFAFA] text-center rounded-3xl shadow-md">
              <Image
                src="/images/BG (8).png"
                alt="John Carter"
                width={200}
                height={200}
                className="object-cover mb-5 mx-auto"
              />
              <div>
                <h6 className="text-xl font-bold mb-4 text-[#007E85]">
                  John Carter
                </h6>
                <p className="text-gray-700 mb-5">
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est velitolm.
                </p>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-[38px] h-[38px] p-2 rounded-lg bg-[#007E851A] mb-4">
                    <Link
                      href="#"
                      className="text-[#00A3FF] text-xl font-semibold"
                    >
                      <FaFacebookF />
                    </Link>
                  </div>
                  <div className="w-[38px] h-[38px] p-2 rounded-lg bg-[#007E851A] mb-4">
                    <Link
                      href="#"
                      className="text-[#00A3FF] text-xl font-semibold"
                    >
                      <FaTwitter />
                    </Link>
                  </div>
                  <div className="w-[38px] h-[38px] p-2 rounded-lg bg-[#007E851A] mb-4">
                    <Link
                      href="#"
                      className="text-[#d8af46] text-xl font-semibold"
                    >
                      <RiInstagramFill />
                    </Link>
                  </div>
                  <div className="w-[38px] h-[38px] p-2 rounded-lg bg-[#007E851A] mb-4">
                    <Link
                      href="#"
                      className="text-[#00A3FF] text-xl font-semibold"
                    >
                      <FaLinkedinIn />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#FAFAFA] text-center rounded-3xl shadow-md">
              <Image
                src="/images/BG (1).png"
                alt="Sophie Moore"
                width={200}
                height={200}
                className="object-cover mb-5 m-auto"
              />
              <div>
                <h6 className="text-xl font-bold mb-4 text-[#007E85]">
                  Sophie Moore
                </h6>
                <p className="text-gray-700 mb-5">
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est velitolm.
                </p>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-[38px] h-[38px] p-2 rounded-lg bg-[#007E851A] mb-4">
                    <Link
                      href="#"
                      className="text-[#00A3FF] text-xl font-semibold"
                    >
                      <FaFacebookF />
                    </Link>
                  </div>
                  <div className="w-[38px] h-[38px] p-2 rounded-lg bg-[#007E851A] mb-4">
                    <Link
                      href="#"
                      className="text-[#00A3FF] text-xl font-semibold"
                    >
                      <FaTwitter />
                    </Link>
                  </div>
                  <div className="w-[38px] h-[38px] p-2 rounded-lg bg-[#007E851A] mb-4">
                    <Link
                      href="#"
                      className="text-[#d8af46] text-xl font-semibold"
                    >
                      <RiInstagramFill />
                    </Link>
                  </div>
                  <div className="w-[38px] h-[38px] p-2 rounded-lg bg-[#007E851A] mb-4">
                    <Link
                      href="#"
                      className="text-[#00A3FF] text-xl font-semibold"
                    >
                      <FaLinkedinIn />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#FAFAFA] text-center rounded-3xl shadow-md">
              <Image
                src="/images/BG.png"
                alt="Matt Cannon"
                width={200}
                height={200}
                className="object-cover mb-5 m-auto"
              />
              <div>
                <h6 className="text-xl font-bold mb-4 text-[#007E85]">
                  Matt Cannon
                </h6>
                <p className="text-gray-700 mb-5">
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est velitolm.
                </p>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-[38px] h-[38px] p-2 rounded-lg bg-[#007E851A] mb-4">
                    <Link
                      href="#"
                      className="text-[#00A3FF] text-xl font-semibold"
                    >
                      <FaFacebookF />
                    </Link>
                  </div>
                  <div className="w-[38px] h-[38px] p-2 rounded-lg bg-[#007E851A] mb-4">
                    <Link
                      href="#"
                      className="text-[#00A3FF] text-xl font-semibold"
                    >
                      <FaTwitter />
                    </Link>
                  </div>
                  <div className="w-[38px] h-[38px] p-2 rounded-lg bg-[#007E851A] mb-4">
                    <Link
                      href="#"
                      className="text-[#d8af46] text-xl font-semibold"
                    >
                      <RiInstagramFill />
                    </Link>
                  </div>
                  <div className="w-[38px] h-[38px] p-2 rounded-lg bg-[#007E851A] mb-4">
                    <Link
                      href="#"
                      className="text-[#00A3FF] text-xl font-semibold"
                    >
                      <FaLinkedinIn />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
            <div className="p-4 bg-[#FAFAFA] text-center rounded-3xl shadow-md">
              <Image
                src="/images/BG (2).png"
                alt="Andy Smith"
                width={200}
                height={200}
                className="object-cover mb-5 m-auto"
              />
              <div>
                <h6 className="text-xl font-bold mb-4 text-[#007E85]">
                  Andy Smith
                </h6>
                <p className="text-gray-700 mb-5">
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est velitolm.
                </p>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-[38px] h-[38px] p-2 rounded-lg bg-[#007E851A] mb-4">
                    <Link
                      href="#"
                      className="text-[#00A3FF] text-xl font-semibold"
                    >
                      <FaFacebookF />
                    </Link>
                  </div>
                  <div className="w-[38px] h-[38px] p-2 rounded-lg bg-[#007E851A] mb-4">
                    <Link
                      href="#"
                      className="text-[#00A3FF] text-xl font-semibold"
                    >
                      <FaTwitter />
                    </Link>
                  </div>
                  <div className="w-[38px] h-[38px] p-2 rounded-lg bg-[#007E851A] mb-4">
                    <Link
                      href="#"
                      className="text-[#d8af46] text-xl font-semibold"
                    >
                      <RiInstagramFill />
                    </Link>
                  </div>
                  <div className="w-[38px] h-[38px] p-2 rounded-lg bg-[#007E851A] mb-4">
                    <Link
                      href="#"
                      className="text-[#00A3FF] text-xl font-semibold"
                    >
                      <FaLinkedinIn />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-[#FAFAFA] text-center rounded-3xl shadow-md">
              <Image
                src="/images/BG (3).png"
                alt="Lily Woods"
                width={200}
                height={200}
                className="object-cover mb-5 m-auto"
              />
              <div>
                <h6 className="text-xl font-bold mb-4 text-[#007E85]">
                  Lily Woods
                </h6>
                <p className="text-gray-700 mb-5">
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est velitolm.
                </p>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-[38px] h-[38px] p-2 rounded-lg bg-[#007E851A] mb-4">
                    <Link
                      href="#"
                      className="text-[#00A3FF] text-xl font-semibold"
                    >
                      <FaFacebookF />
                    </Link>
                  </div>
                  <div className="w-[38px] h-[38px] p-2 rounded-lg bg-[#007E851A] mb-4">
                    <Link
                      href="#"
                      className="text-[#00A3FF] text-xl font-semibold"
                    >
                      <FaTwitter />
                    </Link>
                  </div>
                  <div className="w-[38px] h-[38px] p-2 rounded-lg bg-[#007E851A] mb-4">
                    <Link
                      href="#"
                      className="text-[#d8af46] text-xl font-semibold"
                    >
                      <RiInstagramFill />
                    </Link>
                  </div>
                  <div className="w-[38px] h-[38px] p-2 rounded-lg bg-[#007E851A] mb-4">
                    <Link
                      href="#"
                      className="text-[#00A3FF] text-xl font-semibold"
                    >
                      <FaLinkedinIn />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#FAFAFA] text-center items-center rounded-3xl shadow-md">
              <Image
                src="/images/BG (4).png"
                alt="Patrick Meyer"
                width={200}
                height={200}
                className="object-cover mb-5 m-auto"
              />
              <div>
                <h6 className="text-xl font-bold mb-4 text-[#007E85]">
                  Patrick Meyer
                </h6>
                <p className="text-gray-700 mb-5">
                  Lorem ipsum dolor sit amet consecte tur adipiscing elit semper
                  dalaracc lacus vel facilisis volutpat est velitolm.
                </p>
                <div className="flex justify-center items-center gap-4">
                  <div className="w-[38px] h-[38px] p-2 rounded-lg bg-[#007E851A] mb-4">
                    <Link
                      href="#"
                      className="text-[#00A3FF] text-xl font-semibold"
                    >
                      <FaFacebookF />
                    </Link>
                  </div>
                  <div className="w-[38px] h-[38px] p-2 rounded-lg bg-[#007E851A] mb-4">
                    <Link
                      href="#"
                      className="text-[#00A3FF] text-xl font-semibold"
                    >
                      <FaTwitter />
                    </Link>
                  </div>
                  <div className="w-[38px] h-[38px] p-2 rounded-lg bg-[#007E851A] mb-4">
                    <Link
                      href="#"
                      className="text-[#d8af46] text-xl font-semibold"
                    >
                      <RiInstagramFill />
                    </Link>
                  </div>
                  <div className="w-[38px] h-[38px] p-2 rounded-lg bg-[#007E851A] mb-4">
                    <Link
                      href="#"
                      className="text-[#00A3FF] text-xl font-semibold"
                    >
                      <FaLinkedinIn />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8">
          <h2 className="text-3xl font-bold text-center mb-5 text-[#007E85]">
            Testimonial
          </h2>
          <p className="text-center mb-8 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
            <br /> elementum tempus hac tellus libero accumsan.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 bg-[#FAFAFA] text-start rounded-3xl shadow-md">
              <Image
                src="/images/BG (7).png"
                alt="John Carter"
                width={100}
                height={100}
                className="object-cover mb-5"
              />
              <div>
                <h6 className="text-xl font-bold mb-4 text-black">
                  “An amazing service”
                </h6>
                <p className="text-gray-700 mb-5">
                  Lorem ipsum dolor sit ametolil col <br />
                  consectetur adipiscing lectus a nunc <br />
                  mauris scelerisque sed egestas.
                </p>
                <h6 className="text-[#007E85] text-md font-bold">
                  John Carter
                </h6>
                <p className="text-gray-700">CEO at Google</p>
              </div>
            </div>

            <div className="p-6 bg-[#FAFAFA] text-start rounded-3xl shadow-md">
              <Image
                src="/images/BG (6).png"
                alt="John Carter"
                width={100}
                height={100}
                className="object-cover mb-5"
              />
              <div>
                <h6 className="text-xl font-bold mb-4 text-text-black">
                  “One of a kind service”
                </h6>
                <p className="text-gray-700 mb-5">
                  Ultrices eros in cursus turpis massa <br />
                  tincidunt sem nulla pharetra diam sit <br />
                  amet nisl suscipit adipis.
                </p>
                <h6 className="text-[#007E85] text-md font-bold">
                  Sophie Moore
                </h6>
                <p className="text-gray-700">MD at Facebook</p>
              </div>
            </div>

            <div className="p-6 bg-[#FAFAFA] text-start rounded-3xl shadow-md">
              <Image
                src="/images/BG (5).png"
                alt="John Carter"
                width={100}
                height={100}
                className="object-cover mb-5"
              />
              <div>
                <h6 className="text-xl font-bold mb-4 text-black">
                  “The best service”
                </h6>
                <p className="text-gray-700 mb-5">
                  Convallis posuere morbi leo urna <br />
                  molestie at elementum eu facilisis <br />
                  sapien pellentesque habitant.
                </p>
                <h6 className="text-[#007E85] text-md font-bold">Andy Smith</h6>
                <p className="text-gray-700">CEO Dot Austere</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8">
          <h1 className="text-4xl font-sans font-bold text-center text-[#007E85] mb-6">
            Trusted by 10,000+ companies around the world
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 justify-items-center">
            <div className="p-4 text-black">
              <Image
                src="/images/Google.png"
                alt="Google Image"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <div className="p-4 text-black">
              <Image
                src="/images/Facebook.png"
                alt="Facebook Image"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <div className="p-4 text-black">
              <Image
                src="/images/YouTube.png"
                alt="YouTube Image"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <div className="p-4 text-black">
              <Image
                src="/images/Pinterest.png"
                alt="Pinterest Image"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <div className="p-4 text-black">
              <Image
                src="/images/Twitch.png"
                alt="Twitch Image"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <div className="p-4 text-black">
              <Image
                src="/images/Webflow.png"
                alt="Webflow Image"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center -mt-20">
          <span className="text-8xl text-[#007E85]">.</span>
          <span className="text-8xl text-[#79d0d4]">.</span>
          <span className="text-8xl text-[#79d0d4]">.</span>
        </div>

        <div className="py-8">
          <h2 className="text-center mb-6">Subscribe to our newsletter</h2>
          <div className="flex justify-center gap-4">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="bg-[#FFFFFF] focus:outline-none border-none rounded-full w-[320px]"
            />
            <button className="bg-[#007E85] border-teal-400 rounded-full w-32 h-14 text-white font-semibold">
              Suscribe
            </button>
          </div>
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
              Copyright &copy; {new Date().getFullYear()} BRIX Templates <br />
              | All Rights Reserved
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

export default LandingPage;
