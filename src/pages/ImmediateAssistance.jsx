import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Ambulance, 
  Shield, 
  MapPin, 
  AlertTriangle,
  Clock,
  User,
  Mail,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';

const ImmediateAssistance = () => {
  const [copiedNumber, setCopiedNumber] = useState(null);

  const ambulanceNumbers = [
    { region: "National Emergency", number: "108", description: "All India Emergency Services" },
    { region: "Delhi", number: "102", description: "Delhi Ambulance Services" },
    { region: "Mumbai", number: "1298", description: "Mumbai Emergency Response" },
    { region: "Bangalore", number: "108", description: "Karnataka Emergency Services" },
    { region: "Chennai", number: "108", description: "Tamil Nadu Emergency Services" },
    { region: "Kolkata", number: "108", description: "West Bengal Emergency Services" },
    { region: "Hyderabad", number: "108", description: "Telangana Emergency Services" },
    { region: "Pune", number: "108", description: "Maharashtra Emergency Services" }
  ];

  const governmentHelplines = [
    { name: "National Health Helpline", number: "1800-180-1104", description: "24/7 Health Information" },
    { name: "Mental Health Helpline", number: "1800-599-0019", description: "Crisis Support & Counseling" },
    { name: "Women Helpline", number: "181", description: "Women Safety & Support" },
    { name: "Child Helpline", number: "1098", description: "Child Protection Services" },
    { name: "Senior Citizen Helpline", number: "14567", description: "Elderly Care Support" },
    { name: "Disaster Management", number: "108", description: "Natural Disaster Response" },
    { name: "Police Emergency", number: "100", description: "Law Enforcement" },
    { name: "Fire Emergency", number: "101", description: "Fire & Rescue Services" }
  ];

  const emergencyTips = [
    {
      title: "Cardiac Emergency",
      tips: [
        "Call 108 immediately",
        "Perform CPR if trained",
        "Keep patient calm and still",
        "Loosen tight clothing"
      ]
    },
    {
      title: "Accident Response",
      tips: [
        "Ensure scene safety first",
        "Call emergency services",
        "Don't move injured person unless necessary",
        "Apply pressure to stop bleeding"
      ]
    },
    {
      title: "Mental Health Crisis",
      tips: [
        "Call mental health helpline",
        "Stay with the person",
        "Listen without judgment",
        "Remove any harmful objects"
      ]
    },
    {
      title: "Poisoning Emergency",
      tips: [
        "Call poison control center",
        "Don't induce vomiting unless instructed",
        "Keep container of substance",
        "Note time of ingestion"
      ]
    }
  ];

  const handleCopyNumber = (number) => {
    navigator.clipboard.writeText(number);
    setCopiedNumber(number);
    setTimeout(() => setCopiedNumber(null), 2000);
  };

  const handleCall = (number) => {
    window.open(`tel:${number}`, '_self');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Emergency Helplines at Your Fingertips
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              Quick access to emergency services, government helplines, and hospital locations 
              when you need them most.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Emergency Alert Banner */}
      <section className="bg-red-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center space-x-3"
          >
            <AlertTriangle className="h-6 w-6 animate-pulse" />
            <span className="text-lg font-semibold">
              In case of emergency, call 108 immediately
            </span>
            <button
              onClick={() => handleCall('108')}
              className="bg-white text-red-600 px-4 py-2 rounded-lg font-bold hover:bg-red-50 transition-colors"
            >
              Call Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Ambulance Numbers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Ambulance className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ambulance Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Regional ambulance numbers for immediate medical assistance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ambulanceNumbers.map((service, index) => (
              <motion.div
                key={service.region}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-500"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{service.region}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Ambulance className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-red-600">{service.number}</div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleCall(service.number)}
                      className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors"
                      title="Call"
                    >
                      <Phone className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleCopyNumber(service.number)}
                      className="bg-gray-100 text-gray-700 p-2 rounded-lg hover:bg-gray-200 transition-colors"
                      title="Copy"
                    >
                      {copiedNumber === service.number ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Helplines */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Government Helplines</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Official government support services available 24/7
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {governmentHelplines.map((helpline, index) => (
              <motion.div
                key={helpline.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{helpline.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{helpline.description}</p>
                    <div className="text-2xl font-bold text-blue-600">{helpline.number}</div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleCall(helpline.number)}
                      className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                      title="Call"
                    >
                      <Phone className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleCopyNumber(helpline.number)}
                      className="bg-gray-200 text-gray-700 p-2 rounded-lg hover:bg-gray-300 transition-colors"
                      title="Copy"
                    >
                      {copiedNumber === helpline.number ? (
                        <Check className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Tips */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Emergency Response Tips</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important guidelines for different emergency situations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyTips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{tip.title}</h3>
                <ul className="space-y-2">
                  {tip.tips.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Nearest Hospitals</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Locate hospitals and medical facilities in your area
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
              <h3 className="text-2xl font-bold text-gray-600 mb-2">Hospital Locator Map</h3>
              <p className="text-gray-500 mb-4">Interactive map showing nearby hospitals and medical facilities</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span>Emergency Rooms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span>General Hospitals</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span>Specialty Clinics</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Need Immediate Help?</h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Don't hesitate to reach out. Emergency services are available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => handleCall('108')}
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Phone className="h-6 w-6" />
                <span>Call Emergency (108)</span>
              </button>
              <button
                onClick={() => handleCall('1800-180-1104')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <User className="h-6 w-6" />
                <span>Health Helpline</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ImmediateAssistance;
