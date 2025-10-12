# Empowering Health - Community-Focused Digital Platform

A comprehensive multi-page React web application designed to promote health awareness, community engagement, and immediate assistance. This project demonstrates modern web development practices with a focus on user experience and community health.

## 🎯 Project Overview

**Empowering Health** is a demonstration project for a college presentation that showcases how technology can be used to create a centralized health platform. The application brings together preventive healthcare, community engagement, and immediate assistance under one roof.

### Key Features

- **Preventive Healthcare**: Interactive charts, nutrition guides, and health quizzes
- **Community Engagement**: Event listings, success stories, and interactive maps
- **Immediate Assistance**: Emergency helplines, government contacts, and hospital locator
- **Information & Awareness**: Educational content, videos, and interactive quizzes
- **Research Updates**: Latest healthcare breakthroughs and pharmaceutical innovations
- **Contact & About**: Team information and contact forms

## 🏗️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework for styling
- **Framer Motion** - Animation library for smooth transitions
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library
- **Recharts** - Data visualization library

### Backend
- **Express.js** - Lightweight web framework
- **CORS** - Cross-origin resource sharing
- **Mock Data** - JSON-based data simulation

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd empowering-health
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Start the backend server** (in a new terminal)
   ```bash
   npm run server
   ```

5. **Or run both simultaneously**
   ```bash
   npm run dev:full
   ```

### Available Scripts

- `npm run dev` - Start the frontend development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run server` - Start the Express.js backend server
- `npm run dev:full` - Run both frontend and backend simultaneously

## 📁 Project Structure

```
empowering-health/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Navbar.jsx     # Navigation component
│   │   └── Footer.jsx     # Footer component
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Landing page
│   │   ├── PreventiveHealthcare.jsx
│   │   ├── CommunityEngagement.jsx
│   │   ├── ImmediateAssistance.jsx
│   │   ├── InformationAwareness.jsx
│   │   ├── AdvancingHealthcare.jsx
│   │   └── ContactAbout.jsx
│   ├── App.jsx            # Main App component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── server/                # Backend server
│   ├── index.js          # Express server
│   └── package.json      # Server dependencies
├── tailwind.config.js     # TailwindCSS configuration
└── package.json          # Project dependencies
```

## 🌐 Pages Overview

### 1. Home Page
- Hero banner with animated background
- Three main navigation cards
- Statistics and features section
- Call-to-action sections

### 2. Preventive Healthcare
- Interactive vaccination charts using Recharts
- Collapsible nutrition and exercise guides
- Health quizzes with scoring system
- Animated UI elements

### 3. Community Engagement
- Event cards with registration functionality
- Interactive map integration (mock)
- Success stories carousel
- Join event modal forms

### 4. Immediate Assistance
- Emergency helpline numbers with call functionality
- Government contact information
- Emergency response tips
- Hospital locator map (mock)

### 5. Information & Awareness
- Health infographics with hover effects
- Educational video gallery
- Interactive quizzes
- Share functionality (mock)

### 6. Advancing Healthcare
- Research update cards
- Timeline carousel
- Category filtering
- Impact statistics

### 7. Contact & About
- Team member profiles
- Contact form with validation
- Mission and values section
- Office hours and contact information

## 🎨 Design Features

- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Smooth Animations**: Framer Motion for page transitions and micro-interactions
- **Modern UI**: Clean, professional design with gradient backgrounds
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Performance**: Optimized images and lazy loading

## 🔧 Backend API

The Express.js server provides mock API endpoints:

- `GET /api/events` - Community events data
- `GET /api/stories` - Success stories
- `GET /api/quizzes` - Quiz questions
- `GET /api/research` - Research updates
- `POST /api/contact` - Contact form submissions
- `POST /api/quiz/submit` - Quiz score submissions

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting platform

### Backend (Heroku/Railway)
1. Navigate to the server directory: `cd server`
2. Deploy using your preferred platform

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a demonstration project, but contributions are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is created for educational purposes and demonstration.

## 🙏 Acknowledgments

- Icons by Lucide React
- Images from Unsplash
- Charts by Recharts
- Animations by Framer Motion

---

**Empowering Health** - Building healthier communities through technology, awareness, and innovation.
