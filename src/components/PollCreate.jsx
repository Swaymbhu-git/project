import { useState } from 'react'
import './PollCreate.css'

function PollCreate() {
  const [question, setQuestion] = useState('')
  const [timer, setTimer] = useState('60 seconds')
  const [options, setOptions] = useState([
    { id: 1, text: 'Himanshu Patel' },
    { id: 2, text: 'Himanshu Patel' }
  ])
  const [correctAnswers, setCorrectAnswers] = useState({
    1: 'Yes',
    2: 'No'
  })

  const handleAddOption = () => {
    const newId = Math.max(...options.map(o => o.id)) + 1
    setOptions([...options, { id: newId, text: 'Your Name' }])
    setCorrectAnswers({ ...correctAnswers, [newId]: 'Yes' })
  }

  const handleOptionChange = (id, text) => {
    setOptions(options.map(opt => opt.id === id ? { ...opt, text } : opt))
  }

  const handleCorrectAnswerChange = (id, value) => {
    setCorrectAnswers({ ...correctAnswers, [id]: value })
  }

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value)
  }

  return (
    <div className="poll-create-container">
      <div className="poll-create-content">
        {/* Badge */}
        <div className="poll-badge">
          <span className="sparkle-icon">✨</span>
          <span className="badge-text">Intervue Poll</span>
        </div>

        {/* Title */}
        <div className="poll-title-section">
          <h1 className="poll-main-title">
            <span className="title-regular">Let's </span>
            <span className="title-bold">Get Started</span>
          </h1>
          <p className="poll-main-subtitle">
            you'll have the ability to create and manage polls, ask questions, and monitor your students' responses in real-time.
          </p>
        </div>

        {/* Main Content Area */}
        <div className="poll-main-content">
          {/* Question and Timer Row */}
          <div className="question-timer-row">
            <div className="question-section">
              <label className="question-label">Enter your question</label>
              <div className="question-textarea-container">
                <textarea
                  className="question-textarea"
                  value={question}
                  onChange={handleQuestionChange}
                  placeholder="Ask!!"
                />
                <div className="character-count">0/100</div>
              </div>
            </div>
            
            <div className="timer-section">
              <div className="timer-dropdown-container">
                <select 
                  className="timer-select"
                  value={timer}
                  onChange={(e) => setTimer(e.target.value)}
                >
                  <option value="30 seconds">30 seconds</option>
                  <option value="60 seconds">60 seconds</option>
                  <option value="90 seconds">90 seconds</option>
                  <option value="120 seconds">120 seconds</option>
                </select>
                <svg className="timer-dropdown-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Options and Correct Answers Row */}
          <div className="options-correct-row">
            <div className="edit-options-column">
              <h3 className="column-title">Edit Options</h3>
              <div className="options-list">
                {options.map((option) => (
                  <div key={option.id} className="option-item">
                    <div className="option-number">{option.id}</div>
                    <input
                      type="text"
                      className="option-input"
                      value={option.text}
                      placeholder="Your Name"
                      onChange={(e) => handleOptionChange(option.id, e.target.value)}
                    />
                  </div>
                ))}
              </div>
              <button className="add-option-button" onClick={handleAddOption}>
                + Add More option
              </button>
            </div>

            <div className="correct-answers-column">
              <h3 className="column-title">Is it Correct?</h3>
              <div className="correct-answers-list">
                {options.map((option) => (
                  <div key={option.id} className="correct-answer-item">
                    <div className="radio-button-group">
                      <label className="radio-button-label">
                        <input
                          type="radio"
                          name={`correct-${option.id}`}
                          value="Yes"
                          checked={correctAnswers[option.id] === 'Yes'}
                          onChange={(e) => handleCorrectAnswerChange(option.id, e.target.value)}
                        />
                        <span className="radio-button-custom"></span>
                        Yes
                      </label>
                      <label className="radio-button-label">
                        <input
                          type="radio"
                          name={`correct-${option.id}`}
                          value="No"
                          checked={correctAnswers[option.id] === 'No'}
                          onChange={(e) => handleCorrectAnswerChange(option.id, e.target.value)}
                        />
                        <span className="radio-button-custom"></span>
                        No
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line and Ask Question Button */}
        <div className="poll-bottom-section">
          <div className="bottom-line"></div>
          <button className="ask-question-btn">
            Ask Question
          </button>
        </div>
      </div>
    </div>
  )
}

export default PollCreate