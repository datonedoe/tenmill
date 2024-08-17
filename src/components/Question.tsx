import React, { useContext } from 'react';
import { QuestionContext } from '../App';


function Question() {
  const context  = useContext(QuestionContext);
  const { state } = context;
  const { question_index } = state;
  console.log({state});

  return (
    <div className="Question block p-6 bg-white border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div>{state.questions[question_index].question}</div>
    </div>
  );
}

export default Question;