import texture from "./assets/textture-bg.avif";
import Navbar from "./components/navbar/Navbar";
import Details from "./pages/Details";
import Home from "./pages/Home";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";

const App = () => {
  return (
    <SmoothScroll>
      <main className="w-full relative">
        {/* overlay texture */}
        <div className="absolute inset-0 z-50 pointer-events-none">
          <div
            className="w-full min-h-[200vh] bg-center opacity-30"
            style={{ backgroundImage: `url(${texture})` }}
          />
        </div>

        <Navbar />
        <Home />
        <Details />
      </main>
    </SmoothScroll>
  );
};

export default App;
