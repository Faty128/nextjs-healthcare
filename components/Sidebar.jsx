import Link from 'next/link';
import React from 'react';
import { MdDashboard, MdOutlineSchedule } from "react-icons/md";
import { FaCalendarDay } from "react-icons/fa";
import { RiMessage3Line, RiLogoutBoxLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import Navbar from './Navbar';


const sidebarItems = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: MdDashboard
    },
    {
        name: "Appointement",
        href: "/appointement",
        icon: FaCalendarDay
    },
    {
        name: "Message",
        href: "/message",
        icon: RiMessage3Line
    },
    {
        name: "Schedule",
        href: "/schedule",
        icon: MdOutlineSchedule
    },
    {
        name: "Settings",
        href: "/settings",
        icon: IoSettingsOutline
    },
    {
        name: "Logout",
        href: "/logout",
        icon: RiLogoutBoxLine
    }

]

const Sidebar = ({ children }) => {
  return (
    <div className='bg-teal-700 h-screen overflow-hidden'>
        <div className='flex justify-center items-center'>
            <aside className='w-40 p-4 h-screen'>
                <ul className='block justify-between items-center my-10 pt-8'>
                    {sidebarItems.map(({ name, href, icon: Icon}) => (
                        <li className='flex justify-start items-center text-white hover:bg-slate-300 hover:text-white rounded-xl p-2' key={name}>
                        {/* <MdDashboard className='mr-2'/> */}
                        <Link href={href} className='flex justify-start items-center mb-5'>
                            <span className='mr-2'>
                                <Icon />
                            </span>
                            <span>{name}</span>
                        </Link>
                        </li>
                    ))
                    }
                </ul>
            </aside>
            <main className='flex-grow p-1 py-1 m-0'>
             {children} 
            </main>

        </div>
    </div>
  )
}

export default Sidebar
