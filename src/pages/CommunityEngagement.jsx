import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Calendar, 
  MapPin, 
  Clock, 
  Heart, 
  Star,
  ChevronLeft,
  ChevronRight,
  User,
  MessageCircle,
  Share2
} from 'lucide-react';

const CommunityEngagement = () => {
  const [events, setEvents] = useState([]);
  const [stories, setStories] = useState([]);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Mock data - in real app, this would come from API
  useEffect(() => {
    const mockEvents = [
      {
        id: 1,
        name: "Free Health Camp",
        date: "2025-11-12",
        time: "9:00 AM - 5:00 PM",
        location: "Pune Community Center",
        description: "Basic health check-up and consultation for all age groups. Free blood pressure, diabetes, and BMI checks.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400",
        attendees: 150,
        maxAttendees: 200
      },
      {
        id: 2,
        name: "Nutrition Workshop",
        date: "2025-11-18",
        time: "2:00 PM - 4:00 PM",
        location: "Mumbai Health Hub",
        description: "Learn about balanced diets and fitness routines. Interactive cooking demonstrations and meal planning tips.",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400",
        attendees: 75,
        maxAttendees: 100
      },
      {
        id: 3,
        name: "Mental Health Awareness",
        date: "2025-11-25",
        time: "10:00 AM - 12:00 PM",
        location: "Delhi Wellness Center",
        description: "Understanding mental health and stress management. Expert talks and group activities.",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400",
        attendees: 90,
        maxAttendees: 120
      },
      {
        id: 4,
        name: "Vaccination Drive",
        date: "2025-12-02",
        time: "8:00 AM - 6:00 PM",
        location: "Bangalore Medical Center",
        description: "Free vaccination for children and adults. All major vaccines available with proper documentation.",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=400",
        attendees: 200,
        maxAttendees: 300
      }
    ];

    const mockStories = [
      {
        id: 1,
        name: "Priya Sharma",
        location: "Mumbai",
        story: "The health camp helped me detect diabetes early. Now I'm managing it well with proper diet and exercise. The community support has been incredible!",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100",
        rating: 5
      },
      {
        id: 2,
        name: "Rajesh Kumar",
        location: "Delhi",
        story: "The nutrition workshop changed my family's eating habits completely. My children are healthier and more active now. Thank you for the amazing guidance!",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
        rating: 5
      },
      {
        id: 3,
        name: "Anita Patel",
        location: "Pune",
        story: "The mental health awareness program helped me understand and support my daughter during her difficult times. The resources provided were life-changing.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
        rating: 5
      },
      {
        id: 4,
        name: "Suresh Reddy",
        location: "Bangalore",
        story: "The vaccination drive was so well organized. My entire family got vaccinated safely and efficiently. Great community service!",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
        rating: 5
      }
    ];

    setEvents(mockEvents);
    setStories(mockStories);
  }, []);

  const handleJoinEvent = (event) => {
    setSelectedEvent(event);
    setShowJoinModal(true);
  };

  const handleJoinSubmit = (e) => {
    e.preventDefault();
    // In real app, this would submit to API
    console.log('Joining event:', selectedEvent.name);
    setShowJoinModal(false);
    setSelectedEvent(null);
  };

  const nextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStoryIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Connecting Through Health Programs
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Join our community events, share success stories, and connect with others 
              on their health journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our community health programs and workshops
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Users className="h-4 w-4 text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">
                      {event.attendees}/{event.maxAttendees}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.name}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="h-5 w-5" />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="h-5 w-5" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="h-5 w-5" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{event.description}</p>
                  
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleJoinEvent(event)}
                      className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Join Event
                    </button>
                    <button className="bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps Integration */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find health events near you on our interactive map
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-200 rounded-2xl overflow-hidden h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">Interactive Map</h3>
              <p className="text-gray-500">Google Maps integration would be displayed here</p>
              <p className="text-sm text-gray-400 mt-2">
                Showing event locations across major cities
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Inspiring Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from our community members who have transformed their health
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              key={currentStoryIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto"
            >
              <div className="flex items-start space-x-6">
                <img
                  src={stories[currentStoryIndex]?.image}
                  alt={stories[currentStoryIndex]?.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {stories[currentStoryIndex]?.name}
                    </h3>
                    <div className="flex space-x-1">
                      {[...Array(stories[currentStoryIndex]?.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">{stories[currentStoryIndex]?.location}</p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    "{stories[currentStoryIndex]?.story}"
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={prevStory}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextStory}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            {/* Story Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStoryIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentStoryIndex ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Event Modal */}
      {showJoinModal && selectedEvent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowJoinModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-6">Join {selectedEvent.name}</h3>
            <form onSubmit={handleJoinSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Join Event
                </button>
                <button
                  type="button"
                  onClick={() => setShowJoinModal(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default CommunityEngagement;
