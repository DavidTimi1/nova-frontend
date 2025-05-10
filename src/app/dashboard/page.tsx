
import React from 'react';

const DashboardPage: React.FC = () => {
  // Sample data for the user profile
  const user = {
    name: 'John Doe',
    achievements: ['Completed Math Module', 'Scored 95% in Science Quiz'],
    lastSubject: 'Math - Algebra',
  };

  return (
    <div className="w-full h-full bg-white text-gray-900">
      <div className="py-12 px-5">
        <h1 className="text-3xl font-bold text-center text-[#002746] mb-8">Welcome Back, {user.name}!</h1>

        <div className="bg-[#09BDFF] p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-white">Your Achievements</h2>
          <ul className="mt-4 text-white space-y-2">
            {user.achievements.map((achievement, index) => (
              <li key={index} className="text-lg">{achievement}</li>
            ))}
          </ul>
        </div>

        <div className="bg-[#BA45AF] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white">Last Subject Taken</h2>
          <p className="mt-4 text-white text-lg">{user.lastSubject}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
