
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './app/landing/page'
import DashboardPage from './app/dashboard/page'
import RewardsPage from './app/rewards/page'
import AITutorPage from './app/ai-tutor/page'
import StudentProfilePage from './app/settings/page'
import LearningModulePage from './app/learning/page'
import Footer from './components/Footer'
import PaymentsPage from './app/payments/page'

function App() {
	return (
		<div className="App h-screen w-screen overflow-x-hidden overflow-auto flex flex-col items-center justify-center">
			<Router>
				<Navbar />

				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/dashboard" element={<DashboardPage />} />
					<Route path="/learn" element={<LearningModulePage />} />
					<Route path="/rewards" element={<RewardsPage />} />
					<Route path="/ai-tutor" element={<AITutorPage />} />
					<Route path="/payments" element={<PaymentsPage />} />
					<Route path="/settings" element={<StudentProfilePage />} />
					<Route path="*" element={<Navigate to='/dashboard' replace />} />
				</Routes>

				<Footer />
			</Router>

		</div>
	)
}

export default App
