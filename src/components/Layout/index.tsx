import React from "react";

// component
import NavBar from "@src/components/Layout/NavBar";
import ScrollProgress from "@src/components/Layout/ScrollProgress";
import ToTopButton from "@src/components/Layout/ToTopButton";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <ScrollProgress />
      </header>
      <main className="px-4">{children}</main>
      <footer className="bg-gray-200">
        <NavBar />
      </footer>
      <aside>
        <ToTopButton />
      </aside>
    </>
  );
};

export default Layout;
