import texture from "./assets/textture-bg.avif"
import Navbar from "./components/navbar/Navbar"
import Details from "./pages/Details"
import Home from "./pages/Home"

const App = () => {
  return (
    <>
      <main
        className="w-full"
      >
        {/* overlay texture */}
        <div
          className="absolute inset-0 z-50 pointer-events-none"
        >
          <div
            className="w-full min-h-[200vh] bg-center opacity-30"
            style={{ backgroundImage: `url(${texture})` }}
          >
          </div>
        </div>

        <Navbar />

        {/* sections */}
        <Home />

        <Details />
      </main>
    </>
  )
}

export default App