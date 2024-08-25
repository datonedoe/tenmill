import React, { useContext } from 'react';
import { QuestionContext } from '../App';

function ResultView() {
    const context  = useContext(QuestionContext);
    const { state } = context;
    const { questionAnswered } = state;
    const { answerStatus } = state;
    console.log({questionAnswered})

  return (
    <div className="ResultView">
      Result
    </div>
  );
}

export default ResultView;