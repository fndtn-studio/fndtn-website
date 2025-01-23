import BackgroundGradient from "./components/BackgroundGradient"
import SocialLinks from "./components/SocialLinks"

function App() {
  return (
    <>
      <div className="bg-noise-layer bg-center bg-no-repeat bg-cover bg-fixed h-screen justify-center flex flex-col items-center">
        <BackgroundGradient />
        <main className="z-1 flex flex-col items-center justify-center">
          <div className="mx-[100px] mt-[100px] w-[1240px] h-[731px] flex flex-col justify-center items-center">
            <h1 className="text-[80px] font-borel">we're foundation</h1>
            <p className="text-xl font-work-sans">we are an indie design and dev studio</p>
          </div>
          <SocialLinks />
          {/* <div className="w-full h-[1000px]"></div>
          <div className="w-full h-[1000px]"></div> */}
        </main>
      </div>
    </>
  )
}

export default App
