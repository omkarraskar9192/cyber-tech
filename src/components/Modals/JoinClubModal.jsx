import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setJoinModalOpen, addTerminalCommand } from '../../store/slices/uiSlice';
import { X, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../common/Icons';

export default function JoinClubModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.ui.isJoinModalOpen);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    github: '',
    track: 'systems',
    experience: 'intermediate',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    dispatch(addTerminalCommand({
      type: 'success',
      text: `🎉 Welcome @${formData.github || formData.name}! Your application for the ${formData.track.toUpperCase()} track has been logged.`
    }));

    setTimeout(() => {
      setIsSubmitted(false);
      dispatch(setJoinModalOpen(false));
      setFormData({ name: '', email: '', github: '', track: 'systems', experience: 'intermediate' });
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all">
      <div className="relative w-full max-w-lg rounded-3xl bg-slate-950 border border-white/15 p-6 sm:p-8 shadow-2xl text-white">
        {/* Close Button */}
        <button
          onClick={() => dispatch(setJoinModalOpen(false))}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2 text-cyan-400 font-mono text-xs">
              <Sparkles className="w-4 h-4" />
              MEMBERSHIP REGISTRATION
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Join the Nexus Developer Club
            </h3>
            <p className="text-sm text-slate-400 mt-1 mb-6">
              Collaborate on real-world systems, ship open source, and hack alongside top engineers.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Linus Torvalds"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    College / Dev Email
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="developer@campus.edu"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5 flex items-center gap-1">
                    <GithubIcon className="w-3.5 h-3.5" /> GitHub Username
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                    placeholder="octocat"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Preferred Track
                </label>
                <select
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value="systems">Systems Programming (Rust, C++, WASM, OS)</option>
                  <option value="web">Full-Stack & Web3 (React 19, Next.js, Node, Solidity)</option>
                  <option value="ai">AI & Computer Vision (PyTorch, Three.js, LLMs)</option>
                  <option value="cloud">Cloud Native & DevOps (Go, Docker, Kubernetes)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-6 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Submit Developer Application</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-white">Application Received!</h4>
            <p className="text-sm text-slate-300 mt-2 max-w-sm mx-auto">
              Welcome to the team, <span className="text-cyan-400 font-semibold">{formData.name}</span>. Check your terminal for confirmation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
