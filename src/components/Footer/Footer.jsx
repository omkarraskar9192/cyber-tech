import { Link } from 'react-router-dom';
import { Code2, Heart } from 'lucide-react';
import { GithubIcon, TwitterIcon, DiscordIcon } from '../common/Icons';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-slate-950 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-white text-base tracking-tight">
                NEXUS COLLECTIVE
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              An open collegiate developer society dedicated to building high-impact open-source systems, competitive hacking, and technical leadership.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-cyan-400 transition-colors">Home Portal</Link></li>
              <li><Link to="/content" className="hover:text-cyan-400 transition-colors">Projects & Repos</Link></li>
              <li><Link to="/team" className="hover:text-cyan-400 transition-colors">Core Team & Mentors</Link></li>
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About Our Vision</Link></li>
            </ul>
          </div>

          {/* Community & Socials */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-3">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <DiscordIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p>&copy; {new Date().getFullYear()} Nexus Developer Collective. Open Source under MIT License.</p>
          <p className="flex items-center gap-1 text-slate-500">
            Crafted with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> by Club Engineers
          </p>
        </div>
      </div>
    </footer>
  );
}