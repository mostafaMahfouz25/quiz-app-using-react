import React,{useContext,useState} from 'react'
import {QuestionContext} from '../contexts/QuestionContext';



export default function EndQuestion({setDataDefault}) {
    
    const {showResult,questions} = useContext(QuestionContext);
    return (

        <React.Fragment>
            <div className="text-center">
                <h3 className="bg-danger text-center p-2 text-white mt-5"> End Of Questions </h3>
                <button className="btn btn-primary my-3" onClick={()=>setDataDefault()}> New Exam </button>
                <h2 className="bg-success display-4">
                    {showResult().length} / {questions.length}
                </h2>
            </div>
            
        </React.Fragment>
        

    )
}
