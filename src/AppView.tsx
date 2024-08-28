import React, { useContext } from 'react';
import { QuestionContext, ViewContext } from './App';
import Question from './components/Question';
import Answer from './components/Answer';
import MultipleChoice from './components/MultipleChoice';
import ViewNav from './components/ViewNav';
import QuestionSetProgressBar from './components/QuestionSetProgressBar'; // Import the QuestionSetProgressBar component with correct file path
import QuestionSetProgressComment from './components/QuestionSetProgressComment';
import ResultView from './view/ResultView';
import { ViewType } from './enum';

function AppView() {
    const question_context  = useContext(QuestionContext);
    const view_context  = useContext(ViewContext);
    const { state } = question_context;
    const { answerStatus } = state;

    const { state: view_state } = view_context;
    console.log({view_state});
    const { view } = view_state;

  return (
    <div className="AppView">
      {view === ViewType.LESSON_QUESTION && <QuestionSetProgressComment/>}
      
      <QuestionSetProgressBar/>

      {view === ViewType.LESSON_QUESTION &&  <div>
          <Question/>
          <Answer/>
          <MultipleChoice/>
    </div>}
      
      {view === ViewType.RESULT &&  <ResultView/>}
          
      <ViewNav answerStatus={answerStatus} />
    </div>
  );
}

export default AppView;