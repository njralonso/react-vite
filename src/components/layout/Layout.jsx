import Header from "./sections/Header";
import Footer from "./sections/Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="web-container flex flex-col justify-between h-screen">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
