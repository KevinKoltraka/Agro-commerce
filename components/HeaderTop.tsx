// *********************
// Role of the component: Topbar of the header
// Name of the component: HeaderTop.tsx
// Developer: Kevin Koltraka
// Component call: <HeaderTop />
// Input parameters: no input parameters
// Output: topbar with phone, email and login and register links
// *********************

"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { FaHeadphones } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";

const HeaderTop = () => {
  const { data: session }: any = useSession();

  const handleLogout = () => {
    setTimeout(() => signOut(), 1000);
    toast.success("Logout successful!");
  }
  return (
    <div className="h-10 text-black bg-gradient-to-l from-white to-green-600 max-lg:px-5 max-lg:h-16 max-[573px]:px-0">
      <div className="flex justify-between h-full max-lg:flex-col max-lg:justify-center max-lg:items-center max-w-screen-2xl mx-auto px-12 max-[573px]:px-0">
        <ul className="flex items-center h-full gap-x-5 max-[370px]:text-sm max-[370px]:gap-x-2">
          <li className="flex items-center gap-x-2 font-semibold">
            <FaHeadphones className="text-black" />
            <span>+355 68 817 2927</span>
          </li>
          <li className="flex items-center gap-x-2 font-semibold">
            <FaRegEnvelope className="text-black text-xl" />
            <span>test@email.com</span>
          </li>
        </ul>
        <ul className="flex items-center gap-x-5 h-full max-[370px]:text-sm max-[370px]:gap-x-2 font-semibold">
          {!session ? ( 
          <>
          <li className="flex items-center">
            <Link href="/login" className="flex items-center gap-x-2 font-semibold">
              <FaRegUser className="text-black" />
              <span>Login</span>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="/register" className="flex items-center gap-x-2 font-semibold">
              <FaRegUser className="text-black" />
              <span>Register</span>
            </Link>
          </li>
          </>
          ) :  (<>
          <span className="ml-10 text-base">{session.user?.email}</span>
          <li className="flex items-center">
            <button onClick={() => handleLogout()} className="flex items-center gap-x-2 font-semibold">
              <FaRegUser className="text-black" />
              <span>Log out</span>
            </button>
          </li>
          </>)}
        </ul>
      </div>
    </div>
  );
};

export default HeaderTop;