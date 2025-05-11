import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

export const Landing = (): JSX.Element => {
  const scrollToFeatures = () => {
    document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col">
        <div className="absolute inset-0 overflow-hidden z-0">
          <img
            src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 backdrop-blur-sm bg-white/30" />
        </div>

        <nav className="relative z-10 bg-white/80 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                className="w-[50px] h-[50px] object-cover"
                alt="Bloom academy logo"
                src="/bloom-academy-logo-2.png"
              />
              <img
                className="w-[94px] h-[53px] object-cover"
                alt="New project"
                src="/new-project-1.png"
              />
            </div>
            <div className="flex items-center gap-4">
              <Link to="/dashboard">
                <Button variant="outline" className="mr-4">Go to Dashboard</Button>
              </Link>
              <Button className="bg-[#375b28] hover:bg-[#375b28]/90">Get Started</Button>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-20 flex-1 flex items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center w-full"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Personalized Learning Journey
              <br />
              <span className="text-[#375b28]">Just for You</span>
            </h1>
            <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
              Upload your materials, discover your learning style, and get a customized learning plan based on Bloom's Taxonomy.
            </p>
            <Button 
              onClick={scrollToFeatures}
              className="bg-[#375b28] hover:bg-[#375b28]/90 text-white px-8 py-6 text-lg"
            >
              Learn More
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
            onClick={scrollToFeatures}
          >
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 p-8 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-[#375b28]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <img className="w-8 h-8" alt="Assessment icon" src="/frame-6.svg" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Assessment</h3>
              <p className="text-gray-600">Understand your learning style and current knowledge level through our adaptive assessment.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 p-8 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-[#375b28]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <img className="w-8 h-8" alt="Customize icon" src="/frame-13.svg" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Custom Roadmap</h3>
              <p className="text-gray-600">Get a personalized learning plan that adapts to your pace and preferences.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 p-8 rounded-lg text-center"
            >
              <div className="w-16 h-16 bg-[#375b28]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <img className="w-8 h-8" alt="Progress icon" src="/frame-10.svg" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Track Progress</h3>
              <p className="text-gray-600">Monitor your advancement through interactive dashboards and detailed analytics.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#375b28]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Learning Experience?</h2>
          <Link to="/dashboard">
            <Button className="bg-white text-[#375b28] hover:bg-gray-100 px-8 py-6 text-lg">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img
                className="w-[50px] h-[50px] object-cover"
                alt="Bloom academy logo"
                src="/bloom-academy-logo-2.png"
              />
              <span className="text-lg font-semibold">Bloom Academy</span>
            </div>
            <div className="text-gray-400">
              © 2024 Bloom Academy. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};