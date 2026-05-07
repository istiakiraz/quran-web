"use client";

import React, { useState } from "react";
import {
  Search,
  Moon,
  BookOpen,
  Bookmark,
  ChevronRight,
  Settings,
  Grid2X2,
  MapPin,
  AlignLeft,
} from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

// ─── Types ───────────────────────────────────────────────────────────────────
interface LayoutProps {
  children: React.ReactNode;
}

// ─── Mock Surah Data ──────────────────────────────────────────────────────────
const surahs = [
  { id: 1, name: "Al Fatihah", english: "The Opener", arabic: "الْفَاتِحَة", active: true },
  { id: 2, name: "Al Baqarah", english: "The Cow", arabic: "الْبَقَرَة" },
  { id: 3, name: "Al Imran", english: "Family of Imran", arabic: "آلِ عِمْرَان" },
  { id: 4, name: "An Nisa", english: "The Women", arabic: "النِّسَاء" },
  { id: 5, name: "Al Ma'idah", english: "The Table Spread", arabic: "الْمَائِدَة" },
  { id: 6, name: "Al An'am", english: "The Cattle", arabic: "الْأَنْعَام" },
  { id: 7, name: "Al A'raf", english: "The Heights", arabic: "الْأَعْرَاف" },
  { id: 8, name: "Al Anfal", english: "The Spoils of War", arabic: "الْأَنفَال" },
  { id: 9, name: "At Tawbah", english: "The Repentance", arabic: "التَّوْبَة" },
  { id: 10, name: "Yunus", english: "Jonah", arabic: "يُونُس" },
];

// ─── Left Sidebar Content ─────────────────────────────────────────────────────
function LeftSidebarContent() {
  const [activeTab, setActiveTab] = useState("Surah");
  const tabs = ["Surah", "Juz", "Page"];

  return (
    <div className="w-full h-full bg-[#1a1a1a] flex flex-col overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-[#2a2a2a] px-2 pt-2 shrink-0">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 text-sm font-medium rounded-t transition-colors ${
              activeTab === tab
                ? "bg-[#2a2a2a] text-white"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="px-3 py-2 shrink-0">
        <div className="flex items-center gap-2 bg-[#252525] rounded-lg px-3 py-2">
          <Search size={14} className="text-gray-500" />
          <input
            className="bg-transparent text-sm text-gray-300 placeholder-gray-600 outline-none flex-1"
            placeholder="Search Surah"
          />
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto">
        {surahs.map((surah) => (
          <div
            key={surah.id}
            className={`flex items-center gap-3 px-3 py-2.5 cursor-pointer transition-colors ${
              surah.active ? "bg-[#2a2a2a]" : "hover:bg-[#222]"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                surah.active ? "bg-green-600 text-white" : "bg-[#252525] text-gray-400"
              }`}
            >
              {surah.id}
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-medium leading-none mb-0.5 ${surah.active ? "text-white" : "text-gray-300"}`}>
                {surah.name}
              </p>
              <p className="text-[11px] text-gray-500">{surah.english}</p>
            </div>
            <span className="text-gray-400 font-amiri  text-2xl">
              {surah.arabic}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Right Sidebar Content ────────────────────────────────────────────────────
function RightSidebarContent() {
  const [arabicSize, setArabicSize] = useState(40);
  const [translationSize, setTranslationSize] = useState(21);
  const [activeTab, setActiveTab] = useState("Translation");

  return (
    <div className="w-full h-full bg-[#1a1a1a] flex flex-col overflow-hidden">
      {/* Tab switcher */}
      <div className="flex border-b border-[#2a2a2a] shrink-0">
        {["Translation", "Reading"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 text-sm font-medium transition-colors ${
              activeTab === tab
                ? "text-white border-b-2 border-green-500"
                : "text-gray-500 hover:text-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Reading Settings */}
        <div className="border border-[#2a2a2a] rounded-lg">
          <button className="w-full flex items-center justify-between p-3">
            <div className="flex items-center gap-2">
              <BookOpen size={16} className="text-gray-400" />
              <span className="text-sm text-gray-300 font-medium">Reading Settings</span>
            </div>
            <ChevronRight size={16} className="text-gray-500" />
          </button>
        </div>

        {/* Font Settings */}
        <div className="border border-[#2a2a2a] rounded-lg overflow-hidden">
          <div className="flex items-center justify-between p-3 border-b border-[#2a2a2a]">
            <div className="flex items-center gap-2">
              <span className="text-green-500 font-bold text-sm">T</span>
              <span className="text-sm text-green-400 font-medium">Font Settings</span>
            </div>
            <ChevronRight size={16} className="text-gray-500 rotate-90" />
          </div>

          <div className="p-3 space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-xs text-gray-400">Arabic Font Size</span>
                <span className="text-xs text-gray-400">{arabicSize}</span>
              </div>
              <input
                type="range" min={20} max={80} value={arabicSize}
                onChange={(e) => setArabicSize(Number(e.target.value))}
                className="w-full accent-green-500 h-1"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-xs text-gray-400">Translation Font Size</span>
                <span className="text-xs text-gray-400">{translationSize}</span>
              </div>
              <input
                type="range" min={12} max={40} value={translationSize}
                onChange={(e) => setTranslationSize(Number(e.target.value))}
                className="w-full accent-green-500 h-1"
              />
            </div>

            <div>
              <p className="text-xs text-gray-400 mb-2">Arabic Font Face</p>
              <div className="flex items-center justify-between bg-[#252525] rounded-lg px-3 py-2 cursor-pointer hover:bg-[#2d2d2d] transition-colors">
                <span className="text-sm text-gray-300">Noor E Huda</span>
                <ChevronRight size={14} className="text-gray-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Support Banner */}
        <div className="border border-[#2a2a2a] rounded-lg p-4 space-y-2">
          <p className="text-sm font-semibold text-white">Help spread the knowledge of Islam</p>
          <p className="text-xs text-gray-500 leading-relaxed">
            Your regular support helps us reach our religious brothers and sisters with the message of Islam. Join our mission and be part of the big change.
          </p>
          <button className="w-full bg-green-600 hover:bg-green-500 text-white text-sm font-medium py-2.5 rounded-lg transition-colors mt-2">
            Support Us
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Top Bar ──────────────────────────────────────────────────────────────────
// Mobile-only drawer triggers live here (left = surah list, right = settings)
function TopBar() {
  return (
    <header className="h-14 bg-[#1a1a1a] border-b border-[#2a2a2a] flex items-center justify-between px-4 z-50 relative">

      {/* ── LEFT: mobile drawer trigger + logo ── */}
      <div className="flex items-center gap-2">
        {/* Mobile Left Drawer Trigger — hidden on md+ */}
        <Drawer direction="left">
          <DrawerTrigger asChild>
            <button className="flex md:hidden w-8 h-8 items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-[#2a2a2a] transition-all">
              <AlignLeft size={18} />
            </button>
          </DrawerTrigger>
          <DrawerContent className="!w-72 !h-full bg-[#1a1a1a] border-r border-[#2a2a2a] rounded-none p-0 top-0 bottom-0 left-0 fixed">
            <LeftSidebarContent />
          </DrawerContent>
        </Drawer>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center shrink-0">
            <span className="text-white text-xs font-bold">Q</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-white text-sm font-bold leading-none">Quran Mazid</p>
            <p className="text-gray-500 text-[10px]">Read, Study, and Learn The Quran</p>
          </div>
        </div>
      </div>

      {/* ── CENTER: title ── */}
      <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none select-none">
        <span
          className="text-red-500 text-2xl font-bold"
          
        >
          Top
        </span>
      </div>

      {/* ── RIGHT: search, moon, support, mobile right drawer trigger ── */}
      <div className="flex items-center gap-2">
        <button className="text-gray-400 hover:text-white transition-colors p-1.5">
          <Search size={18} />
        </button>
        <button className="text-gray-400 hover:text-white transition-colors p-1.5">
          <Moon size={18} />
        </button>
        <button className="hidden sm:flex bg-green-600 hover:bg-green-500 text-white text-sm px-4 py-1.5 rounded-full font-medium items-center gap-1.5 transition-colors">
          Support Us
          <span className="text-yellow-300">⚡</span>
        </button>

        {/* Mobile Right Drawer Trigger — hidden on md+ */}
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <button className="flex md:hidden w-8 h-8 items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-[#2a2a2a] transition-all">
              <Settings size={18} />
            </button>
          </DrawerTrigger>
          <DrawerContent className="!w-72 !h-full bg-[#1a1a1a] border-l border-[#2a2a2a] rounded-none p-0 top-0 bottom-0 right-0 fixed">
            <RightSidebarContent />
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}

// ─── Left Nav Bar (icon strip) ────────────────────────────────────────────────
function NavBar() {
  const navIcons = [
    { icon: <Search size={18} />, label: "Search" },
    { icon: <BookOpen size={18} />, label: "Read" },
    { icon: <Bookmark size={18} />, label: "Bookmark" },
    { icon: <MapPin size={18} />, label: "Location" },
    { icon: <Settings size={18} />, label: "Settings" },
    { icon: <Grid2X2 size={18} />, label: "Grid" },
  ];

  return (
    <nav className="w-12 bg-[#111111] border-r border-[#2a2a2a] flex flex-col items-center py-3 gap-1 shrink-0">
      {navIcons.map((item, i) => (
        <button
          key={i}
          title={item.label}
          className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:text-green-400 hover:bg-[#2a2a2a] transition-all"
        >
          {item.icon}
        </button>
      ))}
    </nav>
  );
}

// ─── Main Layout ──────────────────────────────────────────────────────────────
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col h-screen bg-[#111111] text-white overflow-hidden">
      {/* TopBar — mobile drawer triggers live inside here */}
      <TopBar />

      <div className="flex flex-1 overflow-hidden">
        {/* Icon nav — always visible */}
        <NavBar />

        {/* Left Sidebar — desktop only */}
        <div className="hidden md:flex w-64 border-r border-[#2a2a2a]">
          <LeftSidebarContent />
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-[#111111]">
          {children}
        </main>

        {/* Right Sidebar — desktop only */}
        <div className="hidden md:flex w-72 border-l border-[#2a2a2a]">
          <RightSidebarContent />
        </div>
      </div>
    </div>
  );
}