import React, { useContext } from 'react';
import { QuestionContext } from './App';
import Question from './components/Question';
import Answer from './components/Answer';
import MultipleChoice from './components/MultipleChoice';
import AnswerStatus from './components/AnswerStatus';

function QuestionView() {
    const context  = useContext(QuestionContext);
    const { state } = context;
    const { answerStatus } = state;
    console.log({answerStatus})

  return (
    <div className="QuestionView">
        <div>QuestionView</div>
        <Question/>
        <Answer/>
        <MultipleChoice/>
        {/* {JSON.stringify({state})} */}
        {/* { answerStatus != "" && <AnswerStatus/>} */}
        {answerStatus && <AnswerStatus/>}
    </div>
  );
}

export default QuestionView;