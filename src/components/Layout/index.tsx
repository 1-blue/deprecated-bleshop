// component
import NavBar from "@src/components/Layout/NavBar";
import ScrollProgress from "@src/components/Layout/ScrollProgress";
import ASide from "@src/components/Layout/ASide";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <header className="sticky top-0 z-10">
        <ScrollProgress />
      </header>

      <main className="px-4">{children}</main>

      <footer className="bg-gray-200">
        <NavBar />
      </footer>

      <ASide />
    </>
  );
};

export default Layout;
