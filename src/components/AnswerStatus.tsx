import React, { useContext } from 'react';

interface AnswerStatusProps {
  answerStatus: boolean; // Replace 'any' with the appropriate type if available
}

function AnswerStatus({ answerStatus }: AnswerStatusProps) {

  return (
    <div className="AnswerStatus">
        <div>AnswerStatus</div>
        <br/>
        {answerStatus && "Correct Answer!!"}
        {!answerStatus && "WRONG Answer!!"}

    </div>
  );
}

export default AnswerStatus;