import { useState } from 'react'
import './App.css'

function App() {
  const [selectedRole, setSelectedRole] = useState('student')
  const [currentView, setCurrentView] = useState('roleSelect') // 'roleSelect' or 'pollCreate'
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

  const handleRoleSelect = (role) => {
    setSelectedRole(role)
  }

  const handleContinue = () => {
    if (selectedRole === 'teacher') {
      setCurrentView('pollCreate')
    }
  }

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

  if (currentView === 'pollCreate') {
    return (
      <div className="poll-create-screen">
        <div className="poll-create-content">
          {/* Badge */}
          <div className="badge">
            <span className="sparkle-icon">✨</span>
            <span className="badge-text">Intervue Poll</span>
          </div>

          {/* Title */}
          <div className="title-section">
            <h1 className="poll-title">Let's Get Started</h1>
            <p className="poll-subtitle">
              you'll have the ability to create and manage polls, ask questions, and monitor your students' responses in real-time.
            </p>
          </div>

          {/* Poll Form */}
          <div className="poll-form">
            <div className="form-row">
              <div className="question-section">
                <label className="form-label">Enter your question</label>
                <div className="textarea-container">
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
                <label className="form-label timer-label">
                  <select 
                    className="timer-dropdown"
                    value={timer}
                    onChange={(e) => setTimer(e.target.value)}
                  >
                    <option value="30 seconds">30 seconds</option>
                    <option value="60 seconds">60 seconds</option>
                    <option value="90 seconds">90 seconds</option>
                    <option value="120 seconds">120 seconds</option>
                  </select>
                  <svg className="dropdown-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </label>
              </div>
            </div>

            <div className="options-row">
              <div className="edit-options-section">
                <h3 className="section-title">Edit Options</h3>
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
                <button className="add-option-btn" onClick={handleAddOption}>
                  + Add More option
                </button>
              </div>

              <div className="correct-answers-section">
                <h3 className="section-title">Is it Correct?</h3>
                <div className="correct-answers-list">
                  {options.map((option) => (
                    <div key={option.id} className="correct-answer-item">
                      <div className="radio-group">
                        <label className="radio-label">
                          <input
                            type="radio"
                            name={`correct-${option.id}`}
                            value="Yes"
                            checked={correctAnswers[option.id] === 'Yes'}
                            onChange={(e) => handleCorrectAnswerChange(option.id, e.target.value)}
                          />
                          <span className="radio-custom"></span>
                          Yes
                        </label>
                        <label className="radio-label">
                          <input
                            type="radio"
                            name={`correct-${option.id}`}
                            value="No"
                            checked={correctAnswers[option.id] === 'No'}
                            onChange={(e) => handleCorrectAnswerChange(option.id, e.target.value)}
                          />
                          <span className="radio-custom"></span>
                          No
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Ask Question Button */}
            <button className="ask-question-button">
              Ask Question
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="welcome-screen">
        <div className="welcome-content">
          {/* Badge */}
          <div className="badge">
            <span className="sparkle-icon">✨</span>
            <span className="badge-text">Intervue Poll</span>
          </div>

          {/* Title */}
          <div className="title-section">
            <h1 className="title">
              <span className="title-welcome">Welcome to the </span>
              <span className="title-main">Live Polling System</span>
            </h1>
            <p className="subtitle">
              Please select the role that best describes you to begin using the live polling system
            </p>
          </div>

          {/* Role Cards */}
          <div className="role-cards">
            <div 
              className={`role-card ${selectedRole === 'student' ? 'selected' : ''}`}
              onClick={() => handleRoleSelect('student')}
              data-role="student"
            >
              <h3 className="card-title">I'm a Student</h3>
              <p className="card-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>

            <div 
              className={`role-card ${selectedRole === 'teacher' ? 'selected' : ''}`}
              onClick={() => handleRoleSelect('teacher')}
              data-role="teacher"
            >
              <h3 className="card-title">I'm a Teacher</h3>
              <p className="card-description">
                Create and manage polls, view responses, and engage with students in real-time during lectures.
              </p>
            </div>
          </div>

          {/* Continue Button */}
          <button className="continue-button" onClick={handleContinue}>
            Continue
          </button>
        </div>
    </div>
  )
}

export default App