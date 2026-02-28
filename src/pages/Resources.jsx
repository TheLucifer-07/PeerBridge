import { useState } from "react";

const Resources = () => {
  const resourcesData = [
    // DBMS
    { id: 1, title: "DBMS Normalization Notes", subject: "DBMS", author: "Rahul", downloads: 120, rating: 4.5 },
    { id: 2, title: "SQL Joins Explained", subject: "DBMS", author: "Sneha", downloads: 95, rating: 4.4 },
    { id: 3, title: "ER Diagram Guide", subject: "DBMS", author: "Arjun", downloads: 140, rating: 4.6 },
    { id: 4, title: "Transactions & ACID", subject: "DBMS", author: "Priya", downloads: 110, rating: 4.7 },
    { id: 5, title: "Indexing in Databases", subject: "DBMS", author: "Kiran", downloads: 88, rating: 4.3 },
    { id: 6, title: "DBMS Interview Questions", subject: "DBMS", author: "Megha", downloads: 160, rating: 4.8 },

    // DSA
    { id: 7, title: "Sorting Algorithms", subject: "DSA", author: "Rahul", downloads: 210, rating: 4.8 },
    { id: 8, title: "Linked List Guide", subject: "DSA", author: "Sneha", downloads: 134, rating: 4.6 },
    { id: 9, title: "Stack & Queue Notes", subject: "DSA", author: "Arjun", downloads: 175, rating: 4.7 },
    { id: 10, title: "Graph Algorithms", subject: "DSA", author: "Priya", downloads: 189, rating: 4.9 },
    { id: 11, title: "Dynamic Programming Basics", subject: "DSA", author: "Kiran", downloads: 142, rating: 4.5 },
    { id: 12, title: "Binary Trees Explained", subject: "DSA", author: "Megha", downloads: 155, rating: 4.6 },

    // Python
    { id: 13, title: "Python OOPS Guide", subject: "Python", author: "Rahul", downloads: 98, rating: 4.3 },
    { id: 14, title: "Decorators in Python", subject: "Python", author: "Sneha", downloads: 120, rating: 4.6 },
    { id: 15, title: "File Handling Notes", subject: "Python", author: "Arjun", downloads: 102, rating: 4.4 },
    { id: 16, title: "Python Interview Questions", subject: "Python", author: "Priya", downloads: 180, rating: 4.8 },
    { id: 17, title: "List Comprehension Guide", subject: "Python", author: "Kiran", downloads: 89, rating: 4.2 },
    { id: 18, title: "Exception Handling Notes", subject: "Python", author: "Megha", downloads: 95, rating: 4.3 },

    // OS
    { id: 19, title: "Deadlock Explained", subject: "OS", author: "Rahul", downloads: 76, rating: 4.6 },
    { id: 20, title: "CPU Scheduling", subject: "OS", author: "Sneha", downloads: 130, rating: 4.7 },
    { id: 21, title: "Paging & Segmentation", subject: "OS", author: "Arjun", downloads: 115, rating: 4.5 },
    { id: 22, title: "Process Management", subject: "OS", author: "Priya", downloads: 92, rating: 4.4 },
    { id: 23, title: "Virtual Memory Notes", subject: "OS", author: "Kiran", downloads: 108, rating: 4.6 },
    { id: 24, title: "OS Interview Questions", subject: "OS", author: "Megha", downloads: 150, rating: 4.8 },

    // ML
    { id: 25, title: "Linear Regression Basics", subject: "ML", author: "Rahul", downloads: 185, rating: 4.7 },
    { id: 26, title: "Classification Algorithms", subject: "ML", author: "Sneha", downloads: 172, rating: 4.6 },
    { id: 27, title: "Overfitting Guide", subject: "ML", author: "Arjun", downloads: 143, rating: 4.5 },
    { id: 28, title: "KNN Explained", subject: "ML", author: "Priya", downloads: 132, rating: 4.4 },
    { id: 29, title: "Neural Networks Intro", subject: "ML", author: "Kiran", downloads: 210, rating: 4.9 },
    { id: 30, title: "ML Interview Prep", subject: "ML", author: "Megha", downloads: 160, rating: 4.8 },

    // CN
    { id: 31, title: "TCP/IP Stack", subject: "CN", author: "Rahul", downloads: 150, rating: 4.4 },
    { id: 32, title: "OSI Model Explained", subject: "CN", author: "Sneha", downloads: 135, rating: 4.5 },
    { id: 33, title: "Subnetting Guide", subject: "CN", author: "Arjun", downloads: 90, rating: 4.3 },
    { id: 34, title: "HTTP vs HTTPS", subject: "CN", author: "Priya", downloads: 112, rating: 4.6 },
    { id: 35, title: "Network Security Basics", subject: "CN", author: "Kiran", downloads: 125, rating: 4.7 },
    { id: 36, title: "CN Interview Questions", subject: "CN", author: "Megha", downloads: 170, rating: 4.8 },
  ];

  const subjects = ["All", "DBMS", "DSA", "Python", "OS", "ML", "CN"];

  const [selectedSubject, setSelectedSubject] = useState("All");
  const [search, setSearch] = useState("");

  const filteredResources = resourcesData.filter((item) => {
    const matchesSubject =
      selectedSubject === "All" || item.subject === selectedSubject;

    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.author.toLowerCase().includes(search.toLowerCase());

    return matchesSubject && matchesSearch;
  });

  return (
    <div className="bg-gradient-to-b from-black via-slate-900 to-black text-white min-h-screen px-8 pb-20 pt-12" >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
        <h2 className="text-3xl font-bold">
          Shared <span className="text-indigo-500">Resources</span>
        </h2>

        <input
          type="text"
          placeholder="Search resources..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-slate-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div className="flex flex-wrap gap-4 mb-12">
        {subjects.map((sub) => (
          <button
            key={sub}
            onClick={() => setSelectedSubject(sub)}
            className={`px-4 py-2 rounded-full text-sm transition ${
              selectedSubject === sub
                ? "bg-indigo-600"
                : "bg-slate-800 hover:bg-slate-700"
            }`}
          >
            {sub}
          </button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredResources.length === 0 ? (
          <p className="text-gray-400 col-span-full text-center">
            No resources found.
          </p>
        ) : (
          filteredResources.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900 p-6 rounded-2xl border border-gray-800 hover:border-indigo-500 transition duration-300 hover:-translate-y-2"
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

              <p className="text-gray-400 text-sm mb-2">
                Subject: {item.subject}
              </p>

              <p className="text-gray-500 text-sm mb-4">
                Shared by {item.author}
              </p>

              <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                <span>⭐ {item.rating}</span>
                <span>⬇ {item.downloads}</span>
              </div>

              <button className="w-full bg-indigo-600 py-2 rounded-lg hover:bg-indigo-700 transition">
                Download
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Resources;