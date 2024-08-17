import React, { useContext } from 'react';
import { QuestionContext } from '../App';

interface AnswerStatusProps {
  answerStatus: boolean; // Replace 'any' with the appropriate type if available
}

function AnswerStatus({ answerStatus }: AnswerStatusProps) {
  const context  = useContext(QuestionContext);
  const { dispatch } = context;
  const { setQuetsionIndex } = dispatch;

  function handleContinue() {
    setQuetsionIndex((prevIndex: number) =>  prevIndex + 1);
  }
  return (
    <div className="AnswerStatus">
        <div className="text-2xl font-bold">AnswerStatus</div>
        <div className="flex">
          <div className="flex-auto py-2 px-4 rounded">
            <button className='bg-blue-500  py-2 px-4 rounded'>Skip</button>
          </div>
          <div className="flex-auto">
            <button className='bg-blue-500 py-2 px-4 rounded'>Check</button>
          </div>
        </div>
        <div className="flex bg-teal-500 rounded">
          <div className="flex-auto">
            {answerStatus && <span className='bg-green-400'>Correct!</span>}
            {!answerStatus && <span className='bg-red-500'>Wrong</span>}

          </div>
          <div className="flex-auto">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleContinue()}>
              Continue
            </button>
          </div>
        </div>
        <br/>
        
    </div>
  );
}

export default AnswerStatus;