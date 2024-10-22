import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const ContactPage = () => {
  return (
    <div className="bg-[#ECECEC]">
      <div className="bg-[url('/images/Rectangle-1548.png')] bg-cover bg-center h-[100vh] flex items-center justify-center  opacity-2"></div>
      <div className="text-center py-8">
        <h6 className="font-sans font-semibold text-lg pt-3">Get In Touch</h6>
        <h1 className="font-sans font-bold text-4xl text-gray-800 pt-3">
          Contact Us
        </h1>
        <p className="text-xl font-sans text-gray-700 pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="block border-gray-900/10 pb-12 min-w-lg py-4 px-4">
        <div className="mt-10 mx-auto max-w-4xl grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
          <div className="sm:col-span-6">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Enter your first-name"
                autoComplete="given-name"
                className="block w-full h-14 rounded-lg border-[#007E85] py-1.5 text-gray-900 shadow-sm placeholder:text-gray-700 outline-none bg-transparent sm:text-sm sm:leading-6 focus:ring-0"
              />
            </div>
          </div>

          <div className="sm:col-span-6">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="last-name"
                id="last-name"
                placeholder="Enter your last-name"
                autoComplete="family-name"
                className="block w-full h-14 rounded-lg border-[#007E85] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 outline-none bg-transparent sm:text-sm sm:leading-6 focus:ring-0"
              />
            </div>
          </div>

          <div className="sm:col-span-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="block w-full h-14 rounded-lg border-[#007E85] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 outline-none bg-transparent sm:text-sm sm:leading-6 focus:ring-0"
              />
            </div>
          </div>

          <div className="sm:col-span-6">
            <label
              htmlFor="phone-number"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="phone-number"
                id="phone-number"
                placeholder="Enter your phone number"
                className="block w-full h-14 rounded-lg border-[#007E85] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 outline-none bg-transparent sm:text-sm sm:leading-6 focus:ring-0"
              />
            </div>
          </div>

          <div className="sm:col-span-12">
            <label
              htmlFor="choose-topic"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Choose a topic
            </label>
            <div className="mt-2">
              <select
                id="choose-topic"
                name="choose-topic"
                autoComplete="choose-topic-name"
                className="block w-full h-14 rounded-lg border-[#007E85] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 focus:ring-0 sm:text-sm sm:leading-6 bg-transparent"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="message"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2">
              <textarea
                id="message"
                name="message"
                placeholder="Type your message"
                rows="6"
                className="block w-full rounded-lg border-[#007E85] py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 focus:ring-0 sm:text-sm sm:leading-6 bg-transparent"
              ></textarea>
            </div>
          </div>

          <div className="mt-6 space-y-6 col-span-full">
            <div className="flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="comments"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label htmlFor="comments" className="font-medium text-gray-900">
                  I accept the terms
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-6 justify-center items-center">
          <button className="bg-[#007E85] text-white p-2 rounded-lg w-[300px] h-14 max-w-xl">
            Submit
          </button>
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
            className="bg-[#FFFFFF] focus:outline-none border-none rounded-full w-[320px]"
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

export default ContactPage;
