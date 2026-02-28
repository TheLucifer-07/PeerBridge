import React from "react";

const Tutors = () => {
  const tutorList = [
    { name: "Rahul Sharma", subject: "Mathematics", rating: 4.8, available: "Available Today" },
    { name: "Ananya Reddy", subject: "Physics", rating: 4.7, available: "Available Tomorrow" },
    { name: "Kiran Kumar", subject: "Programming", rating: 4.9, available: "Available Now" },
    { name: "Sneha Verma", subject: "Chemistry", rating: 4.6, available: "Available Today" },
    { name: "Arjun Patel", subject: "Biology", rating: 4.8, available: "Available Tomorrow" },
    { name: "Megha Rao", subject: "English", rating: 4.7, available: "Available Now" },
    { name: "Vikram Singh", subject: "Data Structures", rating: 4.9, available: "Available Today" },
    { name: "Priya Nair", subject: "Machine Learning", rating: 4.8, available: "Available Now" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white px-8 pb-20">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold">
          Meet Our <span className="text-indigo-500">Tutors</span>
        </h2>
        <p className="text-gray-400 mt-4">
          Connect with top-performing students and book peer tutoring sessions.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

        {tutorList.map((tutor, index) => (
          <div
            key={index}
            className="bg-slate-900/70 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-indigo-500/20 transition duration-300 hover:-translate-y-2 text-center flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6">
              {tutor.name.charAt(0)}
            </div>
            <h3 className="text-xl font-semibold mb-1">
              {tutor.name}
            </h3>
            <span className="bg-indigo-600/20 text-indigo-400 text-sm px-3 py-1 rounded-full mb-3">
              {tutor.subject}
            </span>
            <p className="text-yellow-400 mb-2">
              ⭐ {tutor.rating}
            </p>
            <span className="bg-green-600/20 text-green-400 text-xs px-3 py-1 rounded-full mb-6">
              {tutor.available}
            </span>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-lg font-medium transition">
              Book Session
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutors;