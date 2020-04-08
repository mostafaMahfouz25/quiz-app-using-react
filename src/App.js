import React from 'react';
// import logo from './logo.svg';
import QuestionContextProvider from './contexts/QuestionContext';
import Question from './components/Question'

function App() {
  return (
    <div className="App">
        <h1 className="text-center display-4">Quiz App Using React</h1>
        <QuestionContextProvider>
          <div className="container">
            <div className="row">
              <div className="col-6 mx-auto  border p-3 bg-dark">
                <Question />
              </div>
            </div>
          </div>
        </QuestionContextProvider>
    </div>
  );
}

export default App;
