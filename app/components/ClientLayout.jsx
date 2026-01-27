"use client";

import PageLoader from "./PageLoader";
import SmoothScroll from "./SmoothScroll";
import Header from "./Header";

export default function ClientLayout({ children }) {
  return (
    <>
      <PageLoader />
      <SmoothScroll />
      <Header />
      <main>{children}</main>
    </>
  );
}
