import React from "react";

// component
import NavBar from "@src/components/Layout/NavBar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer className="bg-gray-200">
        <NavBar />
      </footer>
      <aside></aside>
    </>
  );
};

export default Layout;
