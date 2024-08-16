import React, {useState, createContext, useContext} from 'react';
import './App.css';
import QuestionView from './QuestionView';
import question_data from './data/data.json';

// Initial dispatchers
// let dispatch: any  = {}
// // dispatch.setSelectedChoice = (value:string) => {
// // }
// // dispatch.setQuestionAnswered = (value: boolean) => {
// // }

// // Initial state values
// let state: any = {}

interface Context {
  dispatch: any,
  state: any
}

let context: Context = {
    state: {},
    dispatch: {}
};
export const QuestionContext = createContext(context);

function App() {
  context  = useContext(QuestionContext);

  const [questions, setQuestions] = useState(question_data);
  const [index, setIndex] = useState(0)
  const [selectedChoice, setSelectedChoice] = useState("")
  const [questionAnswered, setQuestionAnswered] = useState(false)
  const [answerStatus, setAnswerStatus] = useState(false)

  const dispatch = {
    setSelectedChoice,
    setQuestionAnswered,
    setAnswerStatus,
    setQuestions,
    setIndex,
  }

  const state = {
      questions,
      index,
      selectedChoice, 
      questionAnswered,
      question_index: 0,
      answerStatus,
  };


  context.dispatch = dispatch;
  context.state = state;


  return (
    <QuestionContext.Provider value={context}> 
      <div className="App">
        <header className="App-header">
          <QuestionView/>
        </header>
      </div>
    </QuestionContext.Provider>
  );
}

export default App;
