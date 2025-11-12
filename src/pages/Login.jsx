import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ShieldCheck } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Login attempt:', formData);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 flex items-center justify-center py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl grid lg:grid-cols-5 bg-white/5 rounded-3xl shadow-2xl ring-1 ring-white/10 backdrop-blur"
      >
        <div className="lg:col-span-3 p-8 sm:p-12 bg-white/10">
          <div className="flex items-center space-x-3 text-indigo-100 mb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/30 text-white">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">Empowering Health</p>
              <p className="text-base font-semibold text-white">Secure Member Access</p>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Welcome back
          </h1>
          <p className="text-slate-200/80 text-base">
            Sign in to coordinate care, manage programs, and stay close to the community stories that inspire you.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-white/80 mb-2">Email address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl bg-white/10 border border-white/10 py-3 pl-12 pr-4 text-white placeholder-white/40 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30 transition"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white/80 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl bg-white/10 border border-white/10 py-3 pl-12 pr-12 text-white placeholder-white/40 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/30 transition"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white/90 transition"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              <div className="flex justify-end mt-2">
                <Link to="#" className="text-sm font-medium text-indigo-200 hover:text-white transition">
                  Forgot password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 hover:-translate-y-0.5 hover:shadow-xl transition disabled:opacity-50"
            >
              {isSubmitting ? 'Signing in...' : 'Sign in securely'}
            </button>
          </form>

          <p className="mt-8 text-sm text-slate-200/70">
            Don’t have an account?{' '}
            <Link to="/signup" className="font-semibold text-white hover:text-indigo-200 transition">
              Create one now
            </Link>
          </p>
        </div>

        <div className="hidden lg:flex lg:col-span-2 flex-col justify-between p-8 sm:p-12 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.45),_transparent_60%)]">
          <div>
            <h2 className="text-xl font-semibold text-white">Benefits of signing in</h2>
            <ul className="mt-6 space-y-4 text-sm text-indigo-100/80">
              <li className="flex items-start space-x-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                <span>Coordinate preventive journeys and emergency preparedness in one dashboard.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                <span>Access partner resources, events, and success stories tailored to your community.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                <span>Collaborate with clinicians and volunteers through secure messaging tools.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20">
            <p className="text-sm text-indigo-100/90 leading-relaxed">
              “Empowering Health keeps our field teams focused on what matters—quick action and compassionate support.”
            </p>
            <p className="mt-4 text-xs text-indigo-100/70">- Operations Lead, Community Wellness Division</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;

