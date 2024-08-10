import React, { useContext } from 'react';
import { QuestionContext } from './App';
import Question from './components/Question';
import Answer from './components/Answer';
import MultipleChoice from './components/MultipleChoice';

function QuestionView() {
    const state  = useContext(QuestionContext);
  return (
    <div className="QuestionView">
        <div>QuestionView</div>
        <Question/>
        <Answer/>
        <MultipleChoice/>
        {/* {JSON.stringify({state})} */}
    </div>
  );
}

export default QuestionView;