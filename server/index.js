const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Mock data
const events = [
  {
    id: 1,
    name: "Free Health Camp",
    date: "2025-11-12",
    location: "Pune",
    description: "Basic health check-up and consultation for all age groups.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400"
  },
  {
    id: 2,
    name: "Nutrition Workshop",
    date: "2025-11-18",
    location: "Mumbai",
    description: "Learn about balanced diets and fitness routines.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400"
  },
  {
    id: 3,
    name: "Mental Health Awareness",
    date: "2025-11-25",
    location: "Delhi",
    description: "Understanding mental health and stress management.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400"
  },
  {
    id: 4,
    name: "Vaccination Drive",
    date: "2025-12-02",
    location: "Bangalore",
    description: "Free vaccination for children and adults.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400"
  }
];

const stories = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    story: "The health camp helped me detect diabetes early. Now I'm managing it well with proper diet and exercise.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi",
    story: "The nutrition workshop changed my family's eating habits. My children are healthier and more active now.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
  },
  {
    id: 3,
    name: "Anita Patel",
    location: "Pune",
    story: "The mental health awareness program helped me understand and support my daughter during her difficult times.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
  }
];

const quizzes = [
  {
    id: 1,
    title: "Nutrition Knowledge Quiz",
    questions: [
      {
        id: 1,
        question: "How many servings of fruits and vegetables should you eat daily?",
        options: ["2-3", "5-7", "8-10", "As many as possible"],
        correct: 1
      },
      {
        id: 2,
        question: "Which vitamin is essential for bone health?",
        options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
        correct: 2
      },
      {
        id: 3,
        question: "What is the recommended daily water intake?",
        options: ["4-6 glasses", "6-8 glasses", "8-10 glasses", "10+ glasses"],
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
        question: "How often should you take breaks during work?",
        options: ["Never", "Every 2-3 hours", "Only when tired", "Once a day"],
        correct: 1
      }
    ]
  }
];

const research = [
  {
    id: 1,
    title: "Breakthrough in Cancer Treatment",
    description: "New immunotherapy approach shows 85% success rate in early trials.",
    category: "Cancer Research",
    date: "2025-01-15",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400"
  },
  {
    id: 2,
    title: "AI-Powered Drug Discovery",
    description: "Machine learning algorithms accelerate drug development by 40%.",
    category: "AI in Healthcare",
    date: "2025-01-10",
    image: "https://images.unsplash.com/photo-1551601657-bc60ed4a3fcc?w=400"
  },
  {
    id: 3,
    title: "Universal Flu Vaccine",
    description: "New vaccine targets multiple flu strains with single shot.",
    category: "Vaccination",
    date: "2025-01-05",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400"
  }
];

// API Routes
app.get('/api/events', (req, res) => {
  res.json(events);
});

app.get('/api/stories', (req, res) => {
  res.json(stories);
});

app.get('/api/quizzes', (req, res) => {
  res.json(quizzes);
});

app.get('/api/research', (req, res) => {
  res.json(research);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form submission:', { name, email, message });
  res.json({ success: true, message: 'Thank you for your message!' });
});

app.post('/api/quiz/submit', (req, res) => {
  const { quizId, answers } = req.body;
  console.log('Quiz submission:', { quizId, answers });
  
  // Calculate score (mock)
  const score = Math.floor(Math.random() * 40) + 60; // Random score between 60-100
  res.json({ success: true, score, message: 'Quiz submitted successfully!' });
});

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Empowering Health API Server is running!' });
});

// Only start listening when this file is run directly (local dev).
// When deployed as a serverless function (Vercel), the platform will import
// this module and invoke the exported app without calling listen().
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export the Express app so platforms (like Vercel) can use it as a function.
module.exports = app;
