import React from 'react';

const Score = (props) => {
  // TODO: get all user scores from server

  return (
    <div>
      <div className="score-container">
        <h4>Your Score:</h4>
        <div className="score">{props.score} You are a <img src="https://emojipedia-us.s3.amazonaws.com/thumbs/240/microsoft/135/taco_1f32e.png"/></div>
      </div>
    </div>
  )
};

export default Score;
