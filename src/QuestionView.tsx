import React, { useContext } from 'react';
import { QuestionContext } from './App';
import Question from './components/Question';
import Answer from './components/Answer';
import MultipleChoice from './components/MultipleChoice';
import AnswerStatus from './components/AnswerStatus';
import QuestionSetProgressBar from './components/QuestionSetProgressBar'; // Import the QuestionSetProgressBar component with correct file path

function QuestionView() {
    const context  = useContext(QuestionContext);
    const { state } = context;
    const { questionAnswered } = state;
    const { answerStatus } = state;
    console.log({questionAnswered})

  return (
    <div className="QuestionView">
        <div>QuestionView</div>
        <QuestionSetProgressBar/>
        <Question/>
        <Answer/>
        <MultipleChoice/>
        {/* {JSON.stringify({state})} */}
        {questionAnswered && <AnswerStatus answerStatus={answerStatus} />}
    </div>
  );
}

export default QuestionView;