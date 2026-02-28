import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import {
  BookOpenIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800 py-16 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            <span className="text-white">Peer</span>
            <span className="text-indigo-500">Bridge</span>
          </h2>
          <p className="text-gray-500">
            Bridging academic gaps through peer collaboration and shared knowledge.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li className="hover:text-indigo-500 cursor-pointer transition">Home</li>
            <li className="hover:text-indigo-500 cursor-pointer transition">Resources</li>
            <li className="hover:text-indigo-500 cursor-pointer transition">Tutors</li>
            <li className="hover:text-indigo-500 cursor-pointer transition">Discussions</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Core Features</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 hover:text-indigo-500 transition">
              <BookOpenIcon className="w-5 h-5" />
              Study Materials
            </li>
            <li className="flex items-center gap-3 hover:text-indigo-500 transition">
              <UserGroupIcon className="w-5 h-5" />
              Peer Tutoring
            </li>
            <li className="flex items-center gap-3 hover:text-indigo-500 transition">
              <ChatBubbleLeftRightIcon className="w-5 h-5" />
              Discussions
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Stay Connected</h3>
          <p className="text-gray-500 mb-4">
            Built for collaborative learning.
          </p>
          <div className="flex gap-4">

  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition cursor-pointer">
    <FaGithub className="text-white text-lg" />
  </div>
  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition cursor-pointer">
    <FaLinkedin className="text-white text-lg" />
  </div>
  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition cursor-pointer">
    <FaInstagram className="text-white text-lg" />
  </div>
</div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} PeerBridge. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;