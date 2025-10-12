import { useState } from "react";
import {
  IoHomeOutline,
  IoMenuSharp,
  IoAlbums,
  IoMusicalNotesOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { TbVinyl } from "react-icons/tb";
import { FaMicrophoneAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const [toggle, setToggle] = useState(true); // start open for clarity

  return (
    <div className="flex min-h-screen bg-[#121212] text-white transition-all duration-300">
      {/* ===== SIDEBAR ===== */}
      <aside
        className={`transition-all duration-300 overflow-hidden bg-[#121214] ${
          toggle ? "w-60" : "w-16"
        }`}
      >
        {/* Profile */}
        <div className="py-5 px-4 text-xl flex items-center gap-3 text-[#E6E6E6] font-semibold">
          <IoPersonOutline />
          {toggle && <p>Hello Kale!</p>}
        </div>

        <section className="flex flex-col tracking-tight">
          {/* Toggle button */}
          <button
            onClick={() => setToggle(!toggle)}
            className="flex items-center gap-3 text-2xl font-semibold px-4 pt-4 mb-6"
          >
            <IoMenuSharp
              className={`${toggle ? "text-gray-200" : "text-[#EAEAEA]"}`}
            />
            {toggle && <span className="text-[#E6E6E6]">Library</span>}
          </button>

          {/* Navigation */}
          <nav>
            <ul className="flex flex-col gap-6 px-3 text-[#A0A0A0]">
              <li className="flex items-center gap-2 hover:text-[#FFFFFF] transition-colors duration-200">
                <IoHomeOutline />
                {toggle && <a href="/">HOME</a>}
              </li>
              <li className="flex items-center gap-2 hover:text-[#FFFFFF] transition-colors duration-200">
                <FaMicrophoneAlt />
                {toggle && <a href="/artist">ARTISTS</a>}
              </li>
              <li className="flex items-center gap-2 hover:text-[#FFFFFF] transition-colors duration-200">
                <IoAlbums />
                {toggle && <a href="/albums">ALBUMS</a>}
              </li>
              <li className="flex items-center gap-2 hover:text-[#FFFFFF] transition-colors duration-200">
                <IoMusicalNotesOutline />
                {toggle && <a href="/songs">SONGS</a>}
              </li>
            </ul>
          </nav>

          {/* Playlists */}
          {toggle && (
            <details className="bg-[#121214] p-2 rounded mt-4">
              <summary className="cursor-pointer list-none flex items-center gap-2 text-xl text-[#EAEAEA] font-semibold px-5">
                PLAYLISTS
                <IoIosArrowDown />
              </summary>
              <nav className="flex flex-col mt-4 gap-4">
                {["PLAYLIST 1", "PLAYLIST 2", "FAVORITES", "MADE FOR YOU"].map(
                  (item) => (
                    <a
                      key={item}
                      href="#"
                      className="hover:text-[#FFFFFF] p-2 rounded tracking-tight text-[#A0A0A0] transition-colors duration-200"
                    >
                      {item}
                    </a>
                  )
                )}
              </nav>
            </details>
          )}
        </section>
      </aside>

      
    </div>
  );
}
