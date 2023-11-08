import React from 'react'

function Result({ score, totalQuestions }) {
  return (
    <div style={{ marginTop: '250px' }}>
      <h2>Quiz Completed !!!</h2>
      <p>Your Score : {score} / {totalQuestions}</p>
    </div>
  )
}

export default Result