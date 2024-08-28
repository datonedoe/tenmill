import React, { useContext, useState, useEffect} from 'react';
import { QuestionContext, ViewContext } from '../App';
import classNames from 'classnames';
import { ViewType } from '../enum';

interface ViewNavProps {
  answerStatus: boolean; // Replace 'any' with the appropriate type if available
}

function ViewNav({ answerStatus }: ViewNavProps) {
  const question_context  = useContext(QuestionContext);
  const view_context = useContext(ViewContext);
  const { dispatch, state } = question_context;
  const { questions, question_index, questionAnswered, selectedChoice} = state;
  const [ enableNext, setEnableNext ] = useState(true);
  const { dispatch: view_dispatch } = view_context;
  const { setView } = view_dispatch;

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
      setView(ViewType.RESULT);
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
    <div className="ViewNav">
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

export default ViewNav;