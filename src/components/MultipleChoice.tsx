import React, { useContext } from 'react';
import { QuestionContext } from '../App';

function MultipleChoice() {
    const context  = useContext(QuestionContext);
    const { state } = context;
    const { dispatch } = context;

    const {question_index, questions} = state
    const choices = questions[question_index].choices;
    const correct_answer = state.questions[question_index].answer;

    function handleClick(eachChoice: string, idx: number) {
        console.log({state})
        
        if (correct_answer === eachChoice) {
            dispatch.setAnswerStatus("huh")

            console.log("correct!!");
            console.log(state.answerStatus)
        } else {
            dispatch.setAnswerStatus(false)
        }
    }

  return (
    <div className="MultipleChoice">
        <br/>
        <div>MultipleChoice</div>
        {choices.map((eachChoice: any, idx: any) => (
            <div>
                <button key={idx} onClick={() => handleClick(eachChoice, idx)}>{eachChoice}</button>
            </div>
        ))}
    </div>
  );
}

export default MultipleChoice;