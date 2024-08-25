import React, {useState, createContext, useContext} from 'react';
import './App.css';
import AppView from './AppView';
import question_data from './data/data.json';
import { ViewType } from './enum';

interface Context {
  dispatch: any,
  state: any
}

let context: Context = {
    state: {},
    dispatch: {}
};
export const QuestionContext = createContext(context);
export const ViewContext = createContext(context);

function App() {
  let question_context  = useContext(QuestionContext);

  const [questions, setQuestions] = useState(question_data);
  const [index, setIndex] = useState(0)
  const [selectedChoice, setSelectedChoice] = useState("")
  const [questionAnswered, setQuestionAnswered] = useState(false)
  const [answerStatus, setAnswerStatus] = useState(false)
  const [question_index, setQuetsionIndex] = useState(0);

  const question_dispatch = {
    setSelectedChoice,
    setQuestionAnswered,
    setAnswerStatus,
    setQuestions,
    setIndex,
    setQuetsionIndex
  }

  const question_state = {
      questions,
      index,
      selectedChoice, 
      questionAnswered,
      question_index,
      answerStatus,
  };

  question_context.dispatch = question_dispatch;
  question_context.state = question_state;


  // const [view, setView] = useState(ViewType.LESSON_QUESTION)
  // const view_context = useContext(ViewContext)

  // view_context.state = {view}
  // view_context.dispatch = {setView}


  return (
    <QuestionContext.Provider value={question_context}> 
      {/* <ViewContext.Provider value={view_context}> */}
        <div className="App">
          <header className="App-header">
            <AppView/>
          </header>
        </div>
      {/* </ViewContext.Provider> */}
    </QuestionContext.Provider>

  );
}

export default App;
