import React, { useContext } from 'react';
import { QuestionContext } from '../App';

function MultipleChoice() {
    const context  = useContext(QuestionContext);
    const { state } = context;
    const { dispatch } = context;

    let correct_answer = "";
    let choices = [];


    const {question_index, questions} = state

    if (questions[question_index]) {
        choices = questions[question_index].choices;
        correct_answer = state.questions[question_index].answer;
    }

    function handleClick(eachChoice: string, idx: number) {
        console.log({state})
        dispatch.setQuestionAnswered(true)
        
        if (correct_answer === eachChoice) {
            console.log("Correct Answer");
            dispatch.setAnswerStatus(true)
        } else {
            console.log("Wrong Answer");
            dispatch.setAnswerStatus(false)
        }
    }

  return (
    <div className="MultipleChoice">
        <br/>
        <div>MultipleChoice</div>
        {choices.map((eachChoice: any, idx: any) => (
            <div key={idx} >
                <button onClick={() => handleClick(eachChoice, idx)}>{eachChoice}</button>
            </div>
        ))}
    </div>
  );
}

export default MultipleChoice;