import React, { useContext, useEffect } from 'react';
import { QuestionContext } from '../App';

function QuestionSetProgressBar() {
    const context  = useContext(QuestionContext);
    const { state } = context;
    const { question_index, questions } = state;
    const [progress, setProgress] = React.useState(0);

    useEffect(() => {
        setProgress((question_index / questions.length)*100)
    }, [question_index])

    return (
        <div className="QuestionSetProgressBar my-8">
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
            <div className="bg-green-600 h-1.5 rounded-full dark:bg-green-500" style={{width: `${progress}%`}}></div>
            </div>
        </div>
    );
    }

export default QuestionSetProgressBar;