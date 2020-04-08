import React,{useContext} from 'react'
import EndQuestion from './EndQuestion';
import ShowQuestion from './ShowQuestion';
import {QuestionContext} from '../contexts/QuestionContext';
export const Question = ()=> {
    const {questions,changeState,stateQuestion,stateQuiz,setDataDefault} = useContext(QuestionContext);
    const immQuest = questions[stateQuestion];
    // console.log(stateQuestion)
    return (
         stateQuiz ? <ShowQuestion  immQuest={immQuest}  questions={questions.length} stateQuestion={stateQuestion} changeState={changeState} /> 
         : <EndQuestion  setDataDefault={setDataDefault} />
    )
}

export default Question
