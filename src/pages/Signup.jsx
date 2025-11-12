import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { UserPlus, Mail, Lock, Phone, Building2, Eye, EyeOff, ShieldCheck } from 'lucide-react';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    organisation: '',
    phone: '',
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Signup attempt:', formData);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 flex items-center justify-center py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl grid lg:grid-cols-5 bg-white/5 rounded-3xl shadow-2xl ring-1 ring-white/10 backdrop-blur"
      >
        <div className="hidden lg:flex lg:col-span-2 flex-col justify-between p-10 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.4),_transparent_60%)]">
          <div>
            <h2 className="text-xl font-semibold text-white">Why join Empowering Health?</h2>
            <ul className="mt-6 space-y-4 text-sm text-emerald-100/80">
              <li className="flex items-start space-x-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                <span>Collaborate with clinics, NGOs, and government partners to activate unified care journeys.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                <span>Access analytics that surface community needs, program performance, and health outcomes.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                <span>Mobilize volunteers with ready-to-launch kits, training, and messaging tools.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20">
            <p className="text-sm text-emerald-100/90 leading-relaxed">
              “The platform helped us align preventive care drives across 15 districts in under four weeks.”
            </p>
            <p className="mt-4 text-xs text-emerald-100/70">- Public Health Coordinator</p>
          </div>
        </div>

        <div className="lg:col-span-3 p-8 sm:p-12 bg-white/10">
          <div className="flex items-center space-x-3 text-emerald-100 mb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/30 text-white">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">Empowering Health</p>
              <p className="text-base font-semibold text-white">Create your account</p>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Join the movement
          </h1>
          <p className="text-slate-200/80 text-base">
            Register to access the full suite of community coordination tools, impact dashboards, and collaborative programs.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-white/80 mb-2">Full name</label>
                <div className="relative">
                  <UserPlus className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl bg-white/10 border border-white/10 py-3 pl-12 pr-4 text-white placeholder-white/40 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 transition"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white/80 mb-2">Organisation / Role</label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
                  <input
                    type="text"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    className="w-full rounded-2xl bg-white/10 border border-white/10 py-3 pl-12 pr-4 text-white placeholder-white/40 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 transition"
                    placeholder="Organisation or area of work"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-white/80 mb-2">Phone number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-2xl bg-white/10 border border-white/10 py-3 pl-12 pr-4 text-white placeholder-white/40 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 transition"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

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
                    className="w-full rounded-2xl bg-white/10 border border-white/10 py-3 pl-12 pr-4 text-white placeholder-white/40 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 transition"
                    placeholder="name@organisation.com"
                  />
                </div>
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
                  className="w-full rounded-2xl bg-white/10 border border-white/10 py-3 pl-12 pr-12 text-white placeholder-white/40 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30 transition"
                  placeholder="Create a secure password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white/90 transition"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 py-3 font-semibold text-white shadow-lg shadow-emerald-500/30 hover:-translate-y-0.5 hover:shadow-xl transition disabled:opacity-50"
            >
              {isSubmitting ? 'Creating account...' : 'Create account'}
            </button>
          </form>

          <p className="mt-8 text-sm text-slate-200/70">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-white hover:text-emerald-200 transition">
              Sign in here
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;

