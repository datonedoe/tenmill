import React, {useState, createContext} from 'react';
import './App.css';
import QuestionView from './QuestionView';
import question_data from './data/data.json';

// Initial dispatchers
let dispatch: any  = {}
dispatch.setSelectedChoice = (value:string) => {
}
dispatch.setAnswerStatus = (value: string | Boolean) => {
}

// Initial state values
let state: any = {}
state.question_index = 0;
state.questions = question_data;
state.answerStatus = "";

const context = {
    state: state,
    dispatch: dispatch
};
export const QuestionContext = createContext(context);

function App() {
  const [questions, setQuestions] = useState(question_data);
  const [index, setIndex] = useState(0)
  const [selectedChoice, setSelectedChoice] = useState("")
  const [answerStatus, setAnswerStatus] = useState("")

  context.dispatch.setSelectedChoice = setSelectedChoice;
  context.dispatch.setAnswerStatus = setAnswerStatus;


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
