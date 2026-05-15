import { motion } from 'framer-motion'
import { Link2, Sparkles, Menu } from 'lucide-react'

const navItems = ['Features', 'How it works', 'Pricing', 'Contact']

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="sticky top-0 z-50 mx-auto mt-4 w-[95%] max-w-6xl"
    >
      <div className="glass-panel flex items-center justify-between rounded-2xl border border-white/30 px-4 py-3 shadow-lg shadow-[#3252f622] backdrop-blur-xl md:px-6">
        <a href="#" className="flex items-center gap-2">
          <span className="grid size-10 place-items-center rounded-xl bg-[linear-gradient(135deg,#2f80ed,#8665ff)] text-white">
            <Link2 size={20} />
          </span>
          <span className="font-heading text-xl font-semibold tracking-tight text-[#1a2d78]">
            Lnks
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-[#203383] transition hover:text-[#5d61f0]"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-full border border-[#98acff]/60 px-4 py-2 text-sm font-medium text-[#1f3185] transition hover:bg-white/70">
            Log in
          </button>
          <button className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#2f80ed,#8665ff)] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110">
            <Sparkles size={16} />
            Start free
          </button>
        </div>

        <button
          className="grid size-10 place-items-center rounded-lg border border-[#a2b6ff]/60 text-[#203383] md:hidden"
          aria-label="Open menu"
        >
          <Menu size={18} />
        </button>
      </div>
    </motion.header>
  )
}
