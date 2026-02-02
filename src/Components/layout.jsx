import React from "react";
import Navbar from "./navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./footer";

export default function layout() {
  const loc = useLocation();

  return (
    <>
      <Navbar />
      <Outlet key={loc.pathname} />
    </>
  );
}
