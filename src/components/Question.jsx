import React from 'react'

function Question({ questionData, onAnswerClick }) {
    return (
        <>
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title text-center">Quiz App</h3>
                    <h2 class="card-text text-center">{questionData.question}</h2>
                    <div>
                        <ul>
                            {questionData.options.map((option, index) => (
                                <button style={{ fontSize: '20px', padding: '5px', borderRadius: '6px', color: 'white', backgroundColor: '	 #1a1aff', display: 'flex', marginTop: '25px' }} className='button' key={index} onClick={() => onAnswerClick(option)}>
                                    {option}
                                </button>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Question