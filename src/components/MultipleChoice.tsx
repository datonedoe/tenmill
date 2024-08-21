import React, { useContext, useEffect } from 'react';
import { QuestionContext } from '../App';

function MultipleChoice() {
    const context  = useContext(QuestionContext);
    const { state } = context;
    const { selectedChoice } = state;
    const { dispatch } = context;

    let correct_answer = "";
    let choices = [];


    const {question_index, questions} = state

    if (questions[question_index]) {
        choices = questions[question_index].choices;
        correct_answer = state.questions[question_index].answer;
    }

    function handleClick(eachChoice: string, idx: number) {
        dispatch.setSelectedChoice(eachChoice);
    }

    function selected(eachChoice: string) {
        return selectedChoice === eachChoice ? 'bg-blue-900 text-white' : ''; 
    }


  return (
    <div className="MultipleChoice">
        <br/>
        <div>MultipleChoice</div>
        {choices.map((eachChoice: any, idx: any) => (
            <div key={idx} >
                <button
                    className={`bg-transparent ${selected(eachChoice)}  text-blue-700 font-semibold  py-2 px-4 border border-blue-500  rounded my-2`}
                    onClick={() => handleClick(eachChoice, idx)}>{eachChoice}</button>
            </div>
        ))}
    </div>
  );
}

export default MultipleChoice;