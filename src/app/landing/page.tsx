
import novaIllustrationImg from '@assets/nova-illustration.jpg'; 
import { Link } from 'react-router-dom';


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#002746] text-white flex items-center justify-center px-4">
      <div className="max-w-7xl w-full flex flex-col gap-5 md:flex-row items-center justify-between">
        <Illustration />

        <div className="flex flex-col items-start justify-center space-y-6 max-w-xl">
          <h1 className="text-5xl font-extrabold text-white">NOVA</h1>
          <p className="text-lg text-gray-300">The AI tutor of Africa</p>

          <GetStartedBtn />

        </div>

      </div>
    </div>
  );
}


function GetStartedBtn(){
    return (
        <Link
          to="/settings#new-user"
          className="px-6 py-2 bg-gradient-to-r from-[#09BDFF] to-[#BA45AF] text-white rounded-lg shadow-md text-lg font-medium hover:opacity-90 transition"
        >
          Get Started
        </Link>
    );
}

function Illustration(){
    return (
        <div className="">
          <img
            src={novaIllustrationImg} // Replace with actual path
            alt="Nova AI Tutor Illustration"
            className="w-[300px] md:w-[400px]"
          />
        </div>
    );
}