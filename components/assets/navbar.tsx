"use-client";

import { Button } from "../ui/button";
import { ChevronRight, Plus, Sparkles, MapPin, Wifi } from "lucide-react";
import { login, logout } from "@/lib/authActions";

function navbar() {
  return (
    <header className="absolute top-0 left-1/2 -translate-x-1/2 mt-4 md:mt-8 w-[95%] md:w-[85%] lg:w-[70%] max-w-6xl p-1 md:p-2 z-20 backdrop-blur-sm rounded-full bg-white/10 border border-white/20">
      <nav className="flex items-center justify-between px-4 md:px-8 py-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-bold text-blue-900">
            T
          </div>
          <span className="text-white text-lg md:text-xl font-bold">
            Travelynx
          </span>
        </div>

        <div className="hidden md:flex items-center text-white gap-6">
          <a href="#" className="text-white/80 hover:text-white transition">
            Home
          </a>
          <a href="#" className="text-white/80 hover:text-white transition">
            About Us
          </a>
          <a href="#" className="text-white/80 hover:text-white transition">
            How It Works
          </a>
          <a href="#" className="text-white/80 hover:text-white transition">
            Destinations
          </a>
          <a href="#" className="text-white/80 hover:text-white transition">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-1 md:gap-3">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 px-2 md:px-4 text-sm md:text-base"
            onClick={login}
          >
            Login
          </Button>
          <Button className="bg-white text-blue-900 hover:bg-white/90 rounded-full px-4 md:px-6 text-sm md:text-base">
            Sign Up <ChevronRight className="hidden sm:inline w-4 h-4 ml-1" />
          </Button>
          <Button
            variant="ghost"
            className="hidden sm:flex text-white hover:bg-white/10 px-4 text-sm md:text-base"
            onClick={logout}
          >
            Logout
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default navbar;
