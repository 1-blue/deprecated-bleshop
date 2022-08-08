import React from "react";

// component
import NavBar from "@src/components/Layout/NavBar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <header className="max-w-[1024px] mx-auto"></header>
      <main className="max-w-[1024px] mx-auto">{children}</main>
      <footer className="max-w-[1024px] mx-auto bg-gray-200">
        <NavBar />
      </footer>
      <aside></aside>
    </>
  );
};

export default Layout;
