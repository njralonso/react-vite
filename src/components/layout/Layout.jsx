import Header from "./sections/Header";
import Footer from "./sections/Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="web-container flex flex-col justify-between h-screen">
        <Header />
        <main className="mx-4">{children}</main>
        <Footer />
      </div>
    </>
  );
}
