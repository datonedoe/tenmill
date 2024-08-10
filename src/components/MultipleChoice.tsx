import React, { useContext } from 'react';
import { QuestionContext } from '../App';

function MultipleChoice() {
    const context  = useContext(QuestionContext);
    const { state } = context;
    const { dispatch } = context;

    const {question_index, questions} = state
    const choices = questions[question_index].choices;

    function handleClick(event:any) {
    }

  return (
    <div className="MultipleChoice">
        <br/>
        <div>MultipleChoice</div>
        {choices.map((eachChoice: any, idx: any) => (
            <div>
                <button key={idx} onClick={handleClick}>{eachChoice}</button>
            </div>
        ))}
    </div>
  );
}

export default MultipleChoice;