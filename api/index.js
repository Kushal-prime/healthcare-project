const express = require('express');
const cors = require('cors');

const app = express();

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
  }
];

const stories = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    story: "The health camp helped me detect diabetes early. Now I'm managing it well with proper diet and exercise.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100"
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
  }
];

// API Routes
app.get('/api/events', (req, res) => {
  res.json(events);
});

app.get('/api/stories', (req, res) => {
  res.json(stories);
});

app.get('/api/research', (req, res) => {
  res.json(research);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form submission:', { name, email, message });
  res.json({ success: true, message: 'Thank you for your message!' });
});

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'Empowering Health API is running on Vercel!' });
});

module.exports = app;
