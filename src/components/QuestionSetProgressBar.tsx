import React, { useContext } from 'react';

function QuestionSetProgressBar() {
  return (
    <div className="QuestionSetProgressBar my-8">
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
        <div className="bg-green-600 h-1.5 rounded-full dark:bg-green-500" style={{width: "45%"}}></div>
        </div>
    </div>
  );
}

export default QuestionSetProgressBar;