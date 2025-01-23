import BackgroundGradient from "./components/BackgroundGradient"

function App() {
  return (
    <>
      <main className="bg-noise-layer bg-center bg-no-repeat bg-cover h-screen justify-center flex flex-col items-center">
        <BackgroundGradient />
        <div className="z-10 flex flex-col items-center">
          <h1 className="text-[80px] font-borel">we're foundation</h1>
          <p className="text-xl font-work-sans">we are an indie design and dev studio</p>
        </div>
      </main>
    </>
  )
}

export default App
