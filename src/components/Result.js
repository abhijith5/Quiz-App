import React from 'react'


const Result = ({ score, playAgain }) => (
  <div className="score-board">
    <div className="score">our scored {score} / 5 correct answer!</div>
    {score > 2 ? (<p>Great Score</p>) : (<p>Low score !!!!</p>)}

    <button className="uk-button uk-button-primary" onClick={playAgain}>
      Play again!!
    </button>
  </div>
)

export default Result