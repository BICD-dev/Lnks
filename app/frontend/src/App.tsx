import { motion } from 'framer-motion'
import { ArrowRight, Copy, Link2, Zap, BarChart3, ShieldCheck } from 'lucide-react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const featureCards = [
  {
    title: 'Fast Link Creation',
    description: 'Convert long URLs into clean short links instantly with one click.',
    icon: Zap,
  },
  {
    title: 'Insightful Analytics',
    description: 'Track clicks, locations, and top-performing links in one dashboard.',
    icon: BarChart3,
  },
  {
    title: 'Safe & Reliable',
    description: 'Link verification and secure redirects keep your audience protected.',
    icon: ShieldCheck,
  },
]

function App() {
  return (
    <div className="min-h-screen overflow-x-clip pb-2">
      <div className="bg-shape bg-shape-one" aria-hidden="true" />
      <div className="bg-shape bg-shape-two" aria-hidden="true" />

      <Header />

      <main className="mx-auto mt-10 w-[95%] max-w-6xl md:mt-16">
        <section className="grid items-center gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-[#b6c7ff] bg-white/65 px-4 py-1.5 text-sm font-medium text-[#2a3f8f] backdrop-blur-md">
              <Link2 size={15} />
              Built for modern link sharing
            </p>
            <h1 className="font-heading mt-5 text-balance text-4xl font-semibold leading-tight text-[#101c50] md:text-6xl md:leading-[1.05]">
              Turn any URL into a clean, trackable short link.
            </h1>
            <p className="mt-5 max-w-xl text-base text-[#32488f] md:text-lg">
              Lnks helps creators and teams ship polished links faster with analytics,
              custom aliases, and reliable redirects in one simple workspace.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#2f80ed,#8665ff)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#4a57f03b] transition hover:translate-y-[-1px] hover:brightness-110">
                Start shortening
                <ArrowRight size={16} />
              </button>
              <button className="rounded-full border border-[#a8bbff] bg-white/70 px-6 py-3 text-sm font-semibold text-[#23388a] backdrop-blur-sm transition hover:bg-white">
                View pricing
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.65, ease: 'easeOut' }}
            className="glass-panel rounded-3xl border border-white/35 p-5 shadow-2xl shadow-[#2d46d926] md:p-6"
          >
            <p className="text-sm font-medium text-[#2d4396]">Try it now</p>
            <div className="mt-3 rounded-2xl border border-[#cad8ff] bg-white/70 p-3">
              <input
                type="text"
                placeholder="Paste your long URL here..."
                className="w-full bg-transparent text-sm text-[#1e3079] placeholder:text-[#6070ac] focus:outline-none"
              />
            </div>
            <div className="mt-3 rounded-2xl border border-[#cad8ff] bg-white/70 p-3 text-sm text-[#1e3079]">
              lnks.dev/blueprint-launch
            </div>
            <div className="mt-4 flex gap-2">
              <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#1f3186] px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1a2b76]">
                Create link
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#a6bcff] bg-white/70 px-4 py-2.5 text-sm font-semibold text-[#24398b] transition hover:bg-white">
                <Copy size={16} />
                Copy
              </button>
            </div>
          </motion.div>
        </section>

        <section className="mt-16 grid gap-4 md:grid-cols-3">
          {featureCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.08, duration: 0.45 }}
              className="glass-panel rounded-2xl border border-white/35 p-5 md:p-6"
            >
              <div className="mb-4 inline-flex rounded-xl bg-[linear-gradient(135deg,#2f80ed,#8665ff)] p-2.5 text-white">
                <card.icon size={18} />
              </div>
              <h2 className="font-heading text-xl font-semibold text-[#112060]">{card.title}</h2>
              <p className="mt-2 text-sm text-[#41569f]">{card.description}</p>
            </motion.article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
