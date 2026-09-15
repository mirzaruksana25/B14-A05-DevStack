import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import banner from '../assets/banner-stack.png'

type Technology = {
  id: number
  name: string
  category: string
  description: string
  icon: string
  rating: number
  difficulty: string
  badge: string
}

const badgeStyles: Record<string, string> = {
  Popular: 'bg-cyan-50 text-cyan-600',
  Versatile: 'bg-green-50 text-green-600',
  Fast: 'bg-orange-50 text-orange-500',
  Standard: 'bg-green-50 text-green-600',
  'Top SQL': 'bg-blue-50 text-blue-600',
  Cache: 'bg-red-50 text-red-500',
  Ubiquitous: 'bg-yellow-50 text-yellow-600',
  Essential: 'bg-cyan-50 text-cyan-600',
  Robust: 'bg-blue-50 text-blue-600',
  Modern: 'bg-cyan-50 text-cyan-600',
  Containers: 'bg-blue-50 text-blue-600',
}

const gradientClass =
  'bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600'

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([])

  useEffect(() => {
    fetch('/data/technologies.json')
      .then((response) => response.json())
      .then((data: Technology[]) => {
        setTechnologies(data)
      })
      .catch(() => {
        toast.error('Failed to load technologies.')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const handleAddToStack = (technology: Technology) => {
    const alreadySelected = selectedTechnologies.some(
      (item) => item.id === technology.id,
    )

    if (alreadySelected) {
      toast.warning(`${technology.name} is already in your stack!`)
      return
    }

    setSelectedTechnologies((current) => [
      ...current,
      technology,
    ])

    toast.success(`${technology.name} added to your stack!`)
  }

  const handleRemove = (id: number) => {
    const technology = selectedTechnologies.find(
      (item) => item.id === id,
    )

    setSelectedTechnologies((current) =>
      current.filter((item) => item.id !== id),
    )

    if (technology) {
      toast.info(`${technology.name} removed from your stack!`)
    }
  }

  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      return
    }

    setSelectedTechnologies([])
    toast.info('All technologies removed from your stack!')
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <span className="loading loading-spinner loading-lg text-pink-500"></span>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <ToastContainer position="top-right" />

      <Navbar />

      {/* Hero Section */}
      <section className="bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-16 md:flex-row md:py-20">
          {/* Hero Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Build Your Ideal
              <span
                className={`block ${gradientClass} bg-clip-text text-transparent`}
              >
                Development Stack
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-6 text-gray-500 md:text-base md:leading-7">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits
              your next project.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#technologies"
                className={`${gradientClass} rounded-md px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90`}
              >
                Explore Technologies
              </a>

              <a
                href="#technologies"
                className="rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:border-pink-300 hover:text-pink-500"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center">
            <img
              src={banner}
              alt="Development Stack"
              className="w-64 md:w-80 lg:w-[360px]"
            />
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section
        id="technologies"
        className="bg-white px-6 py-12 md:py-16"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Explore the{' '}
              <span className="text-pink-500">Technologies</span>
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Pick one technology per category to build your ideal stack
            </p>
          </div>

          {/* Technology Cards + Your Stack */}
          <div className="mt-8 grid gap-6 lg:grid-cols-4">
            {/* Technology Cards */}
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
              {technologies.map((technology) => {
                const isSelected = selectedTechnologies.some(
                  (item) => item.id === technology.id,
                )

                return (
                  <div
                    key={technology.id}
                    className={`flex min-h-[190px] flex-col rounded-xl border bg-white p-4 shadow-sm transition ${
                      isSelected
                        ? 'border-pink-400'
                        : 'border-gray-100'
                    }`}
                  >
                    {/* Icon + Badge */}
                    <div className="flex items-start justify-between">
                      <div className="flex h-9 w-9 items-center justify-center">
                        <img
                          src={technology.icon}
                          alt={`${technology.name} icon`}
                          className="h-8 w-8 object-contain"
                        />
                      </div>

                      <span
                        className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
                          badgeStyles[technology.badge] ??
                          'bg-gray-50 text-gray-600'
                        }`}
                      >
                        {technology.badge}
                      </span>
                    </div>

                    {/* Technology Name */}
                    <h3 className="mt-3 text-sm font-bold text-gray-900">
                      {technology.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 min-h-[48px] text-[10px] leading-4 text-gray-500">
                      {technology.description}
                    </p>

                    {/* Category + Difficulty + Rating */}
                    <div className="mt-auto flex items-center justify-between gap-2 pt-3 text-[9px]">
                      <span className="rounded bg-gray-50 px-1.5 py-1 text-gray-500">
                        {technology.category}
                      </span>

                      <span className="rounded bg-gray-50 px-1.5 py-1 text-gray-500">
                        {technology.difficulty}
                      </span>

                      <span className="flex items-center gap-1 font-medium text-gray-600">
                        <span className="text-yellow-400">★</span>
                        {technology.rating}
                      </span>
                    </div>

                    {/* Add To Stack Button */}
                    <button
                      onClick={() => handleAddToStack(technology)}
                      disabled={isSelected}
                      className={`mt-3 w-full rounded-md py-2 text-[10px] font-medium transition ${
                        isSelected
                          ? 'cursor-not-allowed bg-pink-50 text-pink-500'
                          : 'bg-gray-950 text-white hover:bg-gray-800'
                      }`}
                    >
                      {isSelected
                        ? '✓ Added to Stack'
                        : 'Add to Stack'}
                    </button>
                  </div>
                )
              })}
            </div>

            {/* Your Stack */}
            <aside className="h-fit rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900">
                Your Stack
              </h3>

              <p className="mt-1 text-[9px] text-gray-400">
                {selectedTechnologies.length} Technology Selected
              </p>

              {/* Empty State */}
              {selectedTechnologies.length === 0 ? (
                <div className="mt-4 flex min-h-[100px] items-center justify-center rounded-lg border border-dashed border-gray-200">
                  <div className="text-center">
                    <p className="text-xs font-medium text-gray-400">
                      No technologies selected yet.
                    </p>

                    <p className="mt-1 text-[10px] text-gray-300">
                      Your stack is empty.
                    </p>
                  </div>
                </div>
              ) : (
                /* Selected Technologies */
                <div className="mt-4 space-y-2">
                  {selectedTechnologies.map((technology) => (
                    <div
                      key={technology.id}
                      className="flex items-center justify-between rounded-lg border border-gray-100 px-3 py-2"
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={technology.icon}
                          alt={`${technology.name} icon`}
                          className="h-6 w-6 object-contain"
                        />

                        <div>
                          <p className="text-xs font-medium text-gray-800">
                            {technology.name}
                          </p>

                          <p className="text-[9px] text-gray-400">
                            {technology.category}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() =>
                          handleRemove(technology.id)
                        }
                        className="text-lg leading-none text-gray-400 transition hover:text-red-500"
                        aria-label={`Remove ${technology.name}`}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Remove All */}
              {selectedTechnologies.length > 0 && (
                <button
                  onClick={handleRemoveAll}
                  className="mt-4 w-full rounded-md border border-red-200 py-2 text-[10px] font-medium text-red-500 transition hover:bg-red-50"
                >
                  Remove All
                </button>
              )}
            </aside>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App