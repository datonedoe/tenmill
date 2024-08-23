import React, { useContext, useState, useEffect} from 'react';
import { QuestionContext } from '../App';
import classNames from 'classnames';

interface AnswerNavProps {
  answerStatus: boolean; // Replace 'any' with the appropriate type if available
}

function AnswerNav({ answerStatus }: AnswerNavProps) {
  const context  = useContext(QuestionContext);
  const { dispatch, state } = context;
  const { questions, question_index, questionAnswered, selectedChoice} = state;
  const [ enableNext, setEnableNext ] = useState(true);

  const checkBtnClass = classNames('CheckBtn flex-auto', {
     "opacity-50 cursor-not-allowed": selectedChoice == "",
  })

  const continueBtnClass = classNames('ContinueBtn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ', {
    // 'opacity-50 cursor-not-allowed': !enableNext, 
  });

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
    } else {
      console.log('End of questions');
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

  function skipAnswer() {
    console.log('skipAnswer');
    handleContinue();
  }

  return (
    <div className="AnswerNav">
        <div className="flex">
          {!questionAnswered && 
          <div className="flex-auto py-2 px-4 rounded">
            <button
              // className='bg-blue-500  py-2 px-4 rounded'
              className={continueBtnClass}
              onClick={() => skipAnswer()}>Skip</button>
          </div>
          }
          

          {questionAnswered && <div className="flex-auto">
              {answerStatus ? 
              <span className='bg-green-400'>Correct!</span> :
              <span className='bg-red-500'>Wrong</span>
              }

          </div>
          }
          {!questionAnswered &&<div className={checkBtnClass}>
            <button 
              className='bg-blue-500 py-2 px-4 rounded'
              onClick={checkAnswer}>Check</button>
          </div>
          }
          

          {questionAnswered && <div className="flex-auto">
            <button
              className={continueBtnClass}
              onClick={() => handleContinue()}>
              Continue
            </button>
          </div>
          }
        </div>

        <br/>
        
    </div>
  );
}

export default AnswerNav;