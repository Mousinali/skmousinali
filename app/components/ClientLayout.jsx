"use client";

import PageLoader from "./PageLoader";
import SmoothScroll from "./SmoothScroll";
import Header from "./Header";
import Footer from "./Footer";

export default function ClientLayout({ children }) {
  return (
    <>
      <PageLoader key="page-loader" />
      <SmoothScroll key="smooth-scroll" />
      <Header key="header" />
      <main className="w-full">
        {children}
      </main>
      <Footer key="footer" />
    </>
  );
}
