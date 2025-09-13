import { React, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
import { TbVinyl } from "react-icons/tb";
import { FaMicrophoneAlt } from "react-icons/fa";
import { IoAlbums } from "react-icons/io5";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {

    const [toggle, setToggle] = useState(true);



    return (
        <>
        <div className="flex flex-col items-start">
        {/* PROFILE */}
        <div className="py-5 px-6 text-xl flex items-center gap-3 text-[#3a3439] font-semibold">
          <IoPersonOutline />
          <p>Hello Kale!</p>
        </div>

        <div className="flex">
          {/* SIDEBAR */}
          <div
            className={`bg-[#30292f] rounded h-lvh transition-all duration-300 ${
              toggle ? "w-60" : "w-20"
            }`}
          >
            <section className="flex flex-col tracking-tight">
              {/* Toggle button */}
              <button
                onClick={() => setToggle(!toggle)}
                className="flex items-center gap-3 text-2xl font-semibold px-5 pt-4 mb-6"
              >
                <IoMenuSharp />
                {toggle && <span className="text-gray-200">Library</span>}
              </button>

              {/* Nav items */}
              {toggle && (
                <>
                  <nav>
                    <ul className="flex flex-col gap-6 px-3 text-gray-400">
                      <li className="flex items-center gap-2">
                        <IoHomeOutline />
                        <a href="#">HOME</a>
                      </li>
                      <li className="flex items-center gap-2">
                        <TbVinyl />
                        <a href="#">RECENTLY ADDED</a>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaMicrophoneAlt />
                        <a href="#">ARTISTS</a>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoAlbums />
                        <a href="#">ALBUMS</a>
                      </li>
                      <li className="flex items-center gap-2">
                        <IoMusicalNotesOutline />
                        <a href="#">SONGS</a>
                      </li>
                    </ul>
                  </nav>

                  {/* Playlists dropdown */}
                  <details className="bg-[#30292f] p-2 rounded mt-4">
                    <summary className="cursor-pointer list-none flex items-center gap-2 text-xl text-gray-200 font-semibold px-5">
                      PLAYLISTS
                      <IoIosArrowDown />
                    </summary>
                    <nav className="flex flex-col mt-4 gap-4">
                      <a href="#" className="hover:bg-gray-200 p-2 rounded tracking-tight text-gray-400">
                        PLAYLIST 1
                      </a>
                      <a href="#" className="hover:bg-gray-200 p-2 rounded tracking-tight text-gray-400">
                        PLAYLIST 2
                      </a>
                      <a href="#" className="hover:bg-gray-200 p-2 rounded tracking-tight text-gray-400">
                        FAVORITES
                      </a>
                      <a href="#" className="hover:bg-gray-200 p-2 rounded tracking-tight text-gray-400">
                        MADE FOR YOU
                      </a>
                    </nav>
                  </details>
                </>
              )}
            </section>
          </div>
        </div>
      </div>
        </>
    );
}