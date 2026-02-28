import React from "react";
import {
  BookOpenIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const Dashboard = ({ setCurrentPage })=> {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white">
      <div className="flex justify-center py-8">
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-white">Peer</span>
          <span className="text-indigo-500">Bridge</span>
        </h1>
      </div>
      <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
          Welcome to <span className="text-indigo-500">PeerBridge</span> 👋
        </h2>
        <p className="mt-6 text-xl text-gray-400 max-w-2xl">
          Connect with peers, share knowledge, and book tutoring sessions.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-6">
          <button onClick={() => setCurrentPage("home")} className="px-10 py-4 bg-indigo-600 text-white rounded-xl font-semibold shadow-xl hover:bg-indigo-700 hover:scale-105 transition duration-300 flex items-center justify-center gap-2">
            Get Started
            <span className="text-xl">→</span>
          </button>
          <button className="px-10 py-4 border border-gray-600 text-gray-300 rounded-xl font-semibold hover:bg-gray-800 transition duration-300">
            Watch Demo
          </button>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl w-full">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-indigo-500">10K+</h3>
            <p className="text-gray-400 mt-2">Active Students</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-indigo-500">15K+</h3>
            <p className="text-gray-400 mt-2">Doubts Clarified</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-indigo-500">25K+</h3>
            <p className="text-gray-400 mt-2">Resources Shared</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-indigo-500">98.7%</h3>
            <p className="text-gray-400 mt-2">Satisfaction Rate</p>
          </div>
        </div>

      </section>
      <section className="py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            How <span className="text-indigo-500">PeerBridge</span> Works
          </h2>
          <p className="text-gray-400 mt-4">
            A simple process to enhance collaborative learning.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          <div className="p-8 rounded-2xl bg-gray-900 hover:bg-gray-800 transition text-center hover:-translate-y-2 transform duration-300">
            <BookOpenIcon className="w-12 h-12 text-indigo-500 mx-auto mb-6" />
            <h3 className="text-xl font-semibold mb-3">Share Resources</h3>
            <p className="text-gray-400">
              Upload and browse subject-wise study materials.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-900 hover:bg-gray-800 transition text-center hover:-translate-y-2 transform duration-300">
            <UserGroupIcon className="w-12 h-12 text-indigo-500 mx-auto mb-6" />
            <h3 className="text-xl font-semibold mb-3">Book a Tutor</h3>
            <p className="text-gray-400">
              Schedule peer tutoring sessions easily.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-900 hover:bg-gray-800 transition text-center hover:-translate-y-2 transform duration-300">
            <ChatBubbleLeftRightIcon className="w-12 h-12 text-indigo-500 mx-auto mb-6" />
            <h3 className="text-xl font-semibold mb-3">Collaborate</h3>
            <p className="text-gray-400">
              Discuss doubts and solve problems together.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-900 hover:bg-gray-800 transition text-center hover:-translate-y-2 transform duration-300">
            <StarIcon className="w-12 h-12 text-indigo-500 mx-auto mb-6" />
            <h3 className="text-xl font-semibold mb-3">Rate & Improve</h3>
            <p className="text-gray-400">
              Provide feedback to maintain quality learning.
            </p>
          </div>
        </div>
      </section>
<section className="py-24 px-6 bg-black">

  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold">
      🔥 Trending <span className="text-indigo-500">Subjects</span>
    </h2>
    <p className="text-gray-400 mt-4">
      Explore the most discussed and shared academic subjects.
    </p>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
    <div className="p-8 bg-gray-900 rounded-2xl hover:bg-gray-800 transition duration-300 hover:-translate-y-2 transform">
      <h3 className="text-2xl font-semibold mb-4 text-indigo-500">
        DBMS
      </h3>
      <p className="text-gray-400">
        Database Management Systems focus on storing, managing, and retrieving structured data efficiently using systems like MySQL and PostgreSQL.
      </p>
    </div>
    <div className="p-8 bg-gray-900 rounded-2xl hover:bg-gray-800 transition duration-300 hover:-translate-y-2 transform">
      <h3 className="text-2xl font-semibold mb-4 text-indigo-500">
        DSA
      </h3>
      <p className="text-gray-400">
        Data Structures and Algorithms involve organizing data efficiently and solving computational problems using optimized techniques.
      </p>
    </div>
    <div className="p-8 bg-gray-900 rounded-2xl hover:bg-gray-800 transition duration-300 hover:-translate-y-2 transform">
      <h3 className="text-2xl font-semibold mb-4 text-indigo-500">
        Operating Systems
      </h3>
      <p className="text-gray-400">
        Operating Systems manage hardware resources and provide services for applications, including process management and memory allocation.
      </p>
    </div>
    <div className="p-8 bg-gray-900 rounded-2xl hover:bg-gray-800 transition duration-300 hover:-translate-y-2 transform">
      <h3 className="text-2xl font-semibold mb-4 text-indigo-500">
        Machine Learning
      </h3>
      <p className="text-gray-400">
        Machine Learning enables systems to learn patterns from data and make predictions or decisions without explicit programming.
      </p>
    </div>
  </div>
</section> 
<section className="py-24 px-6 bg-gray-950">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold">
      Trusted by <span className="text-indigo-500">Students</span>
    </h2>
    <p className="text-gray-400 mt-4">
      See what our community says about PeerBridge.
    </p>
  </div>
  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    <div className="bg-gray-900 p-8 rounded-2xl hover:bg-gray-800 transition duration-300">
      <p className="text-gray-300 mb-6">
        “PeerBridge helped me understand DBMS concepts before my exams. 
        The peer tutoring sessions were super helpful!”
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center font-semibold">
          AK
        </div>
        <div>
          <h4 className="font-semibold">Anil Kumar</h4>
          <p className="text-gray-500 text-sm">3rd Year CSE</p>
        </div>
      </div>
    </div>
    <div className="bg-gray-900 p-8 rounded-2xl hover:bg-gray-800 transition duration-300">
      <p className="text-gray-300 mb-6">
        “I shared my DSA notes and received amazing feedback. 
        It feels great to help others while learning.”
      </p>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center font-semibold">
          SR
        </div>
        <div>
          <h4 className="font-semibold">Sneha Reddy</h4>
          <p className="text-gray-500 text-sm">2nd Year IT</p>
        </div>
      </div>
    </div>
    <div className="bg-gray-900 p-8 rounded-2xl hover:bg-gray-800 transition duration-300">
      <p className="text-gray-300 mb-6">
        “The discussion board is my favorite feature. 
        Doubts get solved faster than WhatsApp groups!”
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center font-semibold">
          RP
        </div>
        <div>
          <h4 className="font-semibold">Rahul Prasad</h4>
          <p className="text-gray-500 text-sm">Final Year CSE</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="py-24 px-6 bg-gradient-to-r from-indigo-600 to-purple-600">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold text-white">
      Ready to Bridge Your Learning Gap?
    </h2>
    <p className="mt-6 text-lg text-indigo-100">
      Join thousands of students collaborating, sharing resources, and improving together.
    </p>
    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
      <button className="px-10 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-200 transition duration-300">
        Get Started Now →
      </button>
      <button className="px-10 py-4 border border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-600 transition duration-300">
        Explore Subjects
      </button>
    </div>
  </div>
</section>
    </div>
  );
};

export default Dashboard;