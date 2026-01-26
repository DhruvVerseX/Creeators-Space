"use-client";

import { Button } from "../ui/button";
import { ChevronRight, Plus, Sparkles, MapPin, Wifi } from "lucide-react";
import { login, logout } from "@/lib/authActions";

function navbar() {
  return (
    <header className="absolute mt-8 mx-auto w-[55%] max-w-6xl ml-60 p-2 z-20 backdrop-blur-sm rounded-full  bg-white/10 border border-white/20">
      <nav className="flex items-center justify-between px-8 py-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center font-bold text-blue-900">
            T
          </div>
          <span className="text-white text-xl font-bold">Travelynx</span>
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

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10"
            onClick={login}
          >
            Login
          </Button>
          <Button className="bg-white text-blue-900 hover:bg-white/90 rounded-full px-6">
            Sign Up <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10"
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
