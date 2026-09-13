import Navbar from './components/Navbar'
import banner from '../assets/banner-stack.png'

function App() {
  return (
    <>
      <Navbar />
      <section className="bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-10 px-6 py-20">

          
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold leading-tight text-gray-900">
              Build Your Ideal
              <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-500">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that
              fits your next project.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <button className="rounded-md bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2.5 text-sm font-medium text-white">
                Explore Technologies
              </button>

              <button className="rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-600">
                Learn More
              </button>
            </div>
          </div>

          
          <div className="flex justify-center">
            <img
              src={banner}
              alt="Development Stack"
              className="w-[360px]"
            />
          </div>

        </div>
      </section>
    </>
  )
}

export default App