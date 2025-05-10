import { useState } from 'react';
import QuizSection from './components/Quiz';
import { CourseSection } from './components/CourseContent';
import Button from '../../components/Buttons';

const subjects = ['Mathematics', 'English', 'Science', 'Civic Education'];
// const modes = ['quiz', 'learn']

export default function LearningModulePage() {
    const [selectedSubject, setSelectedSubject] = useState('');
    const [mode, setMode] = useState('');


    return (
        <div className="w-full min-h-full bg-white text-[#002746] py-12 px-6">
            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="text-3xl font-bold text-center">Learning Module</h1>

                {/* Subject Selection */}
                <div className="space-y-2">
                    <label className="block text-lg font-medium">Select a Subject</label>
                    <select
                        value={selectedSubject}
                        onChange={(e) => {
                            setSelectedSubject(e.target.value);
                            setMode('');
                        }}
                        className="w-full p-3 border border-gray-300 rounded-lg"
                    >
                        <option value="">-- Choose Subject --</option>
                        {subjects.map((subject) => (
                            <option key={subject} value={subject}>{subject}</option>
                        ))}
                    </select>

                    <Button onClick={_ => setMode('learn') }>
                        Generate Lesson
                    </Button>
                </div>

                {
                    getModeSection(mode, selectedSubject)
                }


                {/* AI Tutor Access */}
                {mode ===  'learn' && (
                    <div className="pt-6 text-center">
                        <a
                            href="/ai-tutor"
                            className="text-[#BA45AF] font-semibold underline hover:text-[#09BDFF] transition"
                        >
                            Need help? Ask our AI Tutor
                        </a>
                    </div>
                )}
            </div>
        </div>
    );


}


function getModeSection(mode: string, subject: string){
    switch(mode){
        case 'quiz':
            return <QuizSection subject={subject} />
        case 'learn':
            return <CourseSection subject={subject} />
    }
}