import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 pt-24 pb-20 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
