import React,{useContext} from 'react'
import {QuestionContext} from '../contexts/QuestionContext';

export default function ShowQuestion({immQuest,changeState,stateQuestion,questions}) {

    const {answerQuestion} = useContext(QuestionContext)
    return (
        <React.Fragment>
            
            <h3 className="bg-info text-center p-2 text-white">{immQuest.que}</h3>
            <ul className="list-group">
                {immQuest.ans.map((item,index)=>
                (
                    <li className={immQuest.color===index?'bg-success list-group-item':" list-group-item"} onClick={()=>answerQuestion(item,index)}  key={index}>{item}</li>)
                )}
            </ul>
            <div className="text-center my-3">
                
                { stateQuestion >0 ? <button className="btn btn-danger mr-3" onClick={()=>changeState()}> {"<<"} Previous </button> :''}
            </div>
            
        </React.Fragment>
    )
}
