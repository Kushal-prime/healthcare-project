import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Shield, 
  Users, 
  Phone, 
  BookOpen, 
  Microscope,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users2
} from 'lucide-react';

const Home = () => {
  const mainCards = [
    {
      title: "Preventive Healthcare",
      description: "Build a foundation of wellness through vaccination insights, nutrition guidance, and health quizzes.",
      icon: Shield,
      link: "/preventive-healthcare",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Community Engagement",
      description: "Connect through health programs, events, and inspiring success stories from our community.",
      icon: Users,
      link: "/community-engagement",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Immediate Assistance",
      description: "Emergency helplines, government contacts, and hospital locations at your fingertips.",
      icon: Phone,
      link: "/immediate-assistance",
      color: "from-red-500 to-pink-500"
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Health Education",
      description: "Comprehensive resources and awareness programs"
    },
    {
      icon: Microscope,
      title: "Research Updates",
      description: "Latest breakthroughs in healthcare and medicine"
    },
    {
      icon: Users2,
      title: "Community Support",
      description: "Connect with others on similar health journeys"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Monitor your health improvements over time"
    }
  ];

  const stats = [
    { number: "10K+", label: "Community Members" },
    { number: "500+", label: "Health Events" },
    { number: "50+", label: "Partner Hospitals" },
    { number: "95%", label: "User Satisfaction" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Empowering Health
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              A Community-Focused Digital Platform
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
              Building healthier communities through awareness, prevention, and innovation. 
              Join us in creating a future where everyone has access to quality healthcare.
            </p>
          </motion.div>

          {/* Main Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {mainCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${card.color} flex items-center justify-center mb-6 mx-auto`}>
                  <card.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-gray-200 mb-6">{card.description}</p>
                <Link
                  to={card.link}
                  className="inline-flex items-center text-white font-semibold hover:text-gray-200 transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Heart className="h-12 w-12 text-white/20" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}>
          <Shield className="h-16 w-16 text-white/20" />
        </div>
        <div className="absolute top-1/2 left-20 animate-float" style={{ animationDelay: '4s' }}>
          <Users className="h-10 w-10 text-white/20" />
        </div>
      </section>

      {/* Why Centralized Platform Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why a Centralized Health Platform Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              In today's fragmented healthcare landscape, a centralized platform brings together 
              prevention, community support, and immediate assistance under one roof, making 
              healthcare more accessible and effective for everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-health-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary-50 to-health-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Health Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of community members who are already taking control of their health 
              and building a better future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/preventive-healthcare"
                className="bg-gradient-to-r from-primary-500 to-health-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Start Your Journey
              </Link>
              <Link
                to="/community-engagement"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Join Community
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
