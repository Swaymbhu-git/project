import { useState } from 'react'
import { PollCreate } from './components'
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
    setCurrentView('pollCreate')
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
    return <PollCreate />
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