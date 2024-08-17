import React, { useContext } from 'react';

interface AnswerStatusProps {
  answerStatus: boolean; // Replace 'any' with the appropriate type if available
}

function AnswerStatus({ answerStatus }: AnswerStatusProps) {

  return (
    <div className="AnswerStatus">
        <div>AnswerStatus</div>
        <div>
          <span>
            {answerStatus && "Correct Answer!!"}
            {!answerStatus && "WRONG Answer!!"}

          </span>
          <span>
            <button>Continue</button>
          </span>
        </div>
        <br/>
        
    </div>
  );
}

export default AnswerStatus;