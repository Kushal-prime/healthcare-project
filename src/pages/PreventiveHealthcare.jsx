import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Syringe, 
  Apple, 
  Dumbbell, 
  Brain, 
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Award,
  TrendingUp
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const PreventiveHealthcare = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [quizScore, setQuizScore] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);

  // Vaccination data for charts
  const vaccinationData = [
    { ageGroup: '0-2 years', vaccines: 8, coverage: 95 },
    { ageGroup: '3-5 years', vaccines: 6, coverage: 88 },
    { ageGroup: '6-12 years', vaccines: 4, coverage: 92 },
    { ageGroup: '13-18 years', vaccines: 3, coverage: 85 },
    { ageGroup: '19-65 years', vaccines: 2, coverage: 78 },
    { ageGroup: '65+ years', vaccines: 3, coverage: 82 }
  ];

  const coverageData = [
    { name: 'Fully Vaccinated', value: 85, color: '#22c55e' },
    { name: 'Partially Vaccinated', value: 12, color: '#f59e0b' },
    { name: 'Not Vaccinated', value: 3, color: '#ef4444' }
  ];

  const nutritionTips = [
    {
      category: "Fruits & Vegetables",
      tips: [
        "Aim for 5-7 servings daily",
        "Include a variety of colors",
        "Fresh is best, but frozen works too",
        "Try smoothies for picky eaters"
      ]
    },
    {
      category: "Protein Sources",
      tips: [
        "Include lean meats, fish, beans",
        "Eat fish 2-3 times per week",
        "Choose plant-based proteins",
        "Limit processed meats"
      ]
    },
    {
      category: "Hydration",
      tips: [
        "Drink 8-10 glasses of water daily",
        "Start your day with water",
        "Eat water-rich foods",
        "Limit sugary drinks"
      ]
    },
    {
      category: "Exercise Guidelines",
      tips: [
        "150 minutes moderate exercise weekly",
        "Include strength training 2x/week",
        "Take stairs instead of elevators",
        "Walk during phone calls"
      ]
    }
  ];

  const healthQuizzes = [
    {
      id: 1,
      title: "Nutrition Knowledge Quiz",
      questions: 5,
      difficulty: "Beginner"
    },
    {
      id: 2,
      title: "Exercise & Fitness Quiz",
      questions: 8,
      difficulty: "Intermediate"
    },
    {
      id: 3,
      title: "Mental Health Awareness",
      questions: 6,
      difficulty: "Beginner"
    }
  ];

  const handleQuizStart = (quizId) => {
    setShowQuiz(true);
    // Simulate quiz completion
    setTimeout(() => {
      setQuizScore(Math.floor(Math.random() * 40) + 60);
      setShowQuiz(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building a Foundation of Wellness
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Prevention is the best medicine. Discover how to maintain your health 
              through proper nutrition, exercise, and timely vaccinations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vaccination Insights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Syringe className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Vaccination Insights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding vaccination schedules and coverage rates across different age groups
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Bar Chart */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Vaccines by Age Group</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={vaccinationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="ageGroup" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="vaccines" fill="#22c55e" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Pie Chart */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Vaccination Coverage</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={coverageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    dataKey="value"
                  >
                    {coverageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {coverageData.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm text-gray-600">{item.name}: {item.value}%</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nutrition & Exercise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Apple className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nutrition & Exercise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential tips and guidelines for maintaining a healthy lifestyle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nutritionTips.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-health-500 rounded-lg flex items-center justify-center">
                      {category.category === "Fruits & Vegetables" && <Apple className="h-6 w-6 text-white" />}
                      {category.category === "Protein Sources" && <Dumbbell className="h-6 w-6 text-white" />}
                      {category.category === "Hydration" && <Brain className="h-6 w-6 text-white" />}
                      {category.category === "Exercise Guidelines" && <Dumbbell className="h-6 w-6 text-white" />}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{category.category}</h3>
                  </div>
                  {activeAccordion === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {activeAccordion === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6"
                  >
                    <ul className="space-y-3">
                      {category.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Quizzes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Health Quizzes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Test your knowledge and learn more about health and wellness
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {healthQuizzes.map((quiz, index) => (
              <motion.div
                key={quiz.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{quiz.title}</h3>
                  <p className="text-gray-600 mb-4">{quiz.questions} Questions • {quiz.difficulty}</p>
                  <button
                    onClick={() => handleQuizStart(quiz.id)}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Start Quiz
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quiz Results Modal */}
          {quizScore && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => setQuizScore(null)}
            >
              <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Quiz Completed!</h3>
                <p className="text-4xl font-bold text-green-600 mb-2">{quizScore}%</p>
                <p className="text-gray-600 mb-6">
                  {quizScore >= 80 ? "Excellent work!" : quizScore >= 60 ? "Good job!" : "Keep learning!"}
                </p>
                <button
                  onClick={() => setQuizScore(null)}
                  className="bg-gradient-to-r from-primary-500 to-health-500 text-white py-3 px-8 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </motion.div>
          )}

          {/* Quiz Loading */}
          {showQuiz && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            >
              <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-spin">
                  <Brain className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Taking Quiz...</h3>
                <p className="text-gray-600">Please wait while we process your answers</p>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default PreventiveHealthcare;
