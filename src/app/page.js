import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Fields from "../components/Fields";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Fields />
      </main>
      <Footer />
    </>
  );
}
