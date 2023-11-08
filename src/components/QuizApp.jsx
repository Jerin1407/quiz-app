import React, { useState } from 'react'
import quizData from '../data/quizData'
import Question from './Question'
import Result from './Result'
import Style from '../Style.css'

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === quizData[currentQuestion].correct) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div style={{ width: '40rem', marginTop: '150px' }} className='container'>
      {
        showResult ? (
          <Result score={score} totalQuestions={quizData.length} />
        ) : (
          <Question questionData={quizData[currentQuestion]} onAnswerClick={handleAnswerClick} />
        )
      }
    </div>
  )
}

export default QuizApp