import React from "react";
import Topbar from "./Topbar";
import Middle from "./Middle";

export default function Header() {
  return (
    <>
      <header>
        <Topbar />
        <Middle />
      </header>
    </>
  );
}