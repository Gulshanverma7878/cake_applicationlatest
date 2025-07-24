// app/components/layouts/MainLayout.tsx
'use client';

import React from "react";
import Header from "./Header";
import Footer from "./Fotter";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      {/* Add padding to compensate for fixed header height (e.g. 120px) */}
      <main className="pt-[120px] min-h-screen bg-white text-black">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
