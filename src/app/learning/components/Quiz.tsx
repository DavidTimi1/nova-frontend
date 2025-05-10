import Button from "../../../components/Buttons";


export default function QuizSection({subject}: {subject: string}) {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-4">Quiz Section</h2>
                <p className="mb-4">This is a quiz section where you can test your knowledge.</p>
                <Button>
                    Start Quiz
                </Button>
            </div>

            <QuizzingView subject={subject} />
        </section>
    );
}


function QuizzingView({subject}: {subject: string}) {
    const generatedQuiz = [
        `What is ${subject}?`,
        `Mention one benefit of studying ${subject}.`,
        `Give one example related to ${subject}.`
    ];

    return (
        <div className="bg-white p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Quiz</h2>
            <ol className="list-decimal list-inside space-y-2">
                {
                    generatedQuiz.map((q, index) => (
                        <li key={index} className="text-base">{q}</li>
                    ))
                }
            </ol>
        </div>
    )
}