import React, { useContext } from 'react';
import { QuestionContext } from './App';
import Question from './components/Question';
import Answer from './components/Answer';
import MultipleChoice from './components/MultipleChoice';
import AnswerNav from './components/AnswerNav';
import QuestionSetProgressBar from './components/QuestionSetProgressBar'; // Import the QuestionSetProgressBar component with correct file path
import QuestionSetProgressComment from './components/QuestionSetProgressComment';

function QuestionView() {
    const context  = useContext(QuestionContext);
    const { state } = context;
    const { questionAnswered } = state;
    const { answerStatus } = state;
    console.log({questionAnswered})

  return (
    <div className="QuestionView">
        <div>QuestionView</div>
        <QuestionSetProgressComment/>
        <QuestionSetProgressBar/>
        <Question/>
        <Answer/>
        <MultipleChoice/>
        {/* {JSON.stringify({state})} */}
        <AnswerNav answerStatus={answerStatus} />
    </div>
  );
}

export default QuestionView;