


export function CourseSection({subject}: {subject: string}){
    const courseText = `This is an introduction to ${subject}. It explains core concepts simply for easy understanding.`;
        
    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold mb-2">Course Content</h2>
            <p className="text-base leading-relaxed">{courseText}</p>
        </div>

    )

}