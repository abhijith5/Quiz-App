import React, { useState } from 'react'

const QuestionBox = ({ question, options, selected }) => {

  const [answer, setAnswer] = useState(options)

  return (
    <div className="uk-padding">
      <div className="uk-card uk-card-default">
        <div className="uk-card-body">
          {question}
        </div>
        {answer.map
          ((text, index) => (
            <button
              key={index}
              className="uk-button uk-button-danger"
              style={{ marginRight: "10px" }}
              onClick={() => {
                setAnswer([text]);
                selected(text)
              }}>
              {text}
            </button>
          ))}
      </div>
    </div>
  )
}

export default QuestionBox