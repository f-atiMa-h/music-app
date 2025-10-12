import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

export default function MainLayout() {
const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen flex">
       <Navbar isOpen={isOpen}/>
      <main className="flex-1 bg-[#0E0E10] p-6 transition-all duration-300">
        
        <Outlet />
      </main>
    </div>
  );
}
