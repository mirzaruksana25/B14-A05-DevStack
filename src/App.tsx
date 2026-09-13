import { useEffect, useState } from 'react'
import {
  FaDocker,
  FaJava,
  FaNodeJs,
  FaReact,
  FaVuejs,
} from 'react-icons/fa'
import {
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiSvelte,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

import Navbar from './components/Navbar'
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

const iconMap = {
  FaReact,
  FaVuejs,
  SiSvelte,
  SiNextdotjs,
  FaNodeJs,
  SiPostgresql,
  SiRedis,
  SiJavascript,
  SiTypescript,
  FaJava,
  SiTailwindcss,
  FaDocker,
}

const iconColors: Record<string, string> = {
  React: 'text-cyan-400',
  'Vue.js': 'text-green-600',
  Svelte: 'text-orange-500',
  'Next.js': 'text-black',
  'Node.js': 'text-green-500',
  PostgreSQL: 'text-blue-600',
  Redis: 'text-red-500',
  JavaScript: 'text-yellow-500',
  TypeScript: 'text-blue-600',
  Java: 'text-sky-500',
  'Tailwind CSS': 'text-cyan-500',
  Docker: 'text-blue-500',
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

  useEffect(() => {
    fetch('/data/technologies.json')
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <span className="loading loading-spinner loading-lg text-pink-500"></span>
      </div>
    )
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-16 md:flex-row md:py-20">
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

            <div className="mt-8 flex items-center gap-3">
              <button
                className={`${gradientClass} rounded-md px-5 py-2.5 text-sm font-medium text-white`}
              >
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
              className="w-64 md:w-80 lg:w-[360px]"
            />
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-white px-6 py-12 md:py-16">
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

          {/* Cards + Your Stack */}
          <div className="mt-8 grid gap-6 lg:grid-cols-4">
            {/* Technology Cards */}
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
              {technologies.map((technology) => {
                const Icon =
                  iconMap[technology.icon as keyof typeof iconMap]

                return (
                  <div
                    key={technology.id}
                    className="flex min-h-[190px] flex-col rounded-xl border border-gray-100 bg-white p-4 shadow-sm"
                  >
                    {/* Icon + Badge */}
                    <div className="flex items-start justify-between">
                      <div className="flex h-9 w-9 items-center justify-center">
                        <Icon
                          className={`text-2xl ${iconColors[technology.name]}`}
                        />
                      </div>

                      <span
                        className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
                          badgeStyles[technology.badge]
                        }`}
                      >
                        {technology.badge}
                      </span>
                    </div>

                    {/* Name */}
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

                    {/* Add Button */}
                    <button className="mt-3 w-full rounded-md bg-gray-950 py-2 text-[10px] font-medium text-white transition hover:bg-gray-800">
                      Add to Stack
                    </button>
                  </div>
                )
              })}
            </div>

            {/* Your Stack Sidebar */}
            <aside className="h-fit rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
              <h3 className="text-sm font-bold text-gray-900">
                Your Stack
              </h3>

              <p className="mt-1 text-[9px] text-gray-400">
                0 Technology Selected
              </p>

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

              <button className="mt-4 w-full rounded-md border border-red-200 py-2 text-[10px] font-medium text-red-500">
                Remove All
              </button>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

export default App