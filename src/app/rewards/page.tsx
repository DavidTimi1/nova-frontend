

const achievements = [
  { title: 'First Lesson Completed', description: 'You completed your very first lesson!', points: 10 },
  { title: '5 Quizzes Attempted', description: 'You’ve attempted 5 different quizzes.', points: 25 },
  { title: 'Active Learner', description: 'You returned to study 3 days in a row.', points: 15 }
];

export default function RewardsPage() {
  return (
    <div className="w-full min-h-screen bg-white text-[#002746] px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">🎉 Your Rewards & Achievements</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl shadow p-6 flex flex-col justify-between hover:shadow-md transition"
            >
              <div>
                <h2 className="text-xl font-semibold text-[#BA45AF]">{item.title}</h2>
                <p className="mt-2 text-base">{item.description}</p>
              </div>
              <div className="mt-4 text-sm font-medium text-[#09BDFF]">+{item.points} Points</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold mb-2">Want more features and exclusive rewards?</h2>
          <p className="mb-4 text-base">Upgrade to Pro and unlock premium learning experiences, double rewards, and more.</p>
          <a
            href="/payments"
            className="inline-block bg-[#09BDFF] hover:bg-[#BA45AF] text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition"
          >
            Upgrade / Switch to Pro
          </a>
        </div>
      </div>
    </div>
  );
}
