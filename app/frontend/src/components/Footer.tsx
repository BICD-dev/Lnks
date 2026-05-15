import { Link2, Send, GitBranch, ShieldCheck } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative mx-auto mt-24 w-[95%] max-w-6xl pb-10">
      <div className="glass-panel rounded-3xl border border-white/30 px-6 py-8 backdrop-blur-xl md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 text-[#193074]">
              <Link2 size={18} />
              <span className="font-heading text-lg font-semibold">Lnks</span>
            </div>
            <p className="max-w-md text-sm text-[#394e9b]">
              Shorten, track, and share every link with confidence. Built for fast-moving teams and creators.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#"
              aria-label="Community updates"
              className="grid size-10 place-items-center rounded-xl border border-[#aec2ff]/70 text-[#2a3f8f] transition hover:bg-white/70"
            >
              <Send size={16} />
            </a>
            <a
              href="#"
              aria-label="Repository"
              className="grid size-10 place-items-center rounded-xl border border-[#aec2ff]/70 text-[#2a3f8f] transition hover:bg-white/70"
            >
              <GitBranch size={16} />
            </a>
            <a
              href="#"
              aria-label="Security"
              className="grid size-10 place-items-center rounded-xl border border-[#aec2ff]/70 text-[#2a3f8f] transition hover:bg-white/70"
            >
              <ShieldCheck size={16} />
            </a>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-2 border-t border-[#dce5ff] pt-5 text-xs text-[#5d70b0] md:flex-row md:items-center md:justify-between">
          <p>2026 Lnks. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#23388a]">Privacy</a>
            <a href="#" className="hover:text-[#23388a]">Terms</a>
            <a href="#" className="hover:text-[#23388a]">Status</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
