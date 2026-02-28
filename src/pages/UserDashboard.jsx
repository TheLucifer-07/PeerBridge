import React from "react";

const UserDashboard = ({ setCurrentPage }) => {
  const tutors = [
    { name: "Rahul Sharma", subject: "DBMS" },
    { name: "Sneha Reddy", subject: "DSA" },
    { name: "Arjun Patel", subject: "Machine Learning" },
  ];

  const discussions = [
    { title: "Understanding 3NF in DBMS", subject: "DBMS", replies: 12 },
    { title: "Best approach for Graph Problems?", subject: "DSA", replies: 18 },
    { title: "Overfitting vs Underfitting", subject: "ML", replies: 9 },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-24">

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Welcome back, <span className="text-indigo-500">Peer</span> 👋
          </h2>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Continue your learning journey. Explore shared resources or book a tutoring session.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => setCurrentPage("resources")}
              className="px-8 py-4 bg-indigo-600 rounded-xl font-semibold hover:bg-indigo-700 hover:scale-105 transition duration-300 shadow-lg"
            >
              Explore Resources →
            </button>
            <button
              onClick={() => setCurrentPage("tutors")}
              className="px-8 py-4 border border-gray-700 rounded-xl font-semibold hover:bg-gray-800 transition duration-300"
            >
              Find a Tutor
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
          <div className="bg-gray-900 p-8 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-indigo-500">257</h3>
            <p className="text-gray-400 mt-2">Active Students</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-indigo-500">56</h3>
            <p className="text-gray-400 mt-2">Students in Discussion</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-indigo-500">5</h3>
            <p className="text-gray-400 mt-2">New Messages</p>
          </div>
        </div>
        <div className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold">
              Available <span className="text-indigo-500">Tutors</span>
            </h3>
            <button
              onClick={() => setCurrentPage("tutors")}
              className="text-indigo-500 hover:text-indigo-400 text-sm"
            >
              View All →
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tutors.map((tutor, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-indigo-500 transition"
              >
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mb-4">
                  {tutor.name.charAt(0)}
                </div>
                <h4 className="font-semibold">{tutor.name}</h4>
                <p className="text-gray-400 text-sm">{tutor.subject}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold">
              Active <span className="text-indigo-500">Discussions</span>
            </h3>
            <button
              onClick={() => setCurrentPage("discussions")}
              className="text-indigo-500 hover:text-indigo-400 text-sm"
            >
              View All →
            </button>
          </div>
          <div className="space-y-6">
            {discussions.map((topic, index) => (
              <div
                key={index}
                onClick={() => setCurrentPage("discussions")}
                className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-indigo-500 transition cursor-pointer"
              >
                <h4 className="font-semibold mb-2">{topic.title}</h4>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>{topic.subject}</span>
                  <span>{topic.replies} replies</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;