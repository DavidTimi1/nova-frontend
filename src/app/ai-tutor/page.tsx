import { useState } from 'react';

export default function AITutorPage() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const askTutor = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setResponse('');

    // Simulated AI response - replace with real API logic
    setTimeout(() => {
      setResponse(`Here's a helpful explanation for: "${question}"`);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white text-[#002746] px-4 py-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Floating Robot Image */}
        <div className="flex justify-center">
          <img
            src="/path-to-your-robot-image.png"
            alt="AI Tutor Robot"
            className="w-full max-w-sm animate-float"
          />
        </div>

        {/* Tutor Interface */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-lg space-y-6">
          <h1 className="text-3xl font-bold mb-2">Ask the AI Tutor</h1>
          <p className="text-base">Got a question from your lesson? Type it below and get instant help!</p>

          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows={4}
            placeholder="Type your question here..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-[#09BDFF]"
          />

          <button
            onClick={askTutor}
            className="bg-[#BA45AF] hover:bg-[#09BDFF] text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Ask Tutor
          </button>

          {loading && <p className="text-sm text-gray-500 italic">Thinking...</p>}

          {response && (
            <div className="bg-white border border-[#09BDFF] rounded-lg p-4 mt-4">
              <h2 className="text-lg font-semibold mb-1 text-[#002746]">AI Tutor's Answer:</h2>
              <p className="text-base leading-relaxed">{response}</p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
