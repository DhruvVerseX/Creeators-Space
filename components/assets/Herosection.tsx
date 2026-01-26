"use client";

import React from "react";
import { Button } from "../ui/button";
import { ChevronRight, Plus, Sparkles, MapPin, Wifi } from "lucide-react";
import Image from "next/image";
import Navbar from "./navbar";

function Hero() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/bg.jpg)" }}
    >
      <main className="relative z-10">
        <Navbar />
        <div className="grid grid-cols-12 gap-8 px-4 md:px-8 py-10 md:py-20 max-w-7xl mx-auto">
          {/* Left Column */}

          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit mb-8 px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 self-center lg:self-start">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white text-sm">
                Cutting-edge AI trip designs
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight text-balance text-center lg:text-left">
              Smart & Simple Trip Planning
            </h1>

            <Button className="w-full sm:w-fit bg-blue-700/60 hover:bg-blue-700/80 text-white backdrop-blur-sm border border-white/20 rounded-full px-8 py-6 text-lg self-center lg:self-start">
              Plan Your Trip <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="col-span-12 lg:col-span-7 relative flex items-center pt-28 justify-center lg:justify-end">
            <div className="w-full md:w-64 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl overflow-hidden">
              <div className="aspect-square bg-linear-to-br from-blue-400 to-teal-600">
                <Image
                  height={20}
                  width={20}
                  src="/bg.jpg"
                  alt="Bali"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-white/60 text-xs mb-2">
                  5 Days • Bali, Indonesia • Nature
                </p>
                <h3 className="text-white font-bold text-lg mb-3">
                  Bali Slow Travel
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  A mindful itinerary blending rice...
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    View Details
                  </Button>
                  <Button className="bg-white/20 hover:bg-white/30 text-white p-2">
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 px-4 md:px-8 pb-20 max-w-7xl mx-auto">
          <div className="col-span-12 md:col-span-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
            <p className="text-white/60 text-xs mb-4">Sun 09</p>
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-white font-bold">DUB</p>
                <p className="text-white/60 text-xs">6:10 AM</p>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 bg-white rounded-full"></div>
                <div className="w-8 h-px bg-gradient-to-r from-white to-transparent"></div>
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
              <div>
                <p className="text-white font-bold">LON</p>
                <p className="text-white/60 text-xs">9:25 AM</p>
              </div>
            </div>
            <p className="text-white text-2xl font-bold">$220</p>
          </div>

          <div className="col-span-12 md:col-span-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 md:gap-4 bg-white/5 rounded-full px-4 md:px-6 py-3 md:py-4 mb-6">
              <Plus className="w-5 h-5 text-white/60" />
              <input
                type="text"
                placeholder="Ask Anything..."
                className="flex-1 bg-transparent text-white placeholder:text-white/50 outline-none w-full"
              />
              <Wifi className="hidden sm:block w-5 h-5 text-white/60" />
              <Sparkles className="hidden sm:block w-5 h-5 text-white/60" />
              <ChevronRight className="w-5 h-5 text-white/60" />
            </div>

            <div className="flex flex-wrap gap-3">
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 gap-2 rounded-full w-full sm:w-fit justify-start md:justify-center">
                <Sparkles className="w-4 h-4 shrink-0" />
                Inspire me where to go
              </Button>
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 gap-2 rounded-full w-full sm:w-fit justify-start md:justify-center">
                <Plus className="w-4 h-4 shrink-0" />
                Create new Trip
              </Button>
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 gap-2 rounded-full w-full sm:w-fit justify-start md:justify-center">
                <MapPin className="w-4 h-4 shrink-0" />
                Find family hotels in Dubai
              </Button>
            </div>
          </div>

          <div className="col-span-12 md:col-span-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 flex flex-col justify-center">
            <div className="w-12 h-12 bg-linear-to-br from-green-400 to-blue-500 rounded-full mb-4 flex items-center justify-center text-2xl">
              🌍
            </div>
            <p className="text-white text-sm font-semibold mb-2">
              With Worldwide Access, We Bring Our Top-Rated Travel Planning
              Solutions to Explorers Across the Globe.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Hero;
