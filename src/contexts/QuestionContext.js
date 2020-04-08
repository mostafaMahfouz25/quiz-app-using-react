import React,{useState,createContext,useEffect} from 'react'

export const QuestionContext = createContext();

export const QuestionContextProvider = (props) =>
{
    const [questions,setQuestions] = useState([
        {que:"First Question Using React",ans:["First Answer","Second Answer","Third Answer"],realAnswer:"Second Answer",color:false},
        {que:"Second Question Using React",ans:["First Answer","Second Answer","Third Answer"],realAnswer:"Third Answer",color:false},
        {que:"Third Question Using React",ans:["First Answer","Second Answer","Third Answer"],realAnswer:"First Answer",color:false},
        {que:"Fourth Question Using React",ans:["First Answer","Second Answer","Third Answer"],realAnswer:"Second Answer",color:false},
        {que:"Fifth Question Using React",ans:["First Answer","Second Answer","Third Answer"],realAnswer:"First Answer",color:false},
    ]);
    const [stateQuestion,setStateQuestion] = useState(0);
    const [stateQuiz,setStateQuiz] = useState(true);
    const [degree,setDegree] = useState([]);

    const showResult = ()=>{
        const res = [];
        questions.filter((item,index)=>
        {
            if(item.realAnswer === degree[index].ans)
            {
                return res.push(item);
            }
        })

        return res;
    }
    const changeState = () =>
    {
        setStateQuestion(stateQuestion - 1);
    }



    useEffect(() => 
    {
        if((stateQuestion) < (questions.length-1))
        {
            if(findAnswer())
            {
                setStateQuestion(stateQuestion + 1);
            }
        }
        else
        {
            
            setStateQuiz(false)
        }
    }, [degree]);


    const answerQuestion = (answer,index)=>
    {

        if(findAnswer() === undefined)
        {
            const data = {q:stateQuestion,ans:answer};
            setDegree(degree=>([...degree,data]));
        }
        else 
        {
            const newDegree = degree.map((item)=>
            {
                if(item.q === stateQuestion)
                {
                    return {q:stateQuestion,ans:answer}
                }
                else 
                {
                    return item;
                }
            })
            setDegree(newDegree);
        }

        const newQuestion = questions;
        newQuestion[stateQuestion].color=index;
        setQuestions(newQuestion);

    }


    const findAnswer = ()=>
    {
        const item = degree.find(itme=>itme.q === stateQuestion);
        return item;
    }


    const setDataDefault = ()=>{
        // console.log("dfgsfghfghh");
        setStateQuestion(0);
        setDegree([])
        const newQuestion = questions.map((item)=>{
            item.color = false;
            return item;
        });
        setQuestions(newQuestion);
        setStateQuiz(true)
    }

    return (
        <QuestionContext.Provider  value={{showResult,stateQuestion,questions,degree,changeState,stateQuiz,answerQuestion,setDataDefault}} >
            {props.children}
        </QuestionContext.Provider>
    )
}

export default QuestionContextProvider;
