import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Play, 
  Brain, 
  Share2, 
  Heart,
  Shield,
  Activity,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  ExternalLink
} from 'lucide-react';

const InformationAwareness = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizScore, setQuizScore] = useState(null);

  const infographics = [
    {
      title: "Daily Water Intake",
      description: "Stay hydrated with 8-10 glasses of water daily",
      icon: Activity,
      color: "from-blue-500 to-cyan-500",
      data: "8-10 glasses/day"
    },
    {
      title: "Exercise Guidelines",
      description: "150 minutes of moderate exercise per week",
      icon: Heart,
      color: "from-red-500 to-pink-500",
      data: "150 min/week"
    },
    {
      title: "Sleep Requirements",
      description: "7-9 hours of quality sleep for adults",
      icon: Shield,
      color: "from-purple-500 to-indigo-500",
      data: "7-9 hours"
    },
    {
      title: "Mental Health",
      description: "Take breaks and practice mindfulness daily",
      icon: Brain,
      color: "from-green-500 to-emerald-500",
      data: "Daily practice"
    },
    {
      title: "Nutrition Balance",
      description: "5-7 servings of fruits and vegetables",
      icon: BookOpen,
      color: "from-orange-500 to-yellow-500",
      data: "5-7 servings"
    },
    {
      title: "Social Connection",
      description: "Maintain meaningful relationships",
      icon: Users,
      color: "from-pink-500 to-rose-500",
      data: "Regular contact"
    }
  ];

  const educationalVideos = [
    {
      id: 1,
      title: "Understanding Diabetes Prevention",
      description: "Learn about risk factors and prevention strategies",
      thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400",
      duration: "12:30",
      views: "125K"
    },
    {
      id: 2,
      title: "Mental Health Awareness",
      description: "Recognizing signs and seeking help",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400",
      duration: "15:45",
      views: "98K"
    },
    {
      id: 3,
      title: "Healthy Cooking Tips",
      description: "Simple recipes for better nutrition",
      thumbnail: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400",
      duration: "20:15",
      views: "156K"
    },
    {
      id: 4,
      title: "Exercise for Beginners",
      description: "Safe and effective workout routines",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      duration: "18:20",
      views: "203K"
    }
  ];

  const quizzes = [
    {
      id: 1,
      title: "General Health Knowledge",
      questions: [
        {
          id: 1,
          question: "How many servings of fruits and vegetables should you eat daily?",
          options: ["3-4", "5-7", "8-10", "As many as possible"],
          correct: 1
        },
        {
          id: 2,
          question: "What is the recommended daily water intake?",
          options: ["4-6 glasses", "6-8 glasses", "8-10 glasses", "10+ glasses"],
          correct: 2
        },
        {
          id: 3,
          question: "How much exercise should adults get per week?",
          options: ["60 minutes", "90 minutes", "150 minutes", "200 minutes"],
          correct: 2
        }
      ]
    },
    {
      id: 2,
      title: "Mental Health Awareness",
      questions: [
        {
          id: 1,
          question: "What is a common sign of stress?",
          options: ["Increased energy", "Difficulty sleeping", "Better concentration", "Improved mood"],
          correct: 1
        },
        {
          id: 2,
          question: "When should you seek professional help for mental health?",
          options: ["Never", "Only in severe cases", "When symptoms persist", "Always"],
          correct: 2
        }
      ]
    }
  ];

  const handleQuizStart = (quiz) => {
    setSelectedQuiz(quiz);
    setQuizAnswers({});
    setQuizScore(null);
  };

  const handleAnswerSelect = (questionId, answerIndex) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleQuizSubmit = () => {
    if (!selectedQuiz) return;
    
    let correct = 0;
    selectedQuiz.questions.forEach(question => {
      if (quizAnswers[question.id] === question.correct) {
        correct++;
      }
    });
    
    const score = Math.round((correct / selectedQuiz.questions.length) * 100);
    setQuizScore(score);
  };

  const handleShare = (type, id) => {
    // In a real app, this would implement actual sharing functionality
    console.log(`Sharing ${type} with id ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Spreading Health Awareness
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Educational resources, interactive content, and awareness programs 
              to empower your health journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Infographics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Health Infographics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visual guides to help you understand key health concepts and practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infographics.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{info.title}</h3>
                <p className="text-gray-600 mb-4">{info.description}</p>
                <div className="text-3xl font-bold text-gray-800 mb-4">{info.data}</div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleShare('infographic', info.title)}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <Share2 className="h-5 w-5" />
                  </button>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Videos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Play className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Educational Videos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from expert health professionals through engaging video content
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {educationalVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4">
                      <Play className="h-8 w-8 text-gray-800" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600 mb-4">{video.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <TrendingUp className="h-4 w-4" />
                        <span>{video.views} views</span>
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleShare('video', video.id)}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                      >
                        <Share2 className="h-5 w-5" />
                      </button>
                      <button className="text-gray-500 hover:text-gray-700 transition-colors">
                        <ExternalLink className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quizzes Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Health Awareness Quizzes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Test your knowledge and learn more about health and wellness
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quizzes.map((quiz, index) => (
              <motion.div
                key={quiz.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{quiz.title}</h3>
                  <p className="text-gray-600 mb-6">{quiz.questions.length} Questions</p>
                  <button
                    onClick={() => handleQuizStart(quiz)}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Start Quiz
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz Modal */}
      {selectedQuiz && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedQuiz(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">{selectedQuiz.title}</h3>
              <button
                onClick={() => setSelectedQuiz(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            {!quizScore ? (
              <div className="space-y-6">
                {selectedQuiz.questions.map((question, qIndex) => (
                  <div key={question.id} className="border-b border-gray-200 pb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      {qIndex + 1}. {question.question}
                    </h4>
                    <div className="space-y-2">
                      {question.options.map((option, oIndex) => (
                        <label
                          key={oIndex}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={`question-${question.id}`}
                            checked={quizAnswers[question.id] === oIndex}
                            onChange={() => handleAnswerSelect(question.id, oIndex)}
                            className="text-green-600 focus:ring-green-500"
                          />
                          <span className="text-gray-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="flex space-x-4 pt-6">
                  <button
                    onClick={handleQuizSubmit}
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Submit Quiz
                  </button>
                  <button
                    onClick={() => setSelectedQuiz(null)}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quiz Completed!</h3>
                <p className="text-4xl font-bold text-green-600 mb-2">{quizScore}%</p>
                <p className="text-gray-600 mb-6">
                  {quizScore >= 80 ? "Excellent work!" : quizScore >= 60 ? "Good job!" : "Keep learning!"}
                </p>
                <button
                  onClick={() => {
                    setSelectedQuiz(null);
                    setQuizScore(null);
                    setQuizAnswers({});
                  }}
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-8 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default InformationAwareness;
