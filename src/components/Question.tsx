import React, { useContext } from 'react';
import { QuestionContext } from '../App';


function Question() {
  const context  = useContext(QuestionContext);
  const { state } = context;
  console.log({state});

  return (
    <div className="Question">
        <br/>
        <div>Question</div>
        <div>{state.questions[0].question}</div>
    </div>
  );
}

export default Question;