
import novaIllustrationImg from '@assets/nova-illustration.jpg';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';


export default function LandingPage() {
	return (
		<div className="size-full overflow-hidden bg-[#000f1e] text-white flex items-center justify-center">
			<div className="w-full flex flex-col gap-5 md:flex-row-reverse items-center justify-evenly">
				<Illustration />

				<div className="flex md:h-screen w-screen md-w-full flex-col bg-[#000f1e] items-center justify-center space-y-6 md:space-y-10 z-3 md:max-w-1/3">
					<div className="space-y-6 text-center">
						<h1 className="text-5xl font-extrabold text-white">NOVA</h1>
						<p className="text-lg text-gray-300"> 
							The AI tutor of Africa 
						</p>
					</div>

					<GetStartedBtn />

				</div>
			</div>

			<div className="absolute z-2 bottom-2">
				<Footer force={true} />
			</div>
		</div>
	);
}


function GetStartedBtn() {
	return (
		<Link
			to="/settings#new-user"
			className="px-6 py-2 bg-gradient-to-r from-[#09BDFF] to-[#BA45AF] text-white rounded-lg shadow-md text-lg font-medium hover:opacity-90 transition"
		>
			Get Started
		</Link>
	);
}

function Illustration() {
	return (
		<div className="w-full md:max-w-1/2 scale-150" style={{aspectRatio: 1000/667}}>
			<img
				src={novaIllustrationImg} // Replace with actual path
				alt="Nova AI Tutor Illustration"
				className="w-full object-cover -ml-15 md:mr-0"
			/>
		</div>
	);
}