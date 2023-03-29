import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function Layout({ children }) {
  return (
    <div className="container mx-auto">
      <Navbar />
      <main className={inter.className}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
