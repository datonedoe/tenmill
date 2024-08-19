import React, { useContext, useState, useEffect} from 'react';
import { QuestionContext } from '../App';

interface AnswerNavProps {
  answerStatus: boolean; // Replace 'any' with the appropriate type if available
}

function AnswerNav({ answerStatus }: AnswerNavProps) {
  const context  = useContext(QuestionContext);
  const { dispatch, state } = context;
  const { questions, question_index, questionAnswered} = state;
  const [ enableNext, setEnableNext ] = useState(true);

  useEffect(() => {
    if (question_index >= questions.length - 1) {
      setEnableNext(false)
    }
  }, [question_index])

  function handleContinue() {
  const { setQuetsionIndex, setAnswerStatus, setSelectedChoice, setQuestionAnswered} = dispatch;

    if (enableNext) {
      setQuetsionIndex((prevIndex: number) => prevIndex + 1);
      setAnswerStatus(false);
      setSelectedChoice("");
      setQuestionAnswered(false);
    }
  }

  function checkAnswer() {
    const { selectedChoice } = state;
    const correctAnswer = questions[question_index].answer;
    dispatch.setQuestionAnswered(true);
    if (selectedChoice === correctAnswer) {
      dispatch.setAnswerStatus(true);
    } else {
      dispatch.setAnswerStatus(false);
    }
  }
  return (
    <div className="AnswerNav">
        <div className="text-2xl font-bold">AnswerNav</div>
        <div className="flex">
          <div className="flex-auto py-2 px-4 rounded">
            <button className='bg-blue-500  py-2 px-4 rounded'>Skip</button>
          </div>
          <div className="flex-auto">
            <button 
              className='bg-blue-500 py-2 px-4 rounded'
              onClick={checkAnswer}>Check</button>
          </div>
        </div>
        
        <div className="flex bg-teal-500 rounded">
        {questionAnswered && <div className="flex-auto">
            {answerStatus ? 
              <span className='bg-green-400'>Correct!</span> :
              <span className='bg-red-500'>Wrong</span>
            }

          </div>
          }
          
          <div className="flex-auto">
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${!enableNext && 'opacity-50 cursor-not-allowed'}`}
              onClick={() => handleContinue()}>
              Continue
            </button>
          </div>
        </div>
        <br/>
        
    </div>
  );
}

export default AnswerNav;