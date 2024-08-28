import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Productive from "./components/Productive";

function App() {
  return (
    <div className="w-[375px] mx-auto relative bg-[#fff] overflow-hidden flex flex-col 2xl:w-[1440px]">
      <Header />
      <main>
        <Hero />
        <Productive />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}

export default App;
