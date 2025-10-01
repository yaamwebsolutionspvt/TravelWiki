import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  CheckCircle,
  Users,
  Compass,
  Leaf,
  Award,
  MapPin,
  Phone,
  Mail,
  Star,
  Shield,
  Heart,
  Mountain  
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutUs() {
  const stats = [
    { number: '10+', label: 'Years Experience', icon: <Award className="w-6 h-6" /> },
    { number: '5000+', label: 'Happy Travelers', icon: <Users className="w-6 h-6" /> },
    { number: '500+', label: 'Tours Completed', icon: <Compass className="w-6 h-6" /> },
    { number: '4.9/5', label: 'Customer Rating', icon: <Star className="w-6 h-6" /> },
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Trust & Safety',
      description: 'Your safety is our priority. All our tours are conducted with licensed guides and verified accommodations.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Personalized Service',
      description: 'Every traveler is unique. We craft experiences that match your interests, pace, and preferences.',
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Sustainable Tourism',
      description: 'We support local communities and practice eco-friendly tourism to preserve Kashmir\'s natural beauty.',
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: 'Local Expertise',
      description: 'Born and raised in Kashmir, our team knows every hidden gem and authentic experience.',
    },
  ];

  const teamMembers = [
    {
      name: 'Amir Yosuf',
      role: 'Founder & CEO',
      bio: 'Born in Shopian, Kashmir, Amir Yosuf founded Kashmir Tourism Travel Wiki after witnessing firsthand the transformative power of tourism. He believes in sharing Kashmir’s beauty responsibly.',
      expertise: ['Kashmir Tours', 'Cultural Experiences', 'Luxury Travel'],
    },
    {
      name: 'Meera Singh',
      role: 'Head of Operations',
      bio: 'Adventure enthusiast with expertise in Ladakh expeditions and trekking routes.',
      expertise: ['Ladakh Tours', 'Adventure Sports', 'Trekking'],
    },
    {
      name: 'Rashid Ahmad',
      role: 'Senior Tour Guide',
      bio: 'Multi-lingual guide with deep knowledge of Kashmir history and hidden destinations.',
      expertise: ['Historical Tours', 'Photography Tours', 'Local Culture'],
    },
    {
      name: 'Priya Sharma',
      role: 'Customer Experience Manager',
      bio: 'Dedicated to ensuring every traveler has a seamless and memorable journey.',
      expertise: ['Customer Service', 'Trip Planning', 'Special Requests'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Kashmir Tourism Travel Wiki | Leading Kashmir Tour Operator Since 2015 | Local Experts</title>
        <meta
          name="description"
          content="Kashmir Tourism Travel Wiki - Leading Kashmir tour operator with 10+ years experience. Local experts providing authentic Kashmir & Ladakh tours, honeymoon packages, family trips. 5000+ happy customers, best prices, responsible tourism. Based in Bijbihara, J&K."
        />
        <link rel="canonical" href="/about-us" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white overflow-x-hidden w-full pt-20">
        {/* Hero Section with Background Pattern */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-emerald-100 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-20 md:py-24">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Kashmir Tourism Travel Wiki
                <span className="block text-3xl font-medium text-emerald-600 mt-4">
                  Your Gateway to Paradise on Earth
                </span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Since 2015, we've been crafting unforgettable journeys through Kashmir, Ladakh, and Jammu.
                As local experts, we don't just show you places – we share our home with you.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.section
          className="py-16 bg-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Our Story Section */}
        <section className="py-16 bg-gradient-to-r from-emerald-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <p>
                    Founded in 2015 in the heart of Bijbihara, Kashmir Tourism Travel Wiki began as a
                    dream to share the untold beauty of Kashmir with the world. What started as a small
                    family business has grown into one of Kashmir's most trusted travel companies.
                  </p>
                  <p>
                    Our founder, Amir Yousf, a native of Kashmir, witnessed how tourism could transform
                    lives while preserving cultural heritage. This vision drives us to create experiences
                    that benefit both travelers and local communities.
                  </p>
                  <p>
                    Today, we're proud to have helped over 5,000 travelers discover the magic of Kashmir,
                    from the floating gardens of Dal Lake to the snow-capped peaks of Gulmarg, and the
                    mystical landscapes of Ladakh.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Facts</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <span>Government registered tour operator (License: JK/TRV/2015)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <span>Member of Kashmir Tourism Alliance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <span>24/7 emergency support in multiple languages</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                      <span>Eco-certified sustainable tourism practices</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide every journey we create and every interaction we have
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-emerald-600 mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Local experts passionate about creating unforgettable Kashmir experiences
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-6">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 text-center mb-1">{member.name}</h3>
                    <p className="text-emerald-600 text-center mb-4">{member.role}</p>
                    <p className="text-gray-700 text-sm mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, i) => (
                        <span key={i} className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Enhanced */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Travel With Us?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the difference of traveling with true Kashmir insiders              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Local Connections',
                  description: 'Access exclusive experiences through our deep local network - from private shikara rides to home-cooked Wazwan feasts.',
                  features: ['Hidden gems only locals know', 'Authentic cultural experiences', 'Direct support to communities'],
                },
                {
                  title: 'Tailored Journeys',
                  description: 'Every trip is customized to your dreams. Whether adventure, romance, or relaxation, we craft your perfect Kashmir story.',
                  features: ['Flexible itineraries', 'Personal travel consultant', 'Special dietary accommodations'],
                },
                {
                  title: 'Peace of Mind',
                  description: 'Travel worry-free with our comprehensive support, verified partners, and transparent pricing with no hidden costs.',
                  features: ['24/7 emergency support', 'Best price guarantee', 'Instant booking confirmation'],
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-b from-white to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-700 mb-6">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">What Our Travelers Say</h2>
              <p className="text-xl opacity-90">Join thousands of happy travelers who explored Kashmir with us</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Aarav Sharma',
                  location: 'Delhi, India',
                  text: 'Our honeymoon in Kashmir was magical! The team arranged everything perfectly, from the houseboat stay to the Gulmarg gondola ride. Truly unforgettable!',
                  rating: 5,
                  package: 'Honeymoon Package',
                },
                {
                  name: 'Rajesh Patel',
                  location: 'Mumbai, India',
                  text: 'Best family vacation ever! Kids loved the pony rides in Pahalgam. The guides were knowledgeable and patient. Will definitely book again!',
                  rating: 5,
                  package: 'Family Tour',
                },
                {
                  name: 'Priya Iyer',
                  location: 'Chennai, India',
                  text: 'The Ladakh expedition exceeded all expectations. Professional team, breathtaking landscapes, and seamless logistics. Highly recommended!',
                  rating: 5,
                  package: 'Ladakh Adventure',
                },
                {
                  name: 'Rohit Verma',
                  location: 'Jaipur, India',
                  text: 'Wonderful experience! The team took care of every detail, from hotels to local sightseeing. Made our trip stress-free and memorable.',
                  rating: 5,
                  package: 'Golden Triangle Tour',
                },
                {
                  name: 'Neha Kapoor',
                  location: 'Bangalore, India',
                  text: 'Absolutely loved the Kerala backwaters experience. Houseboat stay, food, and hospitality were beyond expectations. A must-try holiday!',
                  rating: 5,
                  package: 'Kerala Backwaters',
                },
              ]
                .map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="mb-4 italic">"{testimonial.text}"</p>
                    <div className="border-t border-white/20 pt-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm opacity-80">{testimonial.location}</p>
                      <p className="text-sm mt-1 opacity-70">{testimonial.package}</p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl p-12">
              <motion.div
                className="max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Commitment to You</h2>
                <div className="space-y-6 text-lg text-gray-700">
                  <p>
                    At Kashmir Tourism Travel Wiki, we're more than just a tour operator – we're your
                    friends in Kashmir. Every journey we create is infused with our love for this land
                    and our commitment to sharing its beauty responsibly.
                  </p>
                  <p>
                    We pledge to provide authentic experiences that respect local culture, support
                    communities, and preserve the natural wonders of Kashmir for future generations.
                    Your trust is our most valuable asset, and we work tirelessly to exceed your
                    expectations.
                  </p>
                  <div className="mt-8">
                    <Link
                      to="/packages-listing"
                      className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl"
                    >
                      Explore Our Packages
                      <Compass className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600">Ready to start your Kashmir adventure?</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                <p className="text-gray-600">
                  Main Office: Bijbihara<br />
                  Anantnag, J&K 192124<br />
                  India
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                <p className="text-gray-600">
                  +91 8899971960<br />
                  +91 8899971960<br />
                  Mon-Sun: 7AM-11PM IST
                </p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mb-4">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                <p className="text-gray-600">
                  info@travelwiki.in<br />
                  support@kashmirtravelwiki.org.in<br />
                  24/7 Support Available
                </p>
              </motion.div>
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
              >
                Contact Us Now
                <Phone className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
              <p className="text-xl text-gray-600">Honored for excellence in Kashmir tourism</p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { year: '2023', title: 'Best Tour Operator', org: 'Kashmir Tourism Board' },
                { year: '2022', title: 'Excellence in Service', org: 'TripAdvisor' },
                { year: '2021', title: 'Sustainable Tourism', org: 'Green Travel Initiative' },
                { year: '2020', title: 'Customer Choice Award', org: 'Travel Excellence' },
              ].map((award, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <Award className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                    <p className="text-2xl font-bold text-gray-900">{award.year}</p>
                    <p className="font-semibold text-gray-800 mt-2">{award.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{award.org}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}