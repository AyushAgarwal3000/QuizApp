import React from 'react'
import { useState } from 'react';
import './quizstyle.css'


const QuizComp = () => {
    var Questionbank = [
        {
            Question: "What is the capital of India?",
            Answers: [
                { Answer: "Delhi", isCorrect: true },
                { Answer: "Pune", isCorrect: false },
                { Answer: "Ranchi", isCorrect: false },
                { Answer: "Patna", isCorrect: false }
            ]
        },
        {
            Question: "What is C++?",
            Answers: [
                { Answer: "object oriented programming language", isCorrect: false },
                { Answer: "both procedural and object oriented programming language", isCorrect: true },
                { Answer: "functional programming language", isCorrect: false },
                { Answer: "procedural programming language", isCorrect: false }
            ]
        }, {
            Question: "Which of the following is the correct syntax to print a message in C++ language?",
            Answers: [
                { Answer: "cout<< ", isCorrect: true },
                { Answer: "Cout << ", isCorrect: false },
                { Answer: "Out <<", isCorrect: false },
                { Answer: "None of the above", isCorrect: false }
            ]
        },
        {
            Question: "What comes after january?",
            Answers: [
                { Answer: "feb", isCorrect: true },
                { Answer: "march", isCorrect: false },
                { Answer: "june", isCorrect: false },
                { Answer: "sept", isCorrect: false }
            ]
        },
        {
            Question: "Which of the following is the address operator?",
            Answers: [
                { Answer: "@", isCorrect: false },
                { Answer: "#", isCorrect: false },
                { Answer: "&", isCorrect: true },
                { Answer: "%", isCorrect: false }
            ]
        }
    ]

    //useState Hook
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

const handleAnswerResponse=(isCorrect)=>
{
    if(isCorrect)
    {
        setScore(score+1);
    }

   const nextQuestion= currentQuestion+1;
   if(nextQuestion<Questionbank.length)
   {
    setCurrentQuestion(nextQuestion);
   }
   else{
    setShowScore(true);
   }
}

const resetQuiz=()=>
{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
}

    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    You have scored {score} out of {Questionbank.length}
                    <>
                       <button type="submit" onClick={resetQuiz}>Play Again!!</button>
                    </>
                </div>
            )
                : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                               <span>{currentQuestion+1}</span>/{Questionbank.length}
                            </div>

                            <div className='question-text'>
                             {Questionbank[currentQuestion].Question}
                            </div>
                        </div>

                        <div className='answer-section'>
                          {Questionbank[currentQuestion].Answers.map((answer)=>
                          (
                              <button onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                          ))}
                        </div>
                    </>
                )
            }

        </div>
    );
}

export default QuizComp;