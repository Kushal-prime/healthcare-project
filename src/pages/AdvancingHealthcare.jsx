import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Microscope, 
  TrendingUp, 
  Calendar, 
  ExternalLink,
  Heart,
  Shield,
  Zap,
  Users,
  ArrowRight,
  Clock,
  Tag
} from 'lucide-react';

const AdvancingHealthcare = () => {
  const [research, setResearch] = useState([]);
  const [currentTimelineIndex, setCurrentTimelineIndex] = useState(0);

  // Mock data - in real app, this would come from API
  useEffect(() => {
    const mockResearch = [
      {
        id: 1,
        title: "Breakthrough in Cancer Treatment",
        description: "New immunotherapy approach shows 85% success rate in early trials for advanced melanoma patients.",
        category: "Cancer Research",
        date: "2025-01-15",
        image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400",
        author: "Dr. Sarah Johnson",
        institution: "National Cancer Institute",
        impact: "High",
        status: "Clinical Trial Phase II"
      },
      {
        id: 2,
        title: "AI-Powered Drug Discovery",
        description: "Machine learning algorithms accelerate drug development by 40% while reducing costs significantly.",
        category: "AI in Healthcare",
        date: "2025-01-10",
        image: "https://images.unsplash.com/photo-1551601657-bc60ed4a3fcc?w=400",
        author: "Dr. Michael Chen",
        institution: "MIT Technology Lab",
        impact: "Very High",
        status: "Implementation Phase"
      },
      {
        id: 3,
        title: "Universal Flu Vaccine",
        description: "New vaccine targets multiple flu strains with single shot, potentially eliminating annual flu shots.",
        category: "Vaccination",
        date: "2025-01-05",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400",
        author: "Dr. Emily Rodriguez",
        institution: "WHO Research Center",
        impact: "High",
        status: "Pre-Clinical Testing"
      },
      {
        id: 4,
        title: "Gene Therapy for Rare Diseases",
        description: "Revolutionary gene editing technique shows promise for treating previously incurable genetic disorders.",
        category: "Gene Therapy",
        date: "2024-12-28",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400",
        author: "Dr. James Wilson",
        institution: "Harvard Medical School",
        impact: "Very High",
        status: "Clinical Trial Phase I"
      },
      {
        id: 5,
        title: "Telemedicine AI Diagnosis",
        description: "AI system achieves 94% accuracy in diagnosing common conditions through video consultations.",
        category: "Telemedicine",
        date: "2024-12-20",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400",
        author: "Dr. Lisa Park",
        institution: "Stanford Health Tech",
        impact: "High",
        status: "Pilot Program"
      },
      {
        id: 6,
        title: "3D Printed Organs",
        description: "Breakthrough in bioprinting technology enables creation of functional organ tissues for transplantation.",
        category: "Regenerative Medicine",
        date: "2024-12-15",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400",
        author: "Dr. Robert Kim",
        institution: "Johns Hopkins Medicine",
        impact: "Very High",
        status: "Research Phase"
      }
    ];

    setResearch(mockResearch);
  }, []);

  const categories = [
    { name: "All", icon: Microscope, count: research.length },
    { name: "Cancer Research", icon: Heart, count: research.filter(r => r.category === "Cancer Research").length },
    { name: "AI in Healthcare", icon: Zap, count: research.filter(r => r.category === "AI in Healthcare").length },
    { name: "Vaccination", icon: Shield, count: research.filter(r => r.category === "Vaccination").length },
    { name: "Gene Therapy", icon: Users, count: research.filter(r => r.category === "Gene Therapy").length }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResearch = selectedCategory === "All" 
    ? research 
    : research.filter(item => item.category === selectedCategory);

  const getImpactColor = (impact) => {
    switch (impact) {
      case "Very High": return "from-red-500 to-pink-500";
      case "High": return "from-orange-500 to-yellow-500";
      case "Medium": return "from-blue-500 to-cyan-500";
      default: return "from-gray-500 to-gray-600";
    }
  };

  const getStatusColor = (status) => {
    if (status.includes("Clinical Trial")) return "bg-green-100 text-green-800";
    if (status.includes("Implementation")) return "bg-blue-100 text-blue-800";
    if (status.includes("Pilot")) return "bg-yellow-100 text-yellow-800";
    if (status.includes("Research")) return "bg-purple-100 text-purple-800";
    return "bg-gray-100 text-gray-800";
  };

  // Auto-scroll timeline
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTimelineIndex((prev) => (prev + 1) % filteredResearch.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [filteredResearch.length]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Microscope className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Research & Pharma Updates
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
              Stay informed about the latest breakthroughs in healthcare, 
              medical research, and pharmaceutical innovations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="h-5 w-5" />
                <span>{category.name}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-sm">
                  {category.count}
                </span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Research Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Research Updates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover groundbreaking research that's shaping the future of healthcare
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResearch.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getImpactColor(item.impact)}`}></div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Tag className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{item.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Users className="h-4 w-4" />
                      <span>{item.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <TrendingUp className="h-4 w-4" />
                      <span>{item.institution}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getImpactColor(item.impact)}`}></div>
                      <span className="text-sm font-medium text-gray-700">{item.impact} Impact</span>
                    </div>
                    <button className="text-indigo-600 hover:text-indigo-800 transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Timeline</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow the progression of healthcare innovations over time
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              key={currentTimelineIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto"
            >
              <div className="flex items-start space-x-6">
                <img
                  src={filteredResearch[currentTimelineIndex]?.image}
                  alt={filteredResearch[currentTimelineIndex]?.title}
                  className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(filteredResearch[currentTimelineIndex]?.status)}`}>
                      {filteredResearch[currentTimelineIndex]?.status}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(filteredResearch[currentTimelineIndex]?.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {filteredResearch[currentTimelineIndex]?.title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {filteredResearch[currentTimelineIndex]?.description}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{filteredResearch[currentTimelineIndex]?.author}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <TrendingUp className="h-4 w-4" />
                      <span>{filteredResearch[currentTimelineIndex]?.institution}</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Timeline Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {filteredResearch.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTimelineIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTimelineIndex ? 'bg-indigo-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Research Impact</h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Our platform tracks and shares the most impactful healthcare research
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Research Papers", icon: Microscope },
              { number: "50+", label: "Clinical Trials", icon: Heart },
              { number: "25+", label: "Breakthroughs", icon: Zap },
              { number: "10K+", label: "Lives Impacted", icon: Users }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-indigo-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Stay Updated with Latest Research
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get notified about the latest healthcare breakthroughs and research updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                <span>Subscribe to Updates</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-indigo-500 text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>View All Research</span>
                <ExternalLink className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AdvancingHealthcare;
